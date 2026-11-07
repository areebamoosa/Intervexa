const steps = ["Candidate", "Role", "Answers", "Report"];

export default function StepBar({ current }) {
  return (
    <ol className="mb-8 flex flex-wrap gap-2">
      {steps.map((label, index) => {
        let state = "bg-white text-muted";
        if (index === current) state = "bg-teal text-white";
        if (index < current) state = "bg-[#e7f7f2] text-teal-dark";

        return (
          <li key={label} className={`rounded-full px-3 py-1 text-sm font-semibold ${state}`}>
            {index + 1}. {label}
          </li>
        );
      })}
    </ol>
  );
}
