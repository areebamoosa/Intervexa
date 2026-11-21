import Container from "@/components/ui/Container";
import CheckList from "@/components/ui/CheckList";
import Section from "@/components/ui/Section";

const fitItems = [
  "Students showing two text models in one project",
  "Recruiters checking how senior a posting is",
  "Teachers walking through a scored interview",
  "Anyone comparing a job ad with a candidate’s answers",
];

export default function PerfectFor() {
  return (
    <Section id="fit">
      <Container className="grid items-stretch gap-4 lg:grid-cols-2">
        <article className="rounded-2xl bg-forest p-7 text-white sm:p-8">
          <h2 className="text-2xl font-bold">Perfect For...</h2>
          <div className="mt-6">
            <CheckList items={fitItems} light />
          </div>
        </article>
        <article className="rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgba(16,40,36,0.06)] sm:p-8">
          <p className="text-sm font-semibold text-teal">Both results</p>
          <div className="mt-6 rounded-xl bg-[#e7f7f2] p-4">
            <p className="text-sm font-semibold text-ink">Senior Software Engineer</p>
            <p className="mt-1 text-sm text-muted">Predicted level: Mid-Senior level</p>
          </div>
          <div className="mt-3 rounded-xl bg-[#fff4e5] p-4">
            <p className="text-sm font-semibold text-ink">Python Developer interview</p>
            <p className="mt-1 text-sm text-muted">10 questions scored, then a PDF report</p>
          </div>
        </article>
      </Container>
    </Section>
  );
}
