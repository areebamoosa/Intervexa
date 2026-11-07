"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";

export default function StartCard() {
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
    <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(16,40,36,0.06)] sm:p-8">
      <h3 className="text-2xl font-bold text-teal">Start an evaluation</h3>
      <div className="mt-6 space-y-4">
        <TextField label="Your name" value={name} onChange={setName} required placeholder="Alex Rivera" />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          required
          placeholder="alex@email.com"
        />
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">Next you pick one of 15 roles. Each role loads its own questions.</p>
      <Button type="submit" className="mt-6 w-full">
        Get started now
      </Button>
    </form>
  );
}
