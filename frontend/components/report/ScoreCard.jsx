const resultColor = {
  Excellent: "bg-[#e7f7f2] text-teal-dark",
  Good: "bg-[#e7f1e8] text-[#1f6b45]",
  Average: "bg-[#fff4e5] text-[#8a5a12]",
  Poor: "bg-[#fde8e4] text-[#9a3412]",
};

export default function ScoreCard({ evaluation }) {
  const color = resultColor[evaluation.result] || "bg-mist text-ink";

  return (
    <section className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(16,40,36,0.06)] sm:p-8">
      <p className="text-sm text-muted">
        {evaluation.candidate_name} · {evaluation.candidate_email}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink">{evaluation.job_role}</h1>
      <div className="mt-6 flex flex-wrap items-end gap-4">
        <p className="text-6xl font-bold leading-none text-ink">{evaluation.percentage}%</p>
        <div>
          <span className={`rounded-full px-3 py-1 text-sm font-semibold ${color}`}>{evaluation.result}</span>
          <p className="mt-2 text-sm text-muted">
            {evaluation.total_score} / {evaluation.max_score} marks
          </p>
        </div>
      </div>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-mist">
        <div className="h-full rounded-full bg-teal" style={{ width: `${Math.min(evaluation.percentage, 100)}%` }} />
      </div>
      <p className="mt-6 text-ink">{evaluation.recommendation}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-[#e7f7f2] p-4">
          <h2 className="text-sm font-semibold">Strengths</h2>
          <ItemList items={evaluation.strengths} empty="No strong topics yet." />
        </div>
        <div className="rounded-xl bg-[#fff4e5] p-4">
          <h2 className="text-sm font-semibold">Weaknesses</h2>
          <ItemList items={evaluation.weaknesses} empty="No missing topics." />
        </div>
      </div>
    </section>
  );
}

function ItemList({ items, empty }) {
  if (items.length === 0) {
    return <p className="mt-2 text-sm text-muted">{empty}</p>;
  }

  return (
    <ul className="mt-2 space-y-2 text-sm">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
