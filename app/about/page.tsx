import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABand from "@/components/home/CTABand";

const values = [
  {
    icon: "🏐",
    title: "Accessible Play",
    body: "Sessions are structured to welcome participants of all experience levels, from first-timers to experienced players.",
  },
  {
    icon: "📍",
    title: "Two Locations",
    body: "Operating out of Blacktown and Riverwood, providing accessible options for players across western and southern Sydney.",
  },
  {
    icon: "🏆",
    title: "Competitive Results",
    body: "Our womens teams claimed first place in SVL Division 2 and third place in SVL Division 3 in the 2024 season.",
  },
  {
    icon: "🤝",
    title: "VBNSW Affiliated",
    body: "Affiliated with Volleyball NSW, ensuring our competitions and programmes meet recognised state standards.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About VolleyMates"
        title="WHO WE ARE"
        subtitle="A Sydney volleyball club offering open social sessions and structured competition across Blacktown and Riverwood."
      />

      {/* Main content */}
      <section className="py-20 lg:py-28 bg-bg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <div>
              <SectionHeader
                label="The Club"
                title="VOLLEYBALL FOR EVERYONE"
                subtitle="Founded to make volleyball more accessible in western and southern Sydney, VolleyMates operates two regular programmes — open social sessions and Sydney Volleyball League competition."
              />
              <div className="space-y-4 font-sans text-sm leading-relaxed text-muted">
                <p>
                  VolleyMates is affiliated with Volleyball NSW (VBNSW) and
                  competes within the Sydney Volleyball League structure. The
                  club maintains teams across multiple divisions, with a focus on
                  developing player ability alongside a welcoming environment for
                  newcomers.
                </p>
                <p>
                  Open social sessions are held regularly at both the Blacktown
                  and Riverwood venues. These sessions are open to all
                  participants regardless of experience level and provide an
                  informal setting to develop skills and meet other players in
                  the local volleyball community.
                </p>
                <p>
                  The competitive programme entered the 2024 SVL season with
                  womens teams across Division 2 and Division 3. The Division 2
                  side finished the season as champions, while the Division 3
                  team earned a podium placement.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1593786082497-5e1bd30a9e73?auto=format&fit=crop&w=900&q=80"
                alt="Volleyball team in action"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Gradient separator */}
      <div className="grainy-gradient h-2" />

      {/* Values grid */}
      <section className="py-20 bg-cream">
        <Container>
          <SectionHeader
            label="Club Overview"
            title="WHAT DEFINES US"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-bg p-6 border-t-2 border-rust">
                <p className="text-3xl mb-4">{v.icon}</p>
                <h3 className="font-display text-2xl text-ink leading-none mb-2">
                  {v.title.toUpperCase()}
                </h3>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-ink">
        <Container>
          <SectionHeader
            label="Results"
            title="2024 SEASON HIGHLIGHTS"
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {[
              {
                medal: "🥇",
                title: "SVL Division 2 — Womens",
                result: "Champions",
                year: "2024",
              },
              {
                medal: "🥉",
                title: "SVL Division 3 — Womens",
                result: "3rd Place",
                year: "2024",
              },
            ].map((a, i) => (
              <div
                key={i}
                className="border border-white/10 p-7 hover:border-tan/40 transition-colors duration-200"
              >
                <p className="text-4xl mb-4">{a.medal}</p>
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-tan mb-1">
                  {a.year}
                </p>
                <h3 className="font-display text-2xl text-white leading-none mb-1">
                  {a.result.toUpperCase()}
                </h3>
                <p className="font-sans text-sm text-white/50">{a.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
