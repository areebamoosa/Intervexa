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
          <span className="ml-2 text-xs text-muted">Intervexa</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-mist p-4">
            <p className="text-xs font-medium text-muted">Check a job level</p>
            <p className="mt-2 text-lg font-bold text-ink">Senior Software Engineer</p>
            <p className="mt-2 text-sm leading-6 text-muted">Lead backend services and mentor engineers.</p>
            <p className="mt-3 text-sm font-semibold text-teal">Mid-Senior level</p>
          </div>
          <div className="rounded-xl bg-forest p-4 text-white">
            <p className="text-xs text-white/70">Evaluate a candidate</p>
            <p className="mt-2 text-lg font-bold">Python Developer</p>
            <p className="mt-2 text-sm leading-6 text-white/80">10 stored questions, then a score and a report.</p>
            <p className="mt-3 text-sm font-semibold">Score, label, and PDF</p>
          </div>
        </div>
      </div>
    </div>
  );
}
