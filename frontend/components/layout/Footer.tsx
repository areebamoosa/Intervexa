import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#e6dfd4]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-[#5e6872] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-[#1a2332]">Intervexa</p>
          <p>Scores, strengths, and knowledge gaps from one interview.</p>
        </div>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-[#1a2332]">
            Home
          </Link>
          <Link href="/candidate" className="hover:text-[#1a2332]">
            New evaluation
          </Link>
        </div>
      </div>
    </footer>
  );
}
