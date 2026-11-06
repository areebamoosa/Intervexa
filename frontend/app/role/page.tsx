"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PageMain from "@/components/layout/PageMain";
import StepBar from "@/components/interview/StepBar";
import { getRoles } from "@/lib/api";
import { getDraft, saveDraft } from "@/lib/storage";

const roleNotes: Record<string, string> = {
  "Python Developer": "Python basics, lists, OOP, functions, and errors.",
  "Frontend Developer": "HTML, CSS, JavaScript, the DOM, and responsive pages.",
};

export default function RolePage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [hasCandidate, setHasCandidate] = useState(false);
  const [roles, setRoles] = useState<string[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const draft = getDraft();
    setHasCandidate(Boolean(draft.candidateName && draft.candidateEmail));
    setReady(true);

    if (!draft.candidateName || !draft.candidateEmail) return;

    getRoles()
      .then((data) => setRoles(data.roles))
      .catch(() => setError("Could not load roles. Start the backend, then refresh this page."));
  }, []);

  function chooseRole(role: string) {
    saveDraft({ jobRole: role });
    router.push("/interview");
  }

  if (!ready) {
    return (
      <PageMain>
        <p className="text-[#5e6872]">Loading...</p>
      </PageMain>
    );
  }

  return (
    <PageMain>
      <StepBar current={1} />
      <h1 className="font-serif text-4xl tracking-tight">Choose a job role</h1>
      <p className="mt-3 text-[#5e6872]">The questions change with the role you pick.</p>

      {!hasCandidate && (
        <p className="mt-8 rounded-2xl bg-white p-4 text-sm">
          Add the candidate first.{" "}
          <Link href="/candidate" className="font-medium text-[#0e6b52]">
            Go to candidate details
          </Link>
        </p>
      )}

      {error && <p className="mt-8 rounded-2xl bg-[#fde8e4] p-4 text-sm">{error}</p>}

      <div className="mt-8 grid gap-4">
        {roles.map((role) => (
          <button
            key={role}
            type="button"
            onClick={() => chooseRole(role)}
            className="rounded-2xl border border-[#e6dfd4] bg-white p-5 text-left hover:border-[#0e6b52]"
          >
            <span className="text-lg font-medium">{role}</span>
            <span className="mt-1 block text-sm text-[#5e6872]">
              {roleNotes[role] || "Interview questions for this role."}
            </span>
          </button>
        ))}
      </div>
    </PageMain>
  );
}
