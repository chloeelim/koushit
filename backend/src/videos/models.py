from typing import TYPE_CHECKING

from sqlalchemy import ForeignKey
from src.common.base import Base
from sqlalchemy.orm import Mapped, mapped_column, relationship

if TYPE_CHECKING:
    from backend.src.attempts.models import Attempt


class Video(Base):
    __tablename__ = "video"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(nullable=False)
    description: Mapped[str] = mapped_column(nullable=False)
    file: Mapped[str] = mapped_column(nullable=False)
    summary: Mapped[str] = mapped_column(nullable=False)

    points: Mapped[list["VideoPoint"]] = relationship(
        "VideoPoint", back_populates="video"
    )

    attempts: Mapped[list["Attempt"]] = relationship("Attempt", back_populates="video")


class VideoPoint(Base):
    __tablename__ = "video_point"

    id: Mapped[int] = mapped_column(primary_key=True)
    video_id: Mapped[int] = mapped_column(ForeignKey("video.id"), nullable=False)
    point: Mapped[str] = mapped_column(nullable=False)

    video: Mapped[Video] = relationship("Video", back_populates="points")
