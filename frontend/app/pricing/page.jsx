import PageIntro from "@/components/layout/PageIntro";
import Button from "@/components/ui/Button";
import CheckList from "@/components/ui/CheckList";
import Container from "@/components/ui/Container";

const plans = [
  {
    name: "Practice",
    price: "Free",
    text: "Score one interview at a time on your own machine.",
    points: ["All 15 job roles", "Keyword score and model label", "Strengths, gaps, and a recommendation"],
    cta: "Try for free",
    href: "/candidate",
    highlighted: false,
  },
  {
    name: "Hiring desk",
    price: "Free",
    text: "Keep the same evaluator ready for the next candidate.",
    points: ["Unlimited local evaluations", "The same questions for every candidate", "A report you can review with the team"],
    cta: "Start evaluation",
    href: "/candidate",
    highlighted: true,
  },
];

export const metadata = {
  title: "Pricing",
  description: "Intervexa runs locally. Start an evaluation whenever you need one.",
};

export default function PricingPage() {
  return (
    <main>
      <PageIntro
        title="Pricing"
        text="Intervexa runs on your computer with your backend. There is no paid plan. Start an evaluation whenever the next candidate is ready."
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
