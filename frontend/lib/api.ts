import type { AnswerInput, Evaluation, Question } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_URL}${path}`);

  if (!response.ok) {
    throw new Error("The server could not complete this request.");
  }

  return response.json();
}

export function getRoles() {
  return getJson<{ roles: string[] }>("/roles");
}

export function getQuestions(jobRole: string) {
  return getJson<{ job_role: string; questions: Question[] }>(
    `/questions?job_role=${encodeURIComponent(jobRole)}`,
  );
}

export async function submitInterview(body: {
  candidate_name: string;
  candidate_email: string;
  job_role: string;
  answers: AnswerInput[];
}) {
  const response = await fetch(`${API_URL}/submissions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("The evaluation could not be completed.");
  }

  const data: { submission: Evaluation } = await response.json();
  return data.submission;
}
