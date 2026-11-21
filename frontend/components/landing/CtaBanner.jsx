import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CtaBanner() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_bottom,rgba(245,165,36,0.35),transparent_55%),radial-gradient(ellipse_at_top,rgba(190,232,222,0.75),transparent_52%),linear-gradient(180deg,#f7fbfa,#ffffff)]">
      <Container className="py-20 text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Ready To <span className="text-teal">Use Intervexa?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted">
          Check a job level from a posting, or start a candidate evaluation on a stored role.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/evaluate">Check a job</Button>
          <Button href="/candidate" variant="secondary">
            Evaluate a candidate
          </Button>
        </div>
      </Container>
    </section>
  );
}
