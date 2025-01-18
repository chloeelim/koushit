from datetime import datetime
from http import HTTPStatus
from typing import Annotated


from fastapi import Depends, APIRouter, HTTPException, Response
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy import select
from src.auth.utils import (
    create_token,
)

from src.auth.schemas import Token
from src.common.dependencies import get_session
from .schemas import (
    SignUpData,
    UserPublic,
)

from src.auth.dependencies import (
    add_current_user,
    authenticate_user,
    get_current_user,
    get_password_hash,
)
from .models import (
    User,
)

router = APIRouter(prefix="/auth", tags=["auth"])
routerWithAuth = APIRouter(
    prefix="/auth", tags=["auth"], dependencies=[Depends(add_current_user)]
)

#######################
# username & password #
#######################


@router.post("/signup")
def sign_up(
    data: SignUpData,
    response: Response,
    session=Depends(get_session),
) -> Token:
    existing_user = session.scalars(
        select(User).where(User.email == data.email)
    ).first()
    if existing_user:
        raise HTTPException(HTTPStatus.CONFLICT)

    new_user = User(
        username=data.username,
        email=data.email,
        hashed_password=get_password_hash(data.password),
    )
    session.add(new_user)
    session.commit()
    session.refresh(new_user)

    new_user = session.scalar(select(User).where(User.id == new_user.id))

    session.commit()

    return create_token(new_user, response)


@router.post("/login")
def log_in(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()], response: Response
) -> Token:
    try:
        user = authenticate_user(form_data.username, form_data.password)
    except HTTPException as exc:
        raise exc

    return create_token(user, response)


@routerWithAuth.get("/session")
def get_user(
    current_user: Annotated[User, Depends(get_current_user)],
    session=Depends(get_session),
) -> UserPublic:
    return current_user


@routerWithAuth.get("/logout")
def logout(response: Response):
    response.delete_cookie(key="session")
    return ""
