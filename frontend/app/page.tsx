import Link from "next/link";
import Button from "@/components/ui/Button";

const steps = [
  {
    title: "Add the candidate",
    text: "Enter the name and email before the interview starts.",
  },
  {
    title: "Choose a role",
    text: "Python Developer and Frontend Developer each have their own questions.",
  },
  {
    title: "Enter the answers",
    text: "Type what the candidate said. The score uses the keywords for that question.",
  },
  {
    title: "Read the report",
    text: "See the total, strengths, missing topics, a model label, and a recommendation.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <p className="text-sm font-medium text-[#0e6b52]">Interview evaluation</p>
          <h1 className="mt-3 max-w-xl font-serif text-5xl leading-tight tracking-tight">
            Score every interview the same way.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-8 text-[#5e6872]">
            Pick a job role, enter the candidate&apos;s answers, and Intervexa compares
            them with the prepared questions. You get a score, the strong topics, and
            the gaps.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/candidate">Start an evaluation</Button>
            <Button href="/#how" variant="secondary">
              See the steps
            </Button>
          </div>
        </div>

        <aside className="rounded-3xl border border-[#e6dfd4] bg-white p-6 shadow-sm">
          <p className="text-sm text-[#5e6872]">Example report</p>
          <h2 className="mt-2 font-serif text-3xl">Python Developer</h2>
          <p className="mt-4 font-serif text-5xl">50%</p>
          <p className="mt-2 text-sm text-[#8a5a12]">Average · 10 / 20 marks</p>
          <div className="mt-6 grid gap-3 text-sm">
            <div className="rounded-2xl bg-[#f4f8f5] p-4">
              <p className="font-medium">Strength</p>
              <p className="mt-1 text-[#5e6872]">Python Basics</p>
            </div>
            <div className="rounded-2xl bg-[#fbf6f2] p-4">
              <p className="font-medium">Gap</p>
              <p className="mt-1 text-[#5e6872]">Data Structures is missing the key ideas.</p>
            </div>
          </div>
        </aside>
      </section>

      <section id="how" className="border-t border-[#e6dfd4] bg-[#fffcf8]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-serif text-3xl">How an evaluation works</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-[#e6dfd4] bg-white p-5">
                <p className="text-sm font-medium text-[#0e6b52]">0{index + 1}</p>
                <h3 className="mt-2 text-lg font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5e6872]">{step.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-[#5e6872]">
            Ready to try it?{" "}
            <Link href="/candidate" className="font-medium text-[#0e6b52]">
              Start with the candidate details.
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
