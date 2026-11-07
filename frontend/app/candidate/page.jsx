"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PageMain from "@/components/layout/PageMain";
import StepBar from "@/components/interview/StepBar";
import Button from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";

export default function CandidatePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const saved = sessionStorage.getItem("intervexa-draft");
    if (!saved) return;
    const draft = JSON.parse(saved);
    setName(draft.candidateName || "");
    setEmail(draft.candidateEmail || "");
  }, []);

  function onSubmit(event) {
    event.preventDefault();
    const saved = sessionStorage.getItem("intervexa-draft");
    const draft = saved ? JSON.parse(saved) : {};
    sessionStorage.setItem(
      "intervexa-draft",
      JSON.stringify({
        ...draft,
        candidateName: name.trim(),
        candidateEmail: email.trim(),
      }),
    );
    router.push("/role");
  }

  return (
    <PageMain>
      <StepBar current={0} />
      <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(16,40,36,0.06)] sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-ink">Candidate details</h1>
        <p className="mt-2 text-sm leading-6 text-muted">These details appear at the top of the evaluation report.</p>
        <div className="mt-6 space-y-4">
          <TextField label="Full name" value={name} onChange={setName} required placeholder="Alex Rivera" />
          <TextField label="Email" type="email" value={email} onChange={setEmail} required placeholder="alex@email.com" />
        </div>
        <Button type="submit" className="mt-6">
          Continue to job role
        </Button>
      </form>
    </PageMain>
  );
}
