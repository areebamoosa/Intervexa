from pydantic import BaseModel

class AnswerItem(BaseModel):
    question: str
    answer: str

class CandidateSubmission(BaseModel):
    candidate_name: str
    candidate_email: str
    job_role: str
    answers: list[AnswerItem]