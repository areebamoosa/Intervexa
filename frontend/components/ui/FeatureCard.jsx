import { IconByName } from "@/components/ui/Icons";

export default function FeatureCard({ icon, title, text }) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(16,40,36,0.06)]">
      <IconByName name={icon} className="h-8 w-8 text-ink" />
      <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
    </article>
  );
}
