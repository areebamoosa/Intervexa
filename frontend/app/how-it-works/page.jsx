import StartCard from "@/components/landing/StartCard";
import PageIntro from "@/components/layout/PageIntro";
import Container from "@/components/ui/Container";

const steps = [
  {
    title: "Paste the job title",
    text: "For a job-level check, use the title from the posting, such as Senior Software Engineer.",
  },
  {
    title: "Paste the description",
    text: "The job model reads the title and description together and returns one experience level.",
  },
  {
    title: "Pick a stored role",
    text: "For a candidate, enter their name and email, then choose one of the 15 roles.",
  },
  {
    title: "Score the 10 answers",
    text: "That role’s questions are scored with keywords and the answer model, then saved as a PDF.",
  },
];

export const metadata = {
  title: "How it works",
  description: "Check a job level, or score a candidate on one of 15 roles.",
};

export default function HowItWorksPage() {
  return (
    <main>
      <PageIntro
        title="How Intervexa works"
        text="One path checks a job level. The other path evaluates a candidate on a stored role."
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
