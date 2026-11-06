"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PageMain from "@/components/layout/PageMain";
import StepBar from "@/components/interview/StepBar";
import Button from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";
import { getDraft, saveDraft } from "@/lib/storage";

export default function CandidatePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const draft = getDraft();
    setName(draft.candidateName);
    setEmail(draft.candidateEmail);
  }, []);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    saveDraft({
      candidateName: name.trim(),
      candidateEmail: email.trim(),
    });
    router.push("/role");
  }

  return (
    <PageMain>
      <StepBar current={0} />
      <h1 className="font-serif text-4xl tracking-tight">Candidate details</h1>
      <p className="mt-3 text-[#5e6872]">
        These details appear at the top of the evaluation report.
      </p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <TextField label="Full name" value={name} onChange={setName} required placeholder="Ali Khan" />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          required
          placeholder="ali@email.com"
        />
        <Button type="submit">Continue to job role</Button>
      </form>
    </PageMain>
  );
}
