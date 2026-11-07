"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PageMain from "@/components/layout/PageMain";
import StepBar from "@/components/interview/StepBar";
import Alert from "@/components/ui/Alert";
import Button from "@/components/ui/Button";
import TextArea from "@/components/ui/TextArea";
import { GetQuestions, SubmitInterview } from "@/lib/api";

export default function InterviewPage() {
  const router = useRouter();
  const [draft, setDraft] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("intervexa-draft");
    const draft = saved ? JSON.parse(saved) : {};
    setDraft(draft);

    if (!draft.jobRole) {
      setLoading(false);
      return;
    }

    async function loadQuestions() {
      try {
        const data = await GetQuestions(draft.jobRole);
        setQuestions(data.questions);
      } catch {
        setError("Could not load questions. Check that the backend is running.");
      } finally {
        setLoading(false);
      }
    }

    loadQuestions();
  }, []);

  async function onSubmit(event) {
    event.preventDefault();
    if (!draft) return;

    const missing = questions.some((question) => !answers[question.question]?.trim());
    if (missing) {
      setError("Write an answer for every question.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      const data = await SubmitInterview({
        candidate_name: draft.candidateName,
        candidate_email: draft.candidateEmail,
        job_role: draft.jobRole,
        answers: questions.map((question) => ({
          question: question.question,
          answer: answers[question.question].trim(),
        })),
      });

      sessionStorage.setItem("intervexa-report", JSON.stringify(data.submission));
      router.push("/report");
    } catch {
      setError("The evaluation could not be completed.");
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <PageMain>
        <p className="text-muted">Loading questions...</p>
      </PageMain>
    );
  }

  if (!draft?.jobRole) {
    return (
      <PageMain>
        <StepBar current={2} />
        <Alert>
          Choose a job role first.{" "}
          <Link href="/role" className="font-semibold text-teal">
            Go to roles
          </Link>
        </Alert>
      </PageMain>
    );
  }

  return (
    <PageMain>
      <StepBar current={2} />
      <h1 className="text-3xl font-bold tracking-tight text-ink">Interview answers</h1>
      <p className="mt-2 text-sm text-muted">
        {draft.candidateName} · {draft.jobRole}
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        {questions.map((question, index) => (
          <label key={question.question} className="block rounded-2xl bg-white p-5 shadow-[0_8px_30px_rgba(16,40,36,0.06)]">
            <span className="text-sm text-muted">
              {index + 1}. {question.required_skill} · {question.difficulty} · {question.max_score} marks
            </span>
            <span className="mt-2 block font-semibold text-ink">{question.question}</span>
            <TextArea
              value={answers[question.question] || ""}
              onChange={(value) =>
                setAnswers((current) => ({ ...current, [question.question]: value }))
              }
              placeholder="Type the candidate's answer"
            />
          </label>
        ))}

        {error && <Alert tone="error">{error}</Alert>}
        <Button type="submit" disabled={saving || questions.length === 0}>
          {saving ? "Scoring..." : "Get the report"}
        </Button>
      </form>
    </PageMain>
  );
}
