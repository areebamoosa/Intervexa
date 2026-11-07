import { ChevronIcon } from "@/components/ui/Icons";

export default function CheckList({ items, light = false }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-6">
          <span
            className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ${
              light ? "bg-white/15 text-white" : "bg-[#e7f7f2] text-teal"
            }`}
          >
            <ChevronIcon className="h-3.5 w-3.5" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
