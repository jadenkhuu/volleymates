import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABand from "@/components/home/CTABand";

const infoItems = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
    label: "Instagram",
    value: "@volleymates_sydney",
    href: "https://www.instagram.com/volleymates_sydney/",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
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
    ),
    label: "Locations",
    value: "Blacktown & Riverwood, NSW",
    href: null,
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    label: "Affiliation",
    value: "Volleyball NSW (VBNSW)",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="GET IN TOUCH"
        subtitle="The best way to connect with VolleyMates is through Instagram. We post all session and event updates there."
      />

      <section className="py-20 lg:py-28 bg-bg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — info */}
            <div>
              <SectionHeader
                label="Contact Information"
                title="HOW TO REACH US"
                subtitle="For session enquiries, competition information, or general questions, reach out via Instagram."
              />

              <div className="space-y-5">
                {infoItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 bg-cream border border-tan/20"
                  >
                    <span className="text-rust mt-0.5">{item.icon}</span>
                    <div>
                      <p className="font-sans text-xs uppercase tracking-[0.15em] text-muted mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-sm text-ink hover:text-rust transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-sans text-sm text-ink">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="https://www.instagram.com/volleymates_sydney/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-rust hover:bg-maroon text-white font-sans text-sm px-7 py-3.5 transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                  Follow on Instagram
                </a>
              </div>
            </div>

            {/* Right — FAQ */}
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-rust mb-6">
                Common Questions
              </p>
              <div className="space-y-5">
                {[
                  {
                    q: "Do I need to register to attend an open social?",
                    a: "No. Open social sessions are drop-in and do not require prior registration. Session schedules are posted on Instagram.",
                  },
                  {
                    q: "What experience level is required for open socials?",
                    a: "None. Sessions are open to all experience levels, including those who have not played before.",
                  },
                  {
                    q: "How do I join a competition team?",
                    a: "Information on team trials and registration periods is shared through Instagram. Follow the account for announcements ahead of each SVL season.",
                  },
                  {
                    q: "Which venues are used?",
                    a: "VolleyMates operates out of indoor court facilities in Blacktown and Riverwood. Specific venue addresses are communicated before each session.",
                  },
                  {
                    q: "Is the club affiliated with a governing body?",
                    a: "Yes. VolleyMates is affiliated with Volleyball NSW (VBNSW) and competes in the Sydney Volleyball League under that affiliation.",
                  },
                ].map((faq, i) => (
                  <div
                    key={i}
                    className="border-b border-tan/30 pb-5 last:border-0"
                  >
                    <p className="font-display text-lg text-ink leading-snug mb-2">
                      {faq.q.toUpperCase()}
                    </p>
                    <p className="font-sans text-sm text-muted leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
