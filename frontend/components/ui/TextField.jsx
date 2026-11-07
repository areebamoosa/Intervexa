export default function TextField({ label, value, onChange, type = "text", placeholder, required }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-orange"> *</span> : null}
      </span>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm outline-none focus:border-teal"
      />
    </label>
  );
}
