import Link from "next/link";
import Logo from "@/components/brand/Logo";
import Button from "@/components/ui/Button";

const footerColumns = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/pricing", label: "Pricing" },
      { href: "/evaluate", label: "Check a job" },
      { href: "/candidate", label: "Evaluate a candidate" },
    ],
  },
  {
    title: "Job level",
    links: [
      { href: "/evaluate", label: "Title and description" },
      { href: "/evaluate", label: "Six experience levels" },
    ],
  },
  {
    title: "Interview",
    links: [
      { href: "/candidate", label: "Candidate details" },
      { href: "/role", label: "15 job roles" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/#why", label: "Why Intervexa" },
      { href: "/#fit", label: "Who it is for" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.1fr_2fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            Check a job’s experience level, or score a candidate on 15 stored roles.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Button href="/evaluate" size="sm">
              Check a job
            </Button>
            <Button href="/candidate" size="sm" variant="secondary">
              Evaluate
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-bold text-ink">{column.title}</p>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={column.title + link.label}>
                    <Link href={link.href} className="text-sm text-muted hover:text-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
