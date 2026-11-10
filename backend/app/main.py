from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.db import setup_tables
from app.routes.interview import router as interview_router


@asynccontextmanager
async def lifespan(app):
    setup_tables()
    yield

app = FastAPI(title="Intervexa", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(interview_router)


@app.get("/")
def home():
    return {"message": "Intervexa app is running!"}
