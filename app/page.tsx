import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import SessionsSection from "@/components/home/SessionsSection";
import AboutStrip from "@/components/home/AboutStrip";
import CTABand from "@/components/home/CTABand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <SessionsSection />
      <AboutStrip />
      <CTABand />
    </>
  );
}
