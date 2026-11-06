type TextFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

export default function TextField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: TextFieldProps) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-[#e3dbd0] bg-white px-3 py-2.5 outline-none focus:border-[#0e6b52]"
      />
    </label>
  );
}
