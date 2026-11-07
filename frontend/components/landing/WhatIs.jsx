import ProductPreview from "@/components/landing/ProductPreview";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { CardIcon } from "@/components/ui/Icons";

export default function WhatIs() {
  return (
    <Section id="what">
      <Container>
        <SectionTitle>What Is An AI-Powered Interview Evaluation?</SectionTitle>
        <p className="mx-auto mt-4 max-w-3xl text-center leading-7 text-muted">
          An AI-powered interview evaluation is a structured way to score candidate answers with one
          scorecard, so every person is judged on the same skills.
        </p>
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
          <ProductPreview />
          <article className="rounded-2xl bg-forest p-7 text-white shadow-sm sm:p-8">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10">
              <CardIcon className="h-7 w-7" />
            </span>
            <p className="mt-5 text-base font-semibold leading-7">
              Intervexa scores each answer against the skills on that question, then adds a model label.
            </p>
            <p className="mt-4 text-sm leading-6 text-white/80">
              Instead of relying on memory, your team gets a percentage, the strong topics, and the missing
              ones. The recommendation tells you whether to move forward.
            </p>
          </article>
        </div>
      </Container>
    </Section>
  );
}
