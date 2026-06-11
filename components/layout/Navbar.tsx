"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/socials", label: "Open Socials" },
  { href: "/competitions", label: "Competitions" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ background: "rgba(19, 16, 26, 0.96)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/logo.jpg"
            alt="VolleyMates logo"
            width={36}
            height={36}
            className="rounded-sm object-cover"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`font-sans text-sm transition-colors duration-200 ${
                  active ? "text-tan" : "text-white/60 hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Instagram CTA */}
        <a
          href="https://www.instagram.com/volleymates_sydney/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-rust hover:bg-maroon text-white font-sans text-sm px-4 py-2 transition-colors duration-200"
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
          Follow Us
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-px bg-ink transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-ink transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-ink transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 pt-3" style={{ background: "rgba(19, 16, 26, 0.99)" }}>
          {links.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`block font-sans text-sm py-3 border-b border-ink/10 last:border-0 ${
                  active ? "text-rust" : "text-ink/60"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="https://www.instagram.com/volleymates_sydney/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-4 bg-rust text-white font-sans text-sm px-4 py-2.5 w-full justify-center"
          >
            Follow on Instagram
          </a>
        </div>
      )}
    </header>
  );
}
