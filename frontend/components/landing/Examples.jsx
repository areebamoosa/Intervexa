import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { PersonIcon } from "@/components/ui/Icons";

const examples = [
  {
    tone: "teal",
    title: "One candidate might sound confident, but Intervexa flags vague answers and missed skills.",
  },
  {
    tone: "orange",
    title: "Another might be less polished, but the scorecard shows clear coverage of the required topics.",
  },
];

const tones = {
  teal: "bg-teal text-white",
  orange: "bg-orange text-white",
};

export default function Examples() {
  return (
    <Section id="example">
      <Container>
        <SectionTitle>For Example...</SectionTitle>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {examples.map((item) => (
            <article key={item.title} className="flex items-center gap-4 rounded-2xl bg-forest p-6 text-white">
              <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${tones[item.tone]}`}>
                <PersonIcon className="h-7 w-7" />
              </span>
              <p className="text-base font-semibold leading-7">{item.title}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 rounded-2xl bg-white px-6 py-5 text-center text-sm leading-6 text-muted shadow-sm">
          With one shared scorecard, you make{" "}
          <span className="font-semibold text-ink">faster, fairer, and more informed hiring decisions</span>{" "}
          — without guessing.
        </p>
      </Container>
    </Section>
  );
}
