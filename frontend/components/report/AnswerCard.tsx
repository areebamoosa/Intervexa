import type { QuestionResult } from "@/lib/types";

const labelColor: Record<string, string> = {
  Excellent: "bg-[#e5f4ee] text-[#0e6b52]",
  Good: "bg-[#e7f1e8] text-[#1f6b45]",
  Average: "bg-[#f8efd8] text-[#8a5a12]",
  Poor: "bg-[#fde8e4] text-[#9a3412]",
};

export default function AnswerCard({ item }: { item: QuestionResult }) {
  const color = labelColor[item.ml_label] || "bg-[#efeae2] text-[#1a2332]";

  return (
    <article className="rounded-2xl border border-[#e6dfd4] bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
        <p className="text-[#5e6872]">{item.required_skill}</p>
        <p className="font-medium">
          {item.score} / {item.max_score}
        </p>
      </div>
      <h2 className="mt-2 text-lg font-medium">{item.question}</h2>
      <p className="mt-3 whitespace-pre-wrap text-sm leading-6">{item.answer}</p>
      <p className="mt-4">
        <span className={`rounded-full px-2.5 py-1 text-sm ${color}`}>
          Model: {item.ml_label}
        </span>
      </p>
      {item.missing_keywords.length > 0 && (
        <p className="mt-3 text-sm text-[#5e6872]">
          Missing: {item.missing_keywords.join(", ")}
        </p>
      )}
    </article>
  );
}
