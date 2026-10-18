import type { Metadata } from "next";
import SiteNav from "@/components/nav/SiteNav";
import SiteFooter from "@/components/home/SiteFooter";
import AboutHero from "@/components/about/AboutHero";
import AboutWhoWeAre from "@/components/about/AboutWhoWeAre";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutCraftsmanship from "@/components/about/AboutCraftsmanship";
import AboutCta from "@/components/about/AboutCta";

export const metadata: Metadata = {
  title: "About Us | A Legacy of Craftsmanship Since 1965 | Uni Fine Jewelry",
  description:
    "Discover the story of Uni Fine Jewelry: family-owned craftsmanship dating back to 1965. From gemstone and diamond trading to Zambian emerald manufacturing and bespoke high jewelry heirlooms.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0b211c]">
      {/* Fixed/Floating Navigation */}
      <div className="relative">
        <SiteNav activeHref="/about" />
      </div>

      {/* 1. Hero: A Legacy of Craftsmanship Since 1965 */}
      <AboutHero />

      {/* 2. Who We Are: Deep Family Stewardship & Narrative */}
      <AboutWhoWeAre />

      {/* 3. The Heritage Chronology Timeline (Core Interactive Showcase) */}
      <AboutTimeline />

      {/* 4. More Than Jewelry. A Legacy. (The Adamas Philosophy) */}
      <AboutPhilosophy />

      {/* 5. Crafted Through Generations: Four Pillars of Atelier Artistry */}
      <AboutCraftsmanship />

      {/* 6. Crescendo Invitation & Action */}
      <AboutCta />

      {/* 7. Comprehensive Site Footer & Contacts */}
      <SiteFooter />
    </main>
  );
}
