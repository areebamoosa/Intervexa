import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FeatureCard from "@/components/ui/FeatureCard";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const whyItems = [
  {
    icon: "clock",
    title: "A job level in seconds",
    text: "Paste a title and description. The job model returns Internship, Entry level, Associate, Mid-Senior level, Director, or Executive.",
  },
  {
    icon: "users",
    title: "A full interview score",
    text: "Pick one of 15 roles. The candidate answers that role’s 10 questions, then you get strengths, weaknesses, and a PDF.",
  },
  {
    icon: "card",
    title: "Each tool has its own model",
    text: "Job text is scored by the LinkedIn model. Answers are scored by keyword match and the answer model. One model does not do the other’s job.",
  },
];

export default function WhySection() {
  return (
    <Section id="why">
      <Container>
        <SectionTitle>Why Use Intervexa For Interview Evaluations?</SectionTitle>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {whyItems.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/evaluate">Check a job</Button>
          <Button href="/candidate" variant="secondary">
            Evaluate a candidate
          </Button>
        </div>
      </Container>
    </Section>
  );
}
