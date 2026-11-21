from fastapi import APIRouter, HTTPException
from fastapi.responses import Response

from app.controllers.interview import create_submission, get_questions, get_roles
from app.db import get_report
from app.ml.experience import predict_experience
from app.pdf_report import build_report_pdf
from app.schemas import CandidateSubmission, JobText

router = APIRouter()


@router.post("/experience")
def experience(data: JobText):
    level = predict_experience(data.title, data.description)
    return {"title": data.title, "predicted_experience_level": level}


@router.get("/roles")
def roles():
    return get_roles()


@router.get("/questions")
def questions(job_role: str):
    return get_questions(job_role)


@router.post("/submissions")
def submissions(data: CandidateSubmission):
    return create_submission(data)


@router.get("/reports/{report_id}/pdf")
def download_report(report_id: int):
    report = get_report(report_id)
    if report is None:
        raise HTTPException(status_code=404, detail="Report not found")

    pdf = build_report_pdf(report)
    filename = f"intervexa-report-{report_id}.pdf"
    return Response(
        content=pdf,
        media_type="application/pdf",
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )
