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
      { href: "/candidate", label: "Start evaluation" },
    ],
  },
  {
    title: "Roles",
    links: [
      { href: "/role", label: "Python Developer" },
      { href: "/role", label: "Frontend Developer" },
      { href: "/role", label: "Backend Developer" },
      { href: "/role", label: "Full Stack Developer" },
      { href: "/role", label: "Mobile App Developer" },
      { href: "/role", label: "Junior Software Engineer" },
      { href: "/role", label: "Senior Software Engineer" },
      { href: "/role", label: "Lead Software Engineer" },
      { href: "/role", label: "Data Analyst" },
      { href: "/role", label: "Machine Learning Engineer" },
      { href: "/role", label: "Android Developer" },
      { href: "/role", label: "UI/UX Designer" },
      { href: "/role", label: "Cloud Engineer" },
      { href: "/role", label: "Cybersecurity Engineer" },
      { href: "/role", label: "Data Engineer" },
    ],
  },
  {
    title: "Evaluate",
    links: [
      { href: "/candidate", label: "Candidate details" },
      { href: "/interview", label: "Interview answers" },
      { href: "/report", label: "Score report" },
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
            Score interview answers against one role scorecard. Strengths, gaps, and a recommendation in one report.
          </p>
          <div className="mt-5">
            <Button href="/candidate" size="sm">
              Start evaluation
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
