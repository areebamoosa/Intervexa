import csv
from pathlib import Path

from fastapi import HTTPException

from app.ml.model import predict_label

QUESTIONS_FILE = Path(__file__).resolve().parent.parent / "datasets" / "interview_questions.csv"

with QUESTIONS_FILE.open(newline="") as file:
    questions = list(csv.DictReader(file))


def get_roles():
    roles = []
    for row in questions:
        if row["job_role"] not in roles:
            roles.append(row["job_role"])
    return {"roles": roles}


def get_questions(job_role):
    rows = [row for row in questions if row["job_role"] == job_role]
    if not rows:
        raise HTTPException(status_code=404, detail="Job role not found")

    return {
        "job_role": job_role,
        "questions": [
            {
                "required_skill": row["required_skill"],
                "question": row["question"],
                "difficulty": row["difficulty"],
                "max_score": int(row["max_score"]),
            }
            for row in rows
        ],
    }


def grade(percentage):
    if percentage >= 80:
        return "Excellent", "Strong candidate. Recommended for the next round."
    if percentage >= 60:
        return "Good", "Good candidate. Review the weak topics before hiring."
    if percentage >= 40:
        return "Average", "Average candidate. Needs improvement in the missing topics."
    return "Poor", "Weak candidate. Not recommended for this role right now."


def score_answer(job_role, question_text, answer_text):
    label = predict_label(answer_text)

    row = None
    for item in questions:
        if item["job_role"] == job_role and item["question"] == question_text:
            row = item
            break

    if row is None:
        return {
            "question": question_text,
            "answer": answer_text,
            "required_skill": "Unknown",
            "score": 0,
            "max_score": 0,
            "matched_keywords": [],
            "missing_keywords": [],
            "ml_label": label,
        }

    keywords = [word.strip().lower() for word in row["keywords"].split(";") if word.strip()]
    answer_lower = answer_text.lower()
    matched = [word for word in keywords if word in answer_lower]
    missing = [word for word in keywords if word not in answer_lower]

    max_score = int(row["max_score"])
    if keywords:
        score = round((len(matched) / len(keywords)) * max_score, 2)
    else:
        score = 0

    return {
        "question": question_text,
        "answer": answer_text,
        "required_skill": row["required_skill"],
        "score": score,
        "max_score": max_score,
        "matched_keywords": matched,
        "missing_keywords": missing,
        "ml_label": label,
    }


def create_submission(data):
    results = []
    for item in data.answers:
        results.append(score_answer(data.job_role, item.question, item.answer))

    total_score = round(sum(item["score"] for item in results), 2)
    max_score = sum(item["max_score"] for item in results)

    if max_score == 0:
        percentage = 0
    else:
        percentage = round((total_score / max_score) * 100, 2)

    strengths = []
    weaknesses = []
    for item in results:
        if item["max_score"] == 0:
            continue
        if item["score"] >= item["max_score"] / 2:
            strengths.append(item["required_skill"])
        else:
            missing = ", ".join(item["missing_keywords"])
            weaknesses.append(item["required_skill"] + " (missing: " + missing + ")")

    label, note = grade(percentage)

    submission = {
        "candidate_name": data.candidate_name,
        "candidate_email": data.candidate_email,
        "job_role": data.job_role,
        "question_results": results,
        "total_score": total_score,
        "max_score": max_score,
        "percentage": percentage,
        "result": label,
        "strengths": strengths,
        "weaknesses": weaknesses,
        "recommendation": note,
    }

    return {"message": "Evaluation complete", "submission": submission}
