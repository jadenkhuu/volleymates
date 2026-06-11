import Container from "@/components/ui/Container";

export default function CTABand() {
  return (
    <section className="grainy-gradient py-20 relative overflow-hidden">
      <Container className="relative z-10 text-center">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-tan mb-4">
          Get Involved
        </p>
        <h2 className="font-display text-5xl lg:text-7xl text-white leading-none mb-5">
          READY TO PLAY?
        </h2>
        <p className="font-sans text-sm text-white/65 max-w-md mx-auto mb-8 leading-relaxed">
          Follow us on Instagram to stay up to date with session schedules,
          upcoming events, and how to join.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://www.instagram.com/volleymates_sydney/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-ink font-sans text-sm px-7 py-3.5 hover:bg-cream transition-colors duration-200"
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
            Follow @volleymates_sydney
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/30 text-white font-sans text-sm px-7 py-3.5 hover:border-white transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </Container>
    </section>
  );
}
