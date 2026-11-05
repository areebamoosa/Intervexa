from fastapi import FastAPI

from app.routes.interview import router as interview_router

app = FastAPI(title="Intervexa")

app.include_router(interview_router)

@app.get("/")
def home():
    return {"message": "Intervexa app is running!"}