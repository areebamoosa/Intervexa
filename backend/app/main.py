from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.interview import router as interview_router

app = FastAPI(title="Intervexa")

# The Next.js app runs on another port, so the browser needs this permission.
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