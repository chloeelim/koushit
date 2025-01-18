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
    file: str


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
