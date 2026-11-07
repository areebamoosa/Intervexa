const labelColor = {
  Excellent: "bg-[#e7f7f2] text-teal-dark",
  Good: "bg-[#e7f1e8] text-[#1f6b45]",
  Average: "bg-[#fff4e5] text-[#8a5a12]",
  Poor: "bg-[#fde8e4] text-[#9a3412]",
};

export default function AnswerCard({ item }) {
  const color = labelColor[item.ml_label] || "bg-mist text-ink";

  return (
    <article className="rounded-2xl bg-white p-5 shadow-[0_8px_30px_rgba(16,40,36,0.06)]">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
        <p className="text-muted">{item.required_skill}</p>
        <p className="font-semibold text-ink">
          {item.score} / {item.max_score}
        </p>
      </div>
      <h2 className="mt-2 text-lg font-semibold text-ink">{item.question}</h2>
      <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-ink">{item.answer}</p>
      <p className="mt-4">
        <span className={`rounded-full px-2.5 py-1 text-sm font-semibold ${color}`}>Model: {item.ml_label}</span>
      </p>
      {item.missing_keywords.length > 0 && (
        <p className="mt-3 text-sm text-muted">Missing: {item.missing_keywords.join(", ")}</p>
      )}
    </article>
  );
}
