import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABand from "@/components/home/CTABand";

const howItWorks = [
  {
    step: "01",
    title: "No registration required",
    body: "Open socials operate on a drop-in basis. There is no season registration or commitment needed to participate.",
  },
  {
    step: "02",
    title: "All experience levels",
    body: "Sessions are designed to be welcoming to players at all stages — beginners, returning players, and those with competitive backgrounds.",
  },
  {
    step: "03",
    title: "Mixed play format",
    body: "Games are played in a mixed format, rotating teams throughout the session to keep play varied and social.",
  },
  {
    step: "04",
    title: "Follow us for schedules",
    body: "Session dates and times are posted through our Instagram. Following the account is the best way to stay informed.",
  },
];

const venues = [
  {
    name: "Blacktown",
    suburb: "Western Sydney",
    detail: "Indoor court facility",
  },
  {
    name: "Riverwood",
    suburb: "Southern Sydney",
    detail: "Indoor court facility",
  },
];

export default function SocialsPage() {
  return (
    <>
      <PageHero
        label="Open Socials"
        title="DROP IN, START PLAYING"
        subtitle="Casual volleyball sessions held regularly across our two Sydney venues. No experience needed."
      />

      {/* What are open socials */}
      <section className="py-20 lg:py-28 bg-bg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="About Open Socials"
                title="CASUAL VOLLEYBALL, OPEN TO ALL"
                subtitle="Open social sessions provide a regular, informal environment for volleyball across Blacktown and Riverwood."
              />
              <div className="space-y-4 font-sans text-sm leading-relaxed text-muted">
                <p>
                  Sessions are run on a rotating team format, meaning participants
                  are grouped into teams that rotate throughout the evening. This
                  structure ensures players meet others in the session and that the
                  intensity of play remains balanced and enjoyable.
                </p>
                <p>
                  There is no requirement to attend every session. Players can
                  come as frequently or infrequently as suits them. Session
                  availability and any scheduling changes are communicated through
                  the VolleyMates Instagram account.
                </p>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1578874691223-64558a3ca096?auto=format&fit=crop&w=900&q=80"
                alt="Players enjoying a social volleyball session"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-20 bg-cream">
        <Container>
          <SectionHeader label="How It Works" title="WHAT TO EXPECT" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {howItWorks.map((item) => (
              <div key={item.step} className="bg-bg p-7">
                <p className="font-display text-4xl text-tan leading-none mb-4">
                  {item.step}
                </p>
                <h3 className="font-display text-xl text-ink leading-none mb-2">
                  {item.title.toUpperCase()}
                </h3>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Venues */}
      <section className="py-20 bg-ink">
        <Container>
          <SectionHeader label="Locations" title="WHERE WE PLAY" light />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {venues.map((v, i) => (
              <div
                key={i}
                className="border border-white/10 p-7 hover:border-tan/40 transition-colors duration-200"
              >
                <p className="font-display text-4xl text-white leading-none mb-1">
                  {v.name.toUpperCase()}
                </p>
                <p className="font-sans text-xs text-tan uppercase tracking-widest mb-3">
                  {v.suburb}
                </p>
                <p className="font-sans text-sm text-white/50">{v.detail}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-xs text-white/35 mt-6">
            Specific venue addresses are shared via Instagram prior to sessions.
          </p>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
