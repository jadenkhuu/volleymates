export default function SectionHeader({
  label,
  title,
  subtitle,
  light = false,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-12">
      {label && (
        <p
          className={`font-sans text-xs uppercase tracking-[0.2em] mb-3 ${
            light ? "text-tan" : "text-rust"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`font-display text-5xl lg:text-6xl leading-none whitespace-pre-line ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed max-w-xl ${
            light ? "text-white/70" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
