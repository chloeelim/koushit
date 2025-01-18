from fastapi import APIRouter, Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.auth.dependencies import add_current_user
from src.auth.router import (
    router as auth_router,
    routerWithAuth as auth_router_authenticated,
)


from contextlib import asynccontextmanager

import logging

from src.common.constants import FRONTEND_URL

logging.getLogger("passlib").setLevel(logging.ERROR)


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Run before server start
    yield
    # Run after server stops


server = FastAPI(title="koushi.t Backend", lifespan=lifespan)

origins = [FRONTEND_URL]

server.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


server.include_router(auth_router)

authenticated_router = APIRouter(prefix="", dependencies=[Depends(add_current_user)])
authenticated_router.include_router(auth_router_authenticated)

server.include_router(authenticated_router)
