import Button from "@/components/ui/Button";

export default function StartCard() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(16,40,36,0.06)] sm:p-8">
      <h3 className="text-2xl font-bold text-teal">Start with either tool</h3>
      <p className="mt-4 text-sm leading-6 text-muted">
        Check a job level from a posting, or evaluate a candidate on a stored role.
      </p>
      <div className="mt-6 space-y-3">
        <Button href="/evaluate" className="w-full">
          Check a job
        </Button>
        <Button href="/candidate" variant="secondary" className="w-full">
          Evaluate a candidate
        </Button>
      </div>
    </div>
  );
}
