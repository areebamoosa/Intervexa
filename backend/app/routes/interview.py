from fastapi import APIRouter

from app.controllers.interview import create_submission, get_questions, get_roles
from app.schemas import CandidateSubmission

router = APIRouter()

@router.get("/roles")
def roles():
    return get_roles()


@router.get("/questions")
def questions(job_role: str):
    return get_questions(job_role)


@router.post("/submissions")
def submissions(data: CandidateSubmission):
    return create_submission(data)