import StartCard from "@/components/landing/StartCard";
import Container from "@/components/ui/Container";
import { IconByName } from "@/components/ui/Icons";
import Section from "@/components/ui/Section";

const howCards = [
  {
    icon: "spark",
    title: "Answers scored against the role",
    text: "After you pick a job, Intervexa loads that role’s questions. Each answer is checked for the skill on the scorecard, whether that is SQL, cloud networking, mobile screens, or system design.",
  },
  {
    icon: "card",
    title: "Tailored to the question marks",
    text: "Every question has its own total. The report adds those marks into a percentage, lists strengths and gaps, and keeps the model label beside each answer.",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how">
      <Container className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="flex items-center gap-4">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-forest text-sm font-bold text-white">
              AI
            </span>
            <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
              How Intervexa
              <span className="block">Evaluations Work</span>
            </h2>
          </div>
          <div className="mt-6 space-y-4">
            {howCards.map((card) => (
              <article key={card.title} className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(16,40,36,0.06)]">
                <IconByName name={card.icon} className="h-7 w-7 text-ink" />
                <h3 className="mt-3 text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
        <StartCard />
      </Container>
    </Section>
  );
}
