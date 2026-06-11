import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABand from "@/components/home/CTABand";

const events = [
  {
    type: "Open Social",
    typeColor: "bg-olive/20 text-olive border border-olive/40",
    title: "Open Social — Blacktown",
    date: "Saturday, 21 June 2025",
    time: "6:00 PM – 9:00 PM",
    location: "Blacktown venue",
    notes: "Drop-in, no booking required.",
  },
  {
    type: "Open Social",
    typeColor: "bg-olive/20 text-olive border border-olive/40",
    title: "Open Social — Riverwood",
    date: "Sunday, 22 June 2025",
    time: "5:00 PM – 8:00 PM",
    location: "Riverwood venue",
    notes: "Drop-in, no booking required.",
  },
  {
    type: "Competition",
    typeColor: "bg-rust/10 text-rust border border-rust/30",
    title: "SVL Round Fixture",
    date: "Saturday, 28 June 2025",
    time: "TBC",
    location: "TBC",
    notes: "Follow Instagram for venue and time confirmation.",
  },
  {
    type: "Open Social",
    typeColor: "bg-olive/20 text-olive border border-olive/40",
    title: "Open Social — Blacktown",
    date: "Saturday, 5 July 2025",
    time: "6:00 PM – 9:00 PM",
    location: "Blacktown venue",
    notes: "Drop-in, no booking required.",
  },
  {
    type: "Open Social",
    typeColor: "bg-olive/20 text-olive border border-olive/40",
    title: "Open Social — Riverwood",
    date: "Sunday, 6 July 2025",
    time: "5:00 PM – 8:00 PM",
    location: "Riverwood venue",
    notes: "Drop-in, no booking required.",
  },
  {
    type: "Competition",
    typeColor: "bg-rust/10 text-rust border border-rust/30",
    title: "SVL Round Fixture",
    date: "Saturday, 12 July 2025",
    time: "TBC",
    location: "TBC",
    notes: "Follow Instagram for venue and time confirmation.",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        label="Events"
        title="UPCOMING EVENTS"
        subtitle="Open socials, competition fixtures, and other club events. All information is also posted on Instagram."
      />

      {/* Legend */}
      <section className="border-b border-tan/20 bg-bg">
        <Container className="py-5">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-sans text-xs text-muted uppercase tracking-widest">
              Event types:
            </span>
            <span className="font-sans text-xs px-2.5 py-1 bg-olive/20 text-olive border border-olive/40">
              Open Social
            </span>
            <span className="font-sans text-xs px-2.5 py-1 bg-rust/10 text-rust border border-rust/30">
              Competition
            </span>
          </div>
        </Container>
      </section>

      {/* Events list */}
      <section className="py-20 lg:py-28 bg-bg">
        <Container>
          <SectionHeader
            label="Schedule"
            title="JUNE — JULY 2025"
            subtitle="All dates are indicative. Confirm via Instagram before attending."
          />
          <div className="space-y-4">
            {events.map((e, i) => (
              <div
                key={i}
                className="bg-cream border border-tan/20 p-6 flex flex-col sm:flex-row sm:items-center gap-5 hover:border-rust/30 transition-colors duration-200"
              >
                {/* Date block */}
                <div className="sm:w-36 shrink-0">
                  <p className="font-display text-3xl text-ink leading-none">
                    {e.date.split(",")[1]?.trim().split(" ").slice(0, 2).join(" ")}
                  </p>
                  <p className="font-sans text-xs text-muted mt-1">
                    {e.date.split(",")[0]}
                  </p>
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-px h-12 bg-tan/30 shrink-0" />

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span
                      className={`font-sans text-xs px-2.5 py-1 ${e.typeColor}`}
                    >
                      {e.type}
                    </span>
                    <h3 className="font-display text-xl text-ink leading-none">
                      {e.title.toUpperCase()}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-4 font-sans text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {e.time}
                    </span>
                    <span className="flex items-center gap-1">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {e.location}
                    </span>
                  </div>
                  {e.notes && (
                    <p className="font-sans text-xs text-muted/70 mt-2 italic">
                      {e.notes}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-ink text-white/60 font-sans text-sm">
            <p>
              Event information is updated regularly. For the most current
              schedule, follow{" "}
              <a
                href="https://www.instagram.com/volleymates_sydney/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tan hover:text-white transition-colors duration-200"
              >
                @volleymates_sydney
              </a>{" "}
              on Instagram.
            </p>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
