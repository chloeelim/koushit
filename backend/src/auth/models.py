from enum import Enum
from sqlalchemy.orm import Mapped, mapped_column
from src.common.base import Base


class AccountType(str, Enum):
    NORMAL = "normal"
    GOOGLE = "google"


class User(Base):
    __tablename__ = "user"

    id: Mapped[int] = mapped_column(primary_key=True)

    username: Mapped[str] = mapped_column(unique=True)
    email: Mapped[str] = mapped_column(unique=True)
    hashed_password: Mapped[str]
