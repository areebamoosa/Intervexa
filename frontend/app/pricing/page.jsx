import PageIntro from "@/components/layout/PageIntro";
import Button from "@/components/ui/Button";
import CheckList from "@/components/ui/CheckList";
import Container from "@/components/ui/Container";

const plans = [
  {
    name: "Practice",
    price: "Free",
    text: "Check one job posting at a time on your own machine.",
    points: ["Job title and description", "One predicted experience level", "The tuned model saved in the backend"],
    cta: "Try for free",
    href: "/evaluate",
    highlighted: false,
  },
  {
    name: "Hiring desk",
    price: "Free",
    text: "Score a candidate on one of the 15 stored roles.",
    points: ["Name, email, and a job role", "10 questions for that role", "A score, a model label, and a PDF"],
    cta: "Evaluate a candidate",
    href: "/candidate",
    highlighted: true,
  },
];

export const metadata = {
  title: "Pricing",
  description: "Intervexa runs locally. Check a job level or evaluate a candidate.",
};

export default function PricingPage() {
  return (
    <main>
      <PageIntro
        title="Pricing"
        text="Intervexa runs on your computer. Check a job level, or evaluate a candidate on a stored role. There is no paid plan."
      />
      <section className="pb-20">
        <Container className="grid gap-4 md:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-2xl p-8 ${plan.highlighted ? "bg-forest text-white" : "bg-white text-ink shadow-sm"}`}
            >
              <p className={`text-sm font-semibold ${plan.highlighted ? "text-white/70" : "text-teal"}`}>
                {plan.name}
              </p>
              <p className="mt-3 text-4xl font-bold">{plan.price}</p>
              <p className={`mt-3 text-sm leading-6 ${plan.highlighted ? "text-white/80" : "text-muted"}`}>
                {plan.text}
              </p>
              <div className="mt-6">
                <CheckList items={plan.points} light={plan.highlighted} />
              </div>
              <div className="mt-8">
                <Button href={plan.href} variant={plan.highlighted ? "primary" : "secondary"}>
                  {plan.cta}
                </Button>
              </div>
            </article>
          ))}
        </Container>
      </section>
    </main>
  );
}
