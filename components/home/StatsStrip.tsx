import Container from "@/components/ui/Container";

const stats = [
  { value: "🥇", label: "SVL Division 2 Womens", sub: "2024 Champions" },
  { value: "🥉", label: "SVL Division 3 Womens", sub: "2024 Podium" },
  { value: "📍", label: "Locations", sub: "Blacktown & Riverwood" },
];

export default function StatsStrip() {
  return (
    <section className="bg-ink">
      <Container>
        <div className="grid grid-cols-3 divide-x divide-white/8">
          {stats.map((s, i) => (
            <div key={i} className="px-6 py-7 text-center">
              <p className="font-display text-3xl text-white leading-none">
                {s.value}
              </p>
              <p className="font-sans text-xs text-tan mt-1.5 tracking-wide">
                {s.label}
              </p>
              <p className="font-sans text-xs text-white/35 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
