"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/#how", label: "How it works" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-[#e6dfd4] bg-[#f4f1ea]/90 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Intervexa
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "font-medium" : "text-[#5e6872]"}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/candidate">Start evaluation</Button>
        </nav>
      </div>
    </header>
  );
}
