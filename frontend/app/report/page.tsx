"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PageMain from "@/components/layout/PageMain";
import StepBar from "@/components/interview/StepBar";
import AnswerCard from "@/components/report/AnswerCard";
import ScoreCard from "@/components/report/ScoreCard";
import Button from "@/components/ui/Button";
import { clearInterview, getReport } from "@/lib/storage";
import type { Evaluation } from "@/lib/types";

export default function ReportPage() {
  const router = useRouter();
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setEvaluation(getReport());
    setReady(true);
  }, []);

  function startOver() {
    clearInterview();
    router.push("/candidate");
  }

  if (!ready) {
    return (
      <PageMain>
        <p className="text-[#5e6872]">Loading report...</p>
      </PageMain>
    );
  }

  if (!evaluation) {
    return (
      <PageMain>
        <StepBar current={3} />
        <h1 className="font-serif text-4xl tracking-tight">No report yet</h1>
        <p className="mt-3 text-[#5e6872]">Finish an interview to see the scores.</p>
        <div className="mt-8">
          <Button href="/candidate">Start an evaluation</Button>
        </div>
      </PageMain>
    );
  }

  return (
    <PageMain>
      <StepBar current={3} />
      <ScoreCard evaluation={evaluation} />
      <h2 className="mt-10 font-serif text-3xl">Answer review</h2>
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
