import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-[#d9f3ec] text-teal-dark">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="5" y="3.5" width="14" height="17" rx="2" />
          <path d="M8 8h8M8 12h5" strokeLinecap="round" />
          <path d="m14.5 15.2 1.4 1.4 2.6-2.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-[15px] font-bold tracking-[0.16em] text-[#3f9d8e]">INTERVEXA</span>
    </Link>
  );
}
