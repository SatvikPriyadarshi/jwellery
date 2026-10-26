import type { Metadata } from "next";
import Hero from "@/components/hero/Hero";
import HomeContent from "@/components/home/HomeContent";
import SiteNav from "@/components/nav/SiteNav";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Uni Fine Jewelry | Bespoke Heirlooms & Ethical Gemstones Since 1965",
  description:
    "Discover Uni Fine Jewelry: handcrafted Zambian emeralds, rare colored gemstones, and bespoke diamond heirlooms shaped through generations of Jaipur lapidary artistry.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Uni Fine Jewelry | Bespoke Heirlooms & Ethical Gemstones Since 1965",
    description:
      "Handcrafted Zambian emeralds, rare colored gemstones, and bespoke diamond heirlooms shaped through generations of Jaipur lapidary artistry.",
    url: "/",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Uni Fine Jewelry — Bespoke High Jewellery Since 1965",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="relative">
      <SiteNav />
      <Hero />
      <HomeContent />
    </main>
  );
}
