from typing import TYPE_CHECKING
from sqlalchemy import ForeignKey
from src.common.base import Base
from sqlalchemy.orm import Mapped, mapped_column, relationship

if TYPE_CHECKING:
    from src.videos.models import Video


class Attempt(Base):
    __tablename__ = "attempt"

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"), nullable=False)
    video_id: Mapped[int] = mapped_column(ForeignKey("video.id"), nullable=False)

    video: Mapped["Video"] = relationship("Video", back_populates="attempts")

    submission: Mapped["Submission"] = relationship(
        "Submission", uselist=False, back_populates="attempt"
    )


class Submission(Base):
    __tablename__ = "submission"

    id: Mapped[int] = mapped_column(primary_key=True)
    attempt_id: Mapped[int] = mapped_column(ForeignKey("attempt.id"), nullable=False)

    file: Mapped[str] = mapped_column(nullable=False)
    text: Mapped[str] = mapped_column(nullable=False, server_default="")

    attempt: Mapped[Attempt] = relationship("Attempt", back_populates="submission")

    comments: Mapped[list["Comment"]] = relationship(
        "Comment", back_populates="submission"
    )


class Comment(Base):
    __tablename__ = "comment"

    id: Mapped[int] = mapped_column(primary_key=True)
    submission_id: Mapped[int] = mapped_column(
        ForeignKey("submission.id"), nullable=False
    )
    topic: Mapped[str] = mapped_column(nullable=False)
    explanation: Mapped[str] = mapped_column(nullable=False)

    submission: Mapped[Submission] = relationship(
        "Submission", back_populates="comments"
    )
