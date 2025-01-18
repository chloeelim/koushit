from typing import TYPE_CHECKING
from sqlalchemy import ForeignKey
from src.common.base import Base
from sqlalchemy.orm import Mapped, mapped_column, relationship

if TYPE_CHECKING:
    from backend.src.videos.models import Video


class Attempt(Base):
    __tablename__ = "attempt"

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"), nullable=False)
    video_id: Mapped[int] = mapped_column(ForeignKey("video.id"), nullable=False)
    file: Mapped[str] = mapped_column(nullable=False)

    video: Mapped["Video"] = relationship("Video", back_populates="attempts")
