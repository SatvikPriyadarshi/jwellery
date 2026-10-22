import type { Metadata } from "next";
import SiteNav from "@/components/nav/SiteNav";
import SiteFooter from "@/components/home/SiteFooter";
import ShopHero from "@/components/shop/ShopHero";
import ShopPage from "@/components/shop/ShopPage";

export const metadata: Metadata = {
  title: "The Fine Jewellery Collection | Uni Fine Jewelry",
  description:
    "Explore the complete fine jewellery collection from Uni Fine Jewelry. Discover handcrafted emerald, diamond, ruby, and sapphire rings, necklaces, earrings, and bracelets.",
};

export default function Shop() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] relative">
      <SiteNav activeHref="/shop" />
      <ShopHero />
      <ShopPage />
      <SiteFooter />
    </main>
  );
}
