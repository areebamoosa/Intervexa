export default function PageMain({ children }: { children: React.ReactNode }) {
  return <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">{children}</main>;
}
