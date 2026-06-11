import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

const links = [
  { href: "/about", label: "About" },
  { href: "/socials", label: "Open Socials" },
  { href: "/competitions", label: "Competitions" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60">
      <Container className="py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/logo.jpg"
                alt="VolleyMates logo"
                width={40}
                height={40}
                className="rounded-sm object-cover"
              />
              <p className="font-display text-3xl text-white leading-none">
                VOLLEY<span className="text-rust">MATES</span>
              </p>
            </div>
            <p className="font-sans text-sm leading-relaxed text-white/50 max-w-xs">
              Open socials and friendly competitions across Sydney. Affiliated by
              VBNSW.
            </p>
            <div className="flex gap-2 mt-5 text-xs font-sans text-white/40">
              <span>📍 Blacktown</span>
              <span className="text-white/20">·</span>
              <span>Riverwood</span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-tan mb-4">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-sans text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + achievements */}
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-tan mb-4">
              Connect
            </p>
            <a
              href="https://www.instagram.com/volleymates_sydney/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-white/50 hover:text-white transition-colors duration-200 mb-6"
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
              @volleymates_sydney
            </a>

            <p className="font-sans text-xs uppercase tracking-[0.15em] text-tan mb-3">
              Achievements
            </p>
            <ul className="space-y-1.5 text-sm font-sans text-white/50">
              <li>🥇 SVL Division 2 Womens — 2024</li>
              <li>🥉 SVL Division 3 Womens — 2024</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row justify-between gap-2">
          <p className="font-sans text-xs text-white/30">
            © {new Date().getFullYear()} VolleyMates Sydney. All rights
            reserved.
          </p>
          <p className="font-sans text-xs text-white/30">
            Affiliated by Volleyball NSW (VBNSW)
          </p>
        </div>
      </Container>
    </footer>
  );
}
