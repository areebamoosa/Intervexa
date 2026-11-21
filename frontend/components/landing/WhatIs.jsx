import ProductPreview from "@/components/landing/ProductPreview";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { CardIcon } from "@/components/ui/Icons";

export default function WhatIs() {
  return (
    <Section id="what">
      <Container>
        <SectionTitle>What Does Intervexa Do?</SectionTitle>
        <p className="mx-auto mt-4 max-w-3xl text-center leading-7 text-muted">
          Intervexa has two tools. One reads a job posting and predicts its experience level. The other
          scores a candidate on the questions stored for a job role.
        </p>
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
          <ProductPreview />
          <article className="rounded-2xl bg-forest p-7 text-white shadow-sm sm:p-8">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10">
              <CardIcon className="h-7 w-7" />
            </span>
            <p className="mt-5 text-base font-semibold leading-7">Two separate models, two separate jobs.</p>
            <p className="mt-4 text-sm leading-6 text-white/80">
              Job level comes from real LinkedIn postings. Candidate scores come from 15 roles, 10
              questions each, plus a model trained on written answers.
            </p>
          </article>
        </div>
      </Container>
    </Section>
  );
}
