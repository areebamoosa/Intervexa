"use client";

import PageMain from "@/components/layout/PageMain";
import Button from "@/components/ui/Button";

export default function DashboardPage() {
  return (
    <PageMain wide>
      <h1 className="text-3xl font-bold tracking-tight text-ink">Dashboard</h1>
      <p className="mt-2 text-sm leading-6 text-muted">
        Check a job level, or evaluate a candidate on one of the 15 stored roles.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(16,40,36,0.06)]">
          <h2 className="text-xl font-bold text-ink">Check a job level</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Predict the experience level from a title and description.
          </p>
          <Button href="/evaluate" className="mt-4">
            Check a job
          </Button>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(16,40,36,0.06)]">
          <h2 className="text-xl font-bold text-ink">Evaluate a candidate</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Pick a role, answer its 10 questions, and read the score report.
          </p>
          <Button href="/candidate" className="mt-4">
            Start evaluation
          </Button>
        </div>
      </div>
    </PageMain>
  );
}
