import Container from "@/components/ui/Container";
import FeatureCard from "@/components/ui/FeatureCard";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const features = [
  {
    icon: "list",
    title: "Job title and description",
    text: "Those two fields are the only input for a job-level check.",
  },
  {
    icon: "card",
    title: "Six experience levels",
    text: "The job model scored 76.36% on postings it was not trained on.",
  },
  {
    icon: "users",
    title: "15 roles, 10 questions",
    text: "Each stored role opens the same 10 questions every time you evaluate that role.",
  },
  {
    icon: "spark",
    title: "Score and PDF",
    text: "Each answer gets a keyword score and a model label. The report can be downloaded.",
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
