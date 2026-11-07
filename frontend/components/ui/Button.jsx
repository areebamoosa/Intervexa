import Link from "next/link";

const styles = {
  primary: "bg-orange text-white shadow-sm hover:bg-[#e09412] disabled:cursor-not-allowed disabled:opacity-60",
  secondary: "border border-[#1c2b28] bg-white text-ink hover:bg-[#f7faf9] disabled:cursor-not-allowed disabled:opacity-60",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-sm",
};

export default function Button({
  children,
  href,
  type = "button",
  disabled,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}) {
  const classes = `inline-flex items-center justify-center rounded-full font-semibold ${styles[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
