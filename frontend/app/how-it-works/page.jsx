import StartCard from "@/components/landing/StartCard";
import PageIntro from "@/components/layout/PageIntro";
import Container from "@/components/ui/Container";

const steps = [
  {
    title: "Add the candidate",
    text: "Enter a name and email. They show at the top of the finished report.",
  },
  {
    title: "Choose a role",
    text: "Each of the 15 roles loads its own questions, skills, and marks.",
  },
  {
    title: "Enter the answers",
    text: "Type what the candidate said. Each question is scored on its own skill.",
  },
  {
    title: "Read the report",
    text: "See the percentage, strengths, missing topics, a model label, and a recommendation.",
  },
];

export const metadata = {
  title: "How it works",
  description: "Add a candidate, pick a role, enter the answers, and read the scorecard report.",
};

export default function HowItWorksPage() {
  return (
    <main>
      <PageIntro
        title="How an evaluation works"
        text="Four steps. One scorecard. The same rules for every candidate on that role."
      />
      <section className="pb-16">
        <Container className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(16,40,36,0.06)]">
                <p className="text-sm font-bold text-teal">0{index + 1}</p>
                <h2 className="mt-2 text-lg font-semibold text-ink">{step.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </article>
            ))}
          </div>
          <StartCard />
        </Container>
      </section>
    </main>
  );
}
