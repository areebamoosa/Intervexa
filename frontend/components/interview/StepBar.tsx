const steps = ["Candidate", "Role", "Answers", "Report"];

export default function StepBar({ current }: { current: number }) {
  return (
    <ol className="mb-8 flex flex-wrap gap-x-4 gap-y-2 text-sm">
      {steps.map((label, index) => (
        <li
          key={label}
          className={index === current ? "font-semibold text-[#0e6b52]" : "text-[#8b8176]"}
        >
          {index + 1}. {label}
        </li>
      ))}
    </ol>
  );
}
