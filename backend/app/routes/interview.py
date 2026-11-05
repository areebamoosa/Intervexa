from fastapi import APIRouter

from app.controllers import interview as interview_controller
from app.schemas import CandidateSubmission

router = APIRouter()

@router.get("/roles", tags=["Roles"])
def get_roles():
    return interview_controller.get_roles()


@router.get("/questions", tags=["Questions"])
def get_questions(job_role: str):
    return interview_controller.get_questions(job_role)


@router.post("/submissions", tags=["Submissions"])
def create_submission(data: CandidateSubmission):
    return interview_controller.create_submission(data)