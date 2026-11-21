"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/brand/Logo";
import Button from "@/components/ui/Button";
import { ChevronIcon, CloseIcon, MenuIcon } from "@/components/ui/Icons";

const navItems = [
  { href: "/", label: "Home" },
  {
    href: "/features",
    label: "Features",
    children: [
      { href: "/features", label: "Key features" },
      { href: "/#why", label: "Why Intervexa" },
      { href: "/#fit", label: "Who it is for" },
    ],
  },
  {
    href: "/how-it-works",
    label: "Resources",
    children: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/dashboard", label: "Dashboard" },
      { href: "/evaluate", label: "Check a job" },
      { href: "/candidate", label: "Evaluate a candidate" },
    ],
  },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="border-b border-line bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.label} item={item} pathname={pathname} />
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="/dashboard" size="sm">
            Open app
          </Button>
        </div>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full text-ink md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="space-y-1 border-t border-line px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link href={item.href} className="block py-2 text-sm font-semibold text-ink">
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link key={child.href + child.label} href={child.href} className="block py-1.5 pl-3 text-sm text-muted">
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="pt-3">
            <Button href="/dashboard" size="sm">
              Open app
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function NavLink({ item, pathname }) {
  const active = pathname === item.href;
  const className = `inline-flex items-center gap-1 text-sm font-semibold ${
    active ? "text-teal" : "text-ink"
  }`;

  if (!item.children) {
    return (
      <Link href={item.href} className={className}>
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link href={item.href} className={className}>
        {item.label}
        <ChevronIcon className="h-4 w-4" />
      </Link>
      <div className="invisible absolute left-0 top-full z-20 w-56 pt-3 opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <div className="rounded-xl border border-line bg-white p-2 shadow-lg">
          {item.children.map((child) => (
            <Link
              key={child.href + child.label}
              href={child.href}
              className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-mist"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
