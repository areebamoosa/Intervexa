export default function TextArea({ value, onChange, placeholder, rows = 4 }) {
  return (
    <textarea
      value={value}
      rows={rows}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      className="mt-3 w-full rounded-lg border border-line px-3 py-2.5 text-sm outline-none focus:border-teal"
    />
  );
}
