import CtaBanner from "@/components/landing/CtaBanner";
import PageIntro from "@/components/layout/PageIntro";
import Container from "@/components/ui/Container";
import FeatureCard from "@/components/ui/FeatureCard";

const features = [
  {
    icon: "list",
    title: "Role-based questions",
    text: "Pick a job and Intervexa loads the questions, skills, and marks prepared for that role.",
  },
  {
    icon: "card",
    title: "Keyword scoring",
    text: "Each answer is checked against the skills for that question, then turned into marks out of the question total.",
  },
  {
    icon: "spark",
    title: "A second read from the model",
    text: "A trained model adds a label — Excellent, Good, Average, or Poor — next to the keyword score.",
  },
  {
    icon: "users",
    title: "One report for the team",
    text: "Strengths, missing topics, and a hiring note sit in one place, so reviewers start from the same page.",
  },
];

const whyItems = [
  {
    icon: "clock",
    title: "Faster, clearer decisions",
    text: "Reading every answer by hand takes time. Intervexa scores the full interview as soon as you submit it, so the next conversation can start sooner.",
  },
  {
    icon: "card",
    title: "Same scorecard every time",
    text: "Each of the 15 roles keeps its own questions and marks. Candidates are only compared with other people on the same role.",
  },
  {
    icon: "spark",
    title: "A recommendation you can use",
    text: "The report says Excellent, Good, Average, or Poor. You also see the strong topics, the gaps, and a short note on what to do next.",
  },
];

export const metadata = {
  title: "Features",
  description: "Role questions, keyword scoring, a model label, and one shared interview report.",
};

export default function FeaturesPage() {
  return (
    <main>
      <PageIntro
        title="Features"
        text="Intervexa keeps the interview on one scorecard. The questions, the marks, and the recommendation all come from the role you pick."
      />
      <section className="pb-8">
        <Container className="grid gap-4 sm:grid-cols-2">
          {features.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
          ))}
        </Container>
      </section>
      <section className="pb-16">
        <Container>
          <h2 className="text-2xl font-bold text-ink">Why teams use it</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {whyItems.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner />
    </main>
  );
}
