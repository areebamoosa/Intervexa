from pathlib import Path

import joblib
import numpy as np
from fastapi import HTTPException

from app.data import questions_df

MODEL_FILE = Path(__file__).resolve().parent.parent / "models" / "answer_model.pkl"
answer_model = joblib.load(MODEL_FILE)

submissions = []


def get_roles():
    roles = questions_df["job_role"].unique().tolist()
    return {"roles": roles}


def get_questions(job_role: str):
    rows = questions_df[questions_df["job_role"] == job_role]

    if rows.empty:
        raise HTTPException(status_code=404, detail="Job role not found")

    questions = []
    for row in rows.to_dict(orient="records"):
        questions.append({
            "required_skill": row["required_skill"],
            "question": row["question"],
            "max_score": int(row["max_score"]),
        })

    return {"job_role": job_role, "questions": questions}


def result_label(percentage):
    if percentage >= 80:
        return "Excellent"
    if percentage >= 60:
        return "Good"
    if percentage >= 40:
        return "Average"
    return "Poor"


def recommendation(percentage):
    if percentage >= 80:
        return "Strong candidate. Recommended for the next round."
    if percentage >= 60:
        return "Good candidate. Review the weak topics before hiring."
    if percentage >= 40:
        return "Average candidate. Needs improvement in the missing topics."
    return "Weak candidate. Not recommended for this role right now."


def score_one_answer(job_role, question_text, answer_text):
    ml_label = str(answer_model.predict([answer_text])[0])

    rows = questions_df[
        (questions_df["job_role"] == job_role)
        & (questions_df["question"] == question_text)
    ]

    if rows.empty:
        return {
            "question": question_text,
            "answer": answer_text,
            "required_skill": "Unknown",
            "score": 0,
            "max_score": 0,
            "matched_keywords": [],
            "missing_keywords": [],
            "ml_label": ml_label,
        }

    row = rows.iloc[0]
    keywords = row["keywords"].split(";")
    answer_lower = answer_text.lower()

    matched = []
    missing = []
    for keyword in keywords:
        keyword = keyword.strip().lower()
        if keyword in answer_lower:
            matched.append(keyword)
        else:
            missing.append(keyword)

    max_score = int(row["max_score"])
    score = (len(matched) / len(keywords)) * max_score
    score = float(np.round(score, 2))

    return {
        "question": question_text,
        "answer": answer_text,
        "required_skill": row["required_skill"],
        "score": score,
        "max_score": max_score,
        "matched_keywords": matched,
        "missing_keywords": missing,
        "ml_label": ml_label,
    }


def build_evaluation(job_role, answers):
    results = []
    for item in answers:
        results.append(score_one_answer(job_role, item.question, item.answer))

    scores = np.array([item["score"] for item in results], dtype=float)
    max_scores = np.array([item["max_score"] for item in results], dtype=float)

    total_score = float(np.sum(scores))
    max_total = float(np.sum(max_scores))

    if max_total == 0:
        percentage = 0
    else:
        percentage = float(np.round((total_score / max_total) * 100, 2))

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

    return {
        "question_results": results,
        "total_score": total_score,
        "max_score": max_total,
        "percentage": percentage,
        "result": result_label(percentage),
        "strengths": strengths,
        "weaknesses": weaknesses,
        "recommendation": recommendation(percentage),
    }


def create_submission(data):
    saved = data.model_dump()
    saved["id"] = len(submissions) + 1
    saved.update(build_evaluation(data.job_role, data.answers))
    submissions.append(saved)
    return {"message": "Evaluation complete", "submission": saved}