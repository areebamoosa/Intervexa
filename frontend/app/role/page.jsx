"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PageMain from "@/components/layout/PageMain";
import StepBar from "@/components/interview/StepBar";
import Alert from "@/components/ui/Alert";
import { GetRoles } from "@/lib/api";

const roleNotes = {
  "Python Developer": "Python basics, data structures, OOP, and harder language questions.",
  "Frontend Developer": "HTML, CSS, JavaScript, layout, and browser performance.",
  "Backend Developer": "APIs, databases, auth, and how a service stays reliable.",
  "Full Stack Developer": "How the browser, the API, and the database fit together.",
  "Mobile App Developer": "Screens, navigation, device storage, and offline behavior.",
  "Junior Software Engineer": "Basics of code, git, debugging, and small design choices.",
  "Senior Software Engineer": "Tradeoffs, testing, incidents, and system design.",
  "Lead Software Engineer": "Team direction, technical decisions, and delivery.",
  "Data Analyst": "Metrics, SQL, charts, and how to question a number.",
  "Machine Learning Engineer": "Training, evaluation, pipelines, and models in production.",
  "Android Developer": "Activities, layouts, lifecycle, and app architecture.",
  "UI/UX Designer": "Users, wireframes, usability, and accessible design.",
  "Cloud Engineer": "Regions, identity, networking, and infrastructure as code.",
  "Cybersecurity Engineer": "Threats, access control, encryption, and incident response.",
  "Data Engineer": "Pipelines, warehouses, data quality, and backfills.",
};

export default function RolePage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [hasCandidate, setHasCandidate] = useState(false);
  const [roles, setRoles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = sessionStorage.getItem("intervexa-draft");
    const draft = saved ? JSON.parse(saved) : {};
    setHasCandidate(Boolean(draft.candidateName && draft.candidateEmail));
    setReady(true);

    if (!draft.candidateName || !draft.candidateEmail) return;

    async function loadRoles() {
      try {
        const data = await GetRoles();
        setRoles(data.roles);
      } catch {
        setError("Could not load roles. Start the backend, then refresh this page.");
      }
    }

    loadRoles();
  }, []);

  function chooseRole(role) {
    const saved = sessionStorage.getItem("intervexa-draft");
    const draft = saved ? JSON.parse(saved) : {};
    sessionStorage.setItem("intervexa-draft", JSON.stringify({ ...draft, jobRole: role }));
    router.push("/interview");
  }

  if (!ready) {
    return (
      <PageMain>
        <p className="text-muted">Loading...</p>
      </PageMain>
    );
  }

  return (
    <PageMain>
      <StepBar current={1} />
      <h1 className="text-3xl font-bold tracking-tight text-ink">Choose a job role</h1>
      <p className="mt-2 text-sm leading-6 text-muted">The questions change with the role you pick.</p>

      {!hasCandidate && (
        <div className="mt-6">
          <Alert>
            Add the candidate first.{" "}
            <Link href="/candidate" className="font-semibold text-teal">
              Go to candidate details
            </Link>
          </Alert>
        </div>
      )}

      {error && (
        <div className="mt-6">
          <Alert tone="error">{error}</Alert>
        </div>
      )}

      <div className="mt-6 grid gap-4">
        {roles.map((role) => (
          <button
            key={role}
            type="button"
            onClick={() => chooseRole(role)}
            className="rounded-2xl bg-white p-5 text-left shadow-[0_8px_30px_rgba(16,40,36,0.06)] hover:outline hover:outline-teal"
          >
            <span className="text-lg font-semibold text-ink">{role}</span>
            <span className="mt-1 block text-sm text-muted">{roleNotes[role] || "Interview questions for this role."}</span>
          </button>
        ))}
      </div>
    </PageMain>
  );
}
