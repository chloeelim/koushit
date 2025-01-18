import json
from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.orm import selectinload

from src.lm.feedback_lm import generate_feedback
from src.transcribe.transcribe import transcribe
from src.attempts.models import Attempt, Comment
from src.auth.dependencies import get_current_user
from src.common.dependencies import get_session
from src.videos.models import Video, VideoPoint
from src.videos.schemas import (
    AttemptPublic,
    VideoAttemptCreate,
    VideoCreate,
    VideoPublic,
)


router = APIRouter(prefix="/videos", tags=["videos"])


@router.get("/")
def get_all_videos(
    session=Depends(get_session),
    user=Depends(get_current_user),
) -> list[VideoPublic]:
    videos = session.scalars(
        select(Video).options(
            selectinload(Video.points),
            selectinload(Video.attempts.and_(Attempt.user_id == user.id)),
        )
    ).all()
    return videos


@router.get("/{video_id}")
def get_video(
    video_id: int,
    session=Depends(get_session),
    user=Depends(get_current_user),
) -> VideoPublic:
    video = session.scalar(
        select(Video)
        .where(Video.id == video_id)
        .options(
            selectinload(Video.points),
            selectinload(Video.attempts.and_(Attempt.user_id == user.id)).selectinload(
                Attempt.comments
            ),
        )
    )
    return video


@router.post("/")
def create_video(data: VideoCreate, session=Depends(get_session)) -> VideoPublic:
    new_video = Video(
        title=data.title,
        description=data.description,
        file=data.file,
        summary=data.summary,
    )
    for point in data.points:
        new_video.points.append(VideoPoint(point=point.point))
    session.add(new_video)
    session.commit()
    session.refresh(new_video)
    return new_video


@router.post("/{video_id}/attempts")
def create_attempt(
    video_id: int,
    data: VideoAttemptCreate,
    session=Depends(get_session),
    user=Depends(get_current_user),
) -> AttemptPublic:
    text = transcribe("uploads/" + data.file)
    new_attempt = Attempt(user_id=user.id, video_id=video_id, file=data.file, text=text)

    feedbacks = generate_feedback(video_id, text)

    print(feedbacks)
    for comment in feedbacks["comments"]:
        new_attempt.comments.append(Comment(**comment))

    session.add(new_attempt)
    session.commit()

    session.refresh(new_attempt)
    return new_attempt
