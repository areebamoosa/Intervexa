export default function PageMain({ children, wide = false }) {
  return (
    <main className={`mx-auto w-full flex-1 px-6 py-10 ${wide ? "max-w-4xl" : "max-w-3xl"}`}>{children}</main>
  );
}
