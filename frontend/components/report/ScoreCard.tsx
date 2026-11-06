import type { Evaluation } from "@/lib/types";

const resultColor: Record<string, string> = {
  Excellent: "bg-[#e5f4ee] text-[#0e6b52]",
  Good: "bg-[#e7f1e8] text-[#1f6b45]",
  Average: "bg-[#f8efd8] text-[#8a5a12]",
  Poor: "bg-[#fde8e4] text-[#9a3412]",
};

export default function ScoreCard({ evaluation }: { evaluation: Evaluation }) {
  const color = resultColor[evaluation.result] || "bg-[#efeae2] text-[#1a2332]";

  return (
    <section className="rounded-3xl border border-[#e6dfd4] bg-white p-6">
      <p className="text-sm text-[#5e6872]">
        {evaluation.candidate_name} · {evaluation.candidate_email}
      </p>
      <h1 className="mt-2 font-serif text-4xl tracking-tight">{evaluation.job_role}</h1>
      <div className="mt-6 flex flex-wrap items-end gap-4">
        <p className="font-serif text-6xl leading-none">{evaluation.percentage}%</p>
        <div>
          <span className={`rounded-full px-3 py-1 text-sm font-medium ${color}`}>
            {evaluation.result}
          </span>
          <p className="mt-2 text-sm text-[#5e6872]">
            {evaluation.total_score} / {evaluation.max_score} marks
          </p>
        </div>
      </div>
      <p className="mt-6 text-[#1a2332]">{evaluation.recommendation}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-[#f4f8f5] p-4">
          <h2 className="text-sm font-semibold">Strengths</h2>
          <List items={evaluation.strengths} empty="No strong topics yet." />
        </div>
        <div className="rounded-2xl bg-[#fbf6f2] p-4">
          <h2 className="text-sm font-semibold">Weaknesses</h2>
          <List items={evaluation.weaknesses} empty="No missing topics." />
        </div>
      </div>
    </section>
  );
}

function List({ items, empty }: { items: string[]; empty: string }) {
  if (items.length === 0) {
    return <p className="mt-2 text-sm text-[#5e6872]">{empty}</p>;
  }

  return (
    <ul className="mt-2 space-y-2 text-sm">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
