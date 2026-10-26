import type { Metadata } from "next";
import SiteNav from "@/components/nav/SiteNav";
import SiteFooter from "@/components/home/SiteFooter";
import ShopHero from "@/components/shop/ShopHero";
import ShopPage from "@/components/shop/ShopPage";
import PRODUCTS from "@/data/products";
import { getCollectionPageJsonLd, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "The Fine Jewellery Collection | Rings, Necklaces & Bracelets",
  description:
    "Explore the complete collection of bespoke emerald rings, diamond necklaces, gemstone earrings, and handcrafted bracelets from the Uni Fine Jewelry atelier.",
  alternates: {
    canonical: "/shop",
  },
  openGraph: {
    title: "The Fine Jewellery Collection | Uni Fine Jewelry",
    description:
      "Explore handcrafted emerald rings, diamond necklaces, gemstone earrings, and heirloom bracelets from our Jaipur & Kuala Lumpur ateliers.",
    url: "/shop",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Uni Fine Jewelry — Complete Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Fine Jewellery Collection | Uni Fine Jewelry",
    description:
      "Explore handcrafted emerald rings, diamond necklaces, gemstone earrings, and heirloom bracelets.",
    images: ["/og-image.jpg"],
  },
};

export default function Shop() {
  const collectionSchema = getCollectionPageJsonLd(PRODUCTS);
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Collection", url: "/shop" },
  ]);

  return (
    <main className="min-h-screen bg-[#f7f3ea] relative">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteNav activeHref="/shop" />
      <ShopHero />
      <ShopPage />
      <SiteFooter />
    </main>
  );
}
