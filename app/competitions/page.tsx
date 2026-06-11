import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABand from "@/components/home/CTABand";

const results2024 = [
  {
    medal: "🥇",
    division: "Division 2 — Womens",
    result: "1st Place",
    league: "Sydney Volleyball League",
    season: "2024",
  },
  {
    medal: "🥉",
    division: "Division 3 — Womens",
    result: "3rd Place",
    league: "Sydney Volleyball League",
    season: "2024",
  },
];

export default function CompetitionsPage() {
  return (
    <>
      <PageHero
        label="Competitions"
        title="SVL COMPETITION"
        subtitle="VolleyMates competes in the Sydney Volleyball League (SVL), affiliated through Volleyball NSW."
      />

      {/* Overview */}
      <section className="py-20 lg:py-28 bg-bg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                label="Competition Programme"
                title="SYDNEY VOLLEYBALL LEAGUE"
                subtitle="The club fields womens teams across multiple SVL divisions each season."
              />
              <div className="space-y-4 font-sans text-sm leading-relaxed text-muted">
                <p>
                  VolleyMates participates in the Sydney Volleyball League,
                  operating under the affiliation of Volleyball NSW. The club
                  enters womens teams across separate divisions, with the aim of
                  providing competitive opportunities for players at different
                  experience levels.
                </p>
                <p>
                  The SVL season runs across regular fixtures throughout the
                  year, culminating in finals. Results and upcoming fixture
                  information are shared through the club&apos;s Instagram
                  account.
                </p>
                <p>
                  Players interested in joining a competition team can reach out
                  via the contact page or follow the club on Instagram for
                  information on trials and registration periods.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1728971124746-607ba6d3fff0?auto=format&fit=crop&w=900&q=80"
                alt="Competitive volleyball match"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
            </div>
          </div>
        </Container>
      </section>

      {/* 2024 Results */}
      <section className="py-20 bg-ink">
        <Container>
          <SectionHeader label="Season Results" title="2024 SEASON" light />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {results2024.map((r, i) => (
              <div
                key={i}
                className="border border-white/10 p-8 hover:border-tan/40 transition-colors duration-200"
              >
                <p className="text-5xl mb-5">{r.medal}</p>
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-tan mb-2">
                  {r.season} · {r.league}
                </p>
                <h3 className="font-display text-3xl text-white leading-none mb-1">
                  {r.result.toUpperCase()}
                </h3>
                <p className="font-sans text-sm text-white/50">{r.division}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Upcoming */}
      <section className="py-20 bg-cream">
        <Container>
          <SectionHeader
            label="Upcoming"
            title="2025 SEASON"
            subtitle="Fixture details for the 2025 SVL season will be posted as they are confirmed. Follow the Instagram account for the latest updates."
          />
          <div className="bg-bg border-l-2 border-rust p-7 max-w-xl">
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-rust mb-2">
              Stay informed
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed mb-5">
              Season fixtures, team registration information, and competition
              results are communicated through the VolleyMates Instagram page.
            </p>
            <a
              href="https://www.instagram.com/volleymates_sydney/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-rust border-b border-rust pb-0.5 hover:text-maroon hover:border-maroon transition-colors duration-200"
            >
              Follow @volleymates_sydney
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
            </a>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
