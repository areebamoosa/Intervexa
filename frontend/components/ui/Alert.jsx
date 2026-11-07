const tones = {
  error: "bg-[#fde8e4] text-[#9a3412]",
  info: "bg-white text-ink shadow-sm",
};

export default function Alert({ children, tone = "info" }) {
  return <p className={`rounded-xl px-4 py-3 text-sm ${tones[tone]}`}>{children}</p>;
}
