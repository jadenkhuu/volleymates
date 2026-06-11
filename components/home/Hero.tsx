import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "72vh", minHeight: "560px" }}
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1728971124745-423b12df446d?auto=format&fit=crop&w=1920&q=80"
        alt="Volleyball match in action"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Grain layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          opacity: 0.07,
          mixBlendMode: "soft-light",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-8 md:px-14 lg:px-20">
        <div className="max-w-[420px]">

          {/* Club name */}
          <h1 className="animate-fade-up font-display leading-[0.9] text-white mb-4 text-[clamp(4.5rem,10vw,8rem)]">
            VOLLEY<span className="text-rust">MATES</span>
          </h1>

          {/* Body — Lora italic for serif/sans contrast */}
          <p className="animate-fade-up-delay-1 font-serif italic text-base leading-relaxed text-white/70 mb-6">
            Open socials and fun, friendly competitions across
            Blacktown and Riverwood.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-2 flex flex-wrap gap-3 mb-5">
            <Link
              href="/socials"
              className="bg-rust hover:bg-maroon text-white font-sans text-sm px-6 py-2.5 transition-colors duration-200 tracking-wide"
            >
              Join a Social
            </Link>
            <Link
              href="/competitions"
              className="border border-white/30 hover:border-white/70 text-white font-sans text-sm px-6 py-2.5 transition-colors duration-200 tracking-wide"
            >
              Our Competitions
            </Link>
          </div>

          {/* Achievements — compact, anchored to bottom of content */}
          <div className="animate-fade-up-delay-3 flex flex-wrap gap-2">
            <span className="font-sans text-[11px] text-tan/75 border border-tan/25 px-2.5 py-1">
              🥇 SVL Div 2 — 2024
            </span>
            <span className="font-sans text-[11px] text-tan/75 border border-tan/25 px-2.5 py-1">
              🥉 SVL Div 3 — 2024
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
