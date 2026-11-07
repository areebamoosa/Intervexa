export default function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-28 py-16 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}
