import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const sessions = [
  {
    href: "/socials",
    label: "Open Socials",
    heading: "OPEN\nSOCIALS",
    body: "Drop-in volleyball sessions open to all skill levels. No prior experience required — just bring yourself and an interest in the game.",
    detail: "All skill levels welcome",
    img: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80",
    imgAlt: "Volleyball players at an open social session",
  },
  {
    href: "/competitions",
    label: "Competitions",
    heading: "COMPE-\nTITIONS",
    body: "Structured league play through the Sydney Volleyball League. Our teams compete across multiple divisions with a strong record of results.",
    detail: "SVL affiliated",
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80",
    imgAlt: "Competitive volleyball match",
  },
];

export default function SessionsSection() {
  return (
    <section className="py-20 lg:py-28 grainy-gradient">
      <Container>
        <SectionHeader
          label="What We Offer"
          title="TWO WAYS TO PLAY"
          subtitle="Whether you are looking for a casual weekly hit or structured competition, VolleyMates has a place for you."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sessions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group relative overflow-hidden bg-cream block"
              style={{ minHeight: "420px" }}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={s.img}
                  alt={s.imgAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col justify-end h-full" style={{ minHeight: "420px" }}>
                <span className="font-sans text-xs uppercase tracking-[0.18em] text-tan mb-3 block">
                  {s.label}
                </span>
                <h3 className="font-display text-5xl text-white leading-none whitespace-pre-line mb-4">
                  {s.heading}
                </h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed mb-5 max-w-xs">
                  {s.body}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs text-tan/80">
                    {s.detail}
                  </span>
                  <span className="font-sans text-xs text-white/50 group-hover:text-white transition-colors duration-200 flex items-center gap-1">
                    Learn more
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
