"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PageMain from "@/components/layout/PageMain";
import StepBar from "@/components/interview/StepBar";
import AnswerCard from "@/components/report/AnswerCard";
import ScoreCard from "@/components/report/ScoreCard";
import Button from "@/components/ui/Button";

export default function ReportPage() {
  const router = useRouter();
  const [evaluation, setEvaluation] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("intervexa-report");
    setEvaluation(saved ? JSON.parse(saved) : null);
    setReady(true);
  }, []);

  function startOver() {
    sessionStorage.removeItem("intervexa-draft");
    sessionStorage.removeItem("intervexa-report");
    router.push("/candidate");
  }

  if (!ready) {
    return (
      <PageMain>
        <p className="text-muted">Loading report...</p>
      </PageMain>
    );
  }

  if (!evaluation) {
    return (
      <PageMain>
        <StepBar current={3} />
        <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-3xl font-bold tracking-tight text-ink">No report yet</h1>
          <p className="mt-2 text-sm text-muted">Finish an interview to see the scores.</p>
          <div className="mt-6">
            <Button href="/candidate">Start an evaluation</Button>
          </div>
        </div>
      </PageMain>
    );
  }

  return (
    <PageMain wide>
      <StepBar current={3} />
      <ScoreCard evaluation={evaluation} />
      <h2 className="mt-10 text-2xl font-bold text-ink">Answer review</h2>
      <div className="mt-4 space-y-4">
        {evaluation.question_results.map((item) => (
          <AnswerCard key={item.question} item={item} />
        ))}
      </div>
      <div className="mt-8">
        <Button type="button" variant="secondary" onClick={startOver}>
          Start a new evaluation
        </Button>
      </div>
    </PageMain>
  );
}
