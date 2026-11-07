import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ProductPreview from "@/components/landing/ProductPreview";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[radial-gradient(ellipse_at_bottom_right,rgba(245,165,36,0.28),transparent_42%),radial-gradient(ellipse_at_top_left,rgba(180,230,220,0.7),transparent_46%),linear-gradient(180deg,#f7fbfa_0%,#eef6f4_100%)]">
      <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            <span className="block text-teal">AI-Powered</span>
            <span className="block text-teal">Interview Evaluations</span>
            <span className="mt-1 block text-ink">By Intervexa</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted">
            Let Intervexa score interview answers against the role scorecard. Pick from 15 roles, from
            software engineering to data, cloud, security, and design. Each one has its own questions,
            marks, strengths, gaps, and a recommendation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/candidate">Start evaluation</Button>
            <Button href="/how-it-works" variant="secondary">
              See how it works
            </Button>
          </div>
        </div>
        <div>
          <div className="mb-4 flex justify-end">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange px-4 py-2 text-sm font-semibold text-white shadow-sm">
              <span className="grid h-4 w-4 place-items-center rounded-full border border-white text-[10px]">✓</span>
              15 roles included
            </span>
          </div>
          <ProductPreview />
        </div>
      </Container>
    </section>
  );
}
