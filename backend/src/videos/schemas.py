from datetime import datetime
from typing import Optional
from pydantic import BaseModel


class VideoPublic(BaseModel):
    id: int
    title: str
    description: str
    file: str
    summary: str
    points: list["VideoPointPublic"]
    attempts: list["AttemptPublic"]


class VideoPointPublic(BaseModel):
    id: int
    video_id: int
    point: str


class AttemptPublic(BaseModel):
    id: int
    user_id: int
    video_id: int
    submission: Optional["SubmissionPublic"] = None
    created_at: datetime


class SubmissionPublic(BaseModel):
    file: str
    text: str
    comments: list["CommentPublic"]


class CommentPublic(BaseModel):
    topic: str
    explanation: str


class VideoCreate(BaseModel):
    title: str
    description: str
    file: str
    summary: str
    points: list["VideoPointCreate"]


class VideoPointCreate(BaseModel):
    point: str


class VideoAttemptCreate(BaseModel):
    file: str
