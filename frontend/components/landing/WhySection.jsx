import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FeatureCard from "@/components/ui/FeatureCard";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const whyItems = [
  {
    icon: "clock",
    title: "Faster, clearer decisions",
    text: "Reading every answer by hand takes time. Intervexa scores the full interview as soon as you submit it, so the next conversation can start sooner.",
  },
  {
    icon: "card",
    title: "Same scorecard every time",
    text: "Each of the 15 roles keeps its own questions and marks. A data analyst is never scored on a cloud engineer scorecard, and every candidate on the same role is judged the same way.",
  },
  {
    icon: "spark",
    title: "A recommendation you can use",
    text: "The report says Excellent, Good, Average, or Poor. You also see the strong topics, the gaps, and a short note on what to do next.",
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
          <Button href="/candidate">Start evaluation</Button>
          <Button href="/candidate" variant="secondary">
            Try for free
          </Button>
        </div>
      </Container>
    </Section>
  );
}
