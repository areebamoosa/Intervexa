"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PageMain from "@/components/layout/PageMain";
import StepBar from "@/components/interview/StepBar";
import Button from "@/components/ui/Button";
import { getQuestions, submitInterview } from "@/lib/api";
import { getDraft, saveReport } from "@/lib/storage";
import type { Draft, Question } from "@/lib/types";

export default function InterviewPage() {
  const router = useRouter();
  const [draft, setDraft] = useState<Draft | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const saved = getDraft();
    setDraft(saved);

    if (!saved.jobRole) {
      setLoading(false);
      return;
    }

    getQuestions(saved.jobRole)
      .then((data) => setQuestions(data.questions))
      .catch(() => setError("Could not load questions. Check that the backend is running."))
      .finally(() => setLoading(false));
  }, []);

  async function onSubmit(event: React.FormEvent) {
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
      const report = await submitInterview({
        candidate_name: draft.candidateName,
        candidate_email: draft.candidateEmail,
        job_role: draft.jobRole,
        answers: questions.map((question) => ({
          question: question.question,
          answer: answers[question.question].trim(),
        })),
      });
      saveReport(report);
      router.push("/report");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <PageMain>
        <p className="text-[#5e6872]">Loading questions...</p>
      </PageMain>
    );
  }

  if (!draft?.jobRole) {
    return (
      <PageMain>
        <StepBar current={2} />
        <p className="rounded-2xl bg-white p-4 text-sm">
          Choose a job role first.{" "}
          <Link href="/role" className="font-medium text-[#0e6b52]">
            Go to roles
          </Link>
        </p>
      </PageMain>
    );
  }

  return (
    <PageMain>
      <StepBar current={2} />
      <h1 className="font-serif text-4xl tracking-tight">Interview answers</h1>
      <p className="mt-3 text-[#5e6872]">
        {draft.candidateName} · {draft.jobRole}
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-5">
        {questions.map((question, index) => (
          <label key={question.question} className="block rounded-2xl border border-[#e6dfd4] bg-white p-5">
            <span className="text-sm text-[#5e6872]">
              {index + 1}. {question.required_skill} · {question.max_score} marks
            </span>
            <span className="mt-2 block font-medium">{question.question}</span>
            <textarea
              value={answers[question.question] || ""}
              onChange={(event) =>
                setAnswers({ ...answers, [question.question]: event.target.value })
              }
              rows={4}
              className="mt-3 w-full rounded-xl border border-[#e3dbd0] px-3 py-2.5 outline-none focus:border-[#0e6b52]"
              placeholder="Type the candidate's answer"
            />
          </label>
        ))}

        {error && <p className="rounded-2xl bg-[#fde8e4] p-4 text-sm">{error}</p>}
        <Button type="submit" disabled={saving || questions.length === 0}>
          {saving ? "Scoring..." : "Get the report"}
        </Button>
      </form>
    </PageMain>
  );
}
