import CtaBanner from "@/components/landing/CtaBanner";
import PageIntro from "@/components/layout/PageIntro";
import Container from "@/components/ui/Container";
import FeatureCard from "@/components/ui/FeatureCard";

const features = [
  {
    icon: "list",
    title: "Title and description",
    text: "A job-level check needs only those two fields.",
  },
  {
    icon: "card",
    title: "Six experience levels",
    text: "The job model scored 76.36% accuracy on postings it was not trained on.",
  },
  {
    icon: "users",
    title: "15 roles, 10 questions",
    text: "Candidate evaluation uses the questions stored for the role you pick.",
  },
  {
    icon: "spark",
    title: "Answer score and PDF",
    text: "Keywords set the marks. The answer model adds Excellent, Good, Average, or Poor.",
  },
];

const whyItems = [
  {
    icon: "clock",
    title: "A level in seconds",
    text: "Paste a posting and get Internship through Executive.",
  },
  {
    icon: "card",
    title: "Trained on real job ads",
    text: "The job model learned from LinkedIn postings, not from the interview questions.",
  },
  {
    icon: "users",
    title: "A separate interview model",
    text: "Written answers are turned into word counts, then labeled. That model does not predict job level.",
  },
];

export const metadata = {
  title: "Features",
  description: "Check a job level, or score a candidate on 15 stored roles.",
};

export default function FeaturesPage() {
  return (
    <main>
      <PageIntro
        title="Features"
        text="Intervexa checks a job’s experience level, and it scores a candidate on a stored role."
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
          <h2 className="text-2xl font-bold text-ink">Why there are two models</h2>
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
