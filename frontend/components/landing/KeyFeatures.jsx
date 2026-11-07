import Container from "@/components/ui/Container";
import FeatureCard from "@/components/ui/FeatureCard";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

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

export default function KeyFeatures() {
  return (
    <Section id="features">
      <Container>
        <SectionTitle>Key Features</SectionTitle>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
