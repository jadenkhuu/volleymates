import Link from "next/link";
import Container from "@/components/ui/Container";

export default function AboutStrip() {
  return (
    <section className="py-20 lg:py-24 bg-cream relative overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none pr-4 hidden lg:block">
        <p
          className="font-display text-[160px] leading-none text-tan/10"
          aria-hidden
        >
          VM
        </p>
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-rust mb-5">
            About the Club
          </p>
          <h2 className="font-display text-5xl lg:text-6xl text-ink leading-none mb-6">
            COMMUNITY VOLLEYBALL IN SYDNEY
          </h2>
          <p className="font-sans text-base leading-relaxed text-muted mb-4">
            VolleyMates is a Sydney-based volleyball club offering open social
            sessions and competitive league play. Based across Blacktown and
            Riverwood, the club is affiliated with Volleyball NSW and competes
            in the Sydney Volleyball League.
          </p>
          <p className="font-sans text-base leading-relaxed text-muted mb-8">
            In 2024, our womens teams placed first in SVL Division 2 and third
            in SVL Division 3, reflecting the club&apos;s commitment to
            competitive development alongside accessible, inclusive play.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-sans text-sm text-rust border-b border-rust pb-0.5 hover:text-maroon hover:border-maroon transition-colors duration-200"
          >
            More about us
            <svg
              className="w-3.5 h-3.5"
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
          </Link>
        </div>
      </Container>
    </section>
  );
}
