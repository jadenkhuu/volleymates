import Container from "./Container";

export default function PageHero({
  label,
  title,
  subtitle,
}: {
  label?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="grainy-gradient py-20 lg:py-28 relative overflow-hidden">
      <Container className="relative z-10">
        {label && (
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-tan mb-4">
            {label}
          </p>
        )}
        <h1 className="font-display text-6xl lg:text-8xl text-white leading-none whitespace-pre-line">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-white/75 font-sans text-base leading-relaxed max-w-lg">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
