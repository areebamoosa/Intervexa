export default function ProductPreview() {
  return (
    <div className="relative">
      <div className="absolute -right-2 top-8 -z-10 h-24 w-20 rounded-[2rem] bg-teal" />
      <div className="absolute -bottom-3 right-12 -z-10 h-16 w-16 rounded-3xl bg-orange" />

      <div className="rounded-2xl border border-white bg-white p-3 shadow-[0_18px_50px_rgba(16,40,36,0.12)]">
        <div className="mb-3 flex items-center gap-1.5 px-1">
          <span className="h-2.5 w-2.5 rounded-full bg-[#f0b4a8]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f3d48a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#b7e0c2]" />
          <span className="ml-2 text-xs text-muted">Evaluation report</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-xl bg-mist p-4">
            <p className="text-xs font-medium text-muted">Data Analyst</p>
            <p className="mt-2 text-4xl font-bold text-ink">82%</p>
            <p className="mt-1 text-sm font-semibold text-teal">Excellent</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white">
              <div className="h-full w-[82%] rounded-full bg-teal" />
            </div>
            <div className="mt-4 space-y-2 text-xs text-muted">
              <p className="rounded-lg bg-white px-3 py-2">SQL · 10 / 10</p>
              <p className="rounded-lg bg-white px-3 py-2">Metrics · 8 / 10</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-xl bg-forest p-4 text-white">
              <p className="text-xs text-white/70">Recommendation</p>
              <p className="mt-2 text-sm font-semibold leading-5">Strong candidate. Recommended for the next round.</p>
            </div>
            <div className="rounded-xl border border-line bg-white p-4">
              <p className="text-xs text-muted">Model label</p>
              <p className="mt-1 text-sm font-semibold text-ink">Good</p>
              <p className="mt-1 text-xs leading-5 text-muted">Covers the main skill for this question.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
