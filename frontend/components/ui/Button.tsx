import Link from "next/link";

const styles = {
  primary:
    "inline-flex items-center justify-center rounded-full bg-[#0e6b52] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#0b5642] disabled:cursor-not-allowed disabled:opacity-60",
  secondary:
    "inline-flex items-center justify-center rounded-full border border-[#d9d0c3] bg-white px-5 py-2.5 text-sm font-medium text-[#1a2332] hover:bg-[#f7f3ec]",
};

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href,
  type = "button",
  disabled,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const className = styles[variant];

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
