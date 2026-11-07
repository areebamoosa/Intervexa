import Container from "@/components/ui/Container";
import CheckList from "@/components/ui/CheckList";
import Section from "@/components/ui/Section";

const fitItems = [
  "Hiring teams reviewing a lot of interviews",
  "Teachers running practice interview sessions",
  "Managers who want the same criteria every time",
  "Teams hiring across engineering, data, cloud, security, and design",
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
          <p className="text-sm font-semibold text-teal">Report snapshot</p>
          <h3 className="mt-2 text-2xl font-bold text-ink">Cloud Engineer · 74%</h3>
          <p className="mt-2 text-sm text-muted">Good · 37 / 50 marks</p>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-mist">
            <div className="h-full w-[74%] rounded-full bg-teal" />
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-[#e7f7f2] p-4">
              <p className="text-sm font-semibold text-ink">Strengths</p>
              <p className="mt-1 text-sm text-muted">Regions, IAM, networking</p>
            </div>
            <div className="rounded-xl bg-[#fff4e5] p-4">
              <p className="text-sm font-semibold text-ink">Gap</p>
              <p className="mt-1 text-sm text-muted">Failover across zones is still thin.</p>
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
}
