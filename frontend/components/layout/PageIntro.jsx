import Container from "@/components/ui/Container";

export default function PageIntro({ title, text }) {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f3f6f5_100%)]">
      <Container className="py-16 text-center sm:py-20">
        <h1 className="text-4xl font-bold tracking-tight text-teal sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted">{text}</p>
      </Container>
    </section>
  );
}
