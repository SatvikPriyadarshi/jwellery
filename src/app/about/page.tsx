import type { Metadata } from "next";
import SiteNav from "@/components/nav/SiteNav";
import SiteFooter from "@/components/home/SiteFooter";
import AboutHero from "@/components/about/AboutHero";
import AboutWhoWeAre from "@/components/about/AboutWhoWeAre";
import AboutPeople from "@/components/about/AboutPeople";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutCraftsmanship from "@/components/about/AboutCraftsmanship";
import { getAboutPageJsonLd, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Story & Heritage | Over 50 Years of Gemstone Artistry",
  description:
    "Explore the legacy of Uni Fine Jewelry: over five decades of family lapidary mastery, ethical Zambian emerald sourcing, and bespoke goldsmithing from Jaipur to Kuala Lumpur.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Our Story & Heritage | Uni Fine Jewelry",
    description:
      "Over five decades of family lapidary mastery, ethical Zambian emerald sourcing, and bespoke goldsmithing from Jaipur to Kuala Lumpur.",
    url: "/about",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Uni Fine Jewelry — Atelier Heritage & Craftsmanship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story & Heritage | Uni Fine Jewelry",
    description:
      "Over five decades of family lapidary mastery, ethical Zambian emerald sourcing, and bespoke goldsmithing.",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  const aboutSchema = getAboutPageJsonLd();
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Our Story", url: "/about" },
  ]);

  return (
    <main className="min-h-screen bg-[#0b211c] relative">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteNav activeHref="/about" />
      <AboutHero />

      <AboutWhoWeAre />
      <AboutPeople />
      <AboutTimeline />

      {/* 4. More Than Jewelry. A Legacy. (The Adamas Philosophy) */}
      <AboutPhilosophy />

      {/* 5. Crafted Through Generations: Four Pillars of Atelier Artistry */}
      <AboutCraftsmanship />

      {/* 6. Comprehensive Site Footer & Contacts */}
      <SiteFooter />
    </main>
  );
}
