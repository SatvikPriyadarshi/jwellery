import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/nav/SiteNav";
import SiteFooter from "@/components/home/SiteFooter";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms & Conditions | Atelier Policies & Guarantees",
  description:
    "Review Uni Fine Jewelry terms of service, bespoke commissions, authenticity guarantees, worldwide insured delivery, and complimentary sizing terms.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Uni Fine Jewelry",
    description:
      "Atelier acquisition terms, authenticity certifications, bespoke sizing, and white-glove delivery policies.",
    url: "/terms",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[var(--color-charcoal)]">
      <SiteNav activeHref="/terms" solid />

      {/* Breadcrumbs */}
      <div className="bg-[#ffffff] border-b border-[rgba(193, 145, 94,0.22)] py-3">
        <div className="shop-container">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-sans text-stone-500">
            <Link href="/" className="hover:text-[var(--color-emerald)] transition-colors">Home</Link>
            <span aria-hidden="true">&rsaquo;</span>
            <span className="text-[var(--color-charcoal)] font-medium">Terms &amp; Conditions</span>
          </nav>
        </div>
      </div>

      <div className="shop-container py-12 sm:py-16 max-w-4xl mx-auto">
        <p className="font-sans text-xs tracking-[0.28em] uppercase text-[var(--color-champagne)] font-semibold mb-2">
          AUTHENTICITY &bull; COMMISSIONS &bull; POLICIES
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl text-[var(--color-charcoal)] font-normal mb-8">
          Atelier Terms &amp; Conditions
        </h1>

        <div className="bg-white p-6 sm:p-10 rounded-xl border border-[rgba(193, 145, 94,0.25)] shadow-sm space-y-6 font-sans text-sm text-stone-600 leading-relaxed font-light">
          <section>
            <h2 className="font-serif text-lg text-[var(--color-charcoal)] font-medium mb-2">
              1. Lifetime Authenticity Guarantee
            </h2>
            <p>
              Every creation bearing the Uni hallmark is certified authentic, crafted from solid precious metals (18K Gold, Platinum) and natural, responsibly sourced gemstones. Each piece is accompanied by an official Certificate of Authenticity.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg text-[var(--color-charcoal)] font-medium mb-2">
              2. Bespoke Commissions &amp; Private Pricing
            </h2>
            <p>
              Due to the unique nature of natural emeralds and high-carat diamonds, pricing is provided upon private inquiry. Custom commissions require atelier design approval, stone allocation, and milestone confirmation before setting.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg text-[var(--color-charcoal)] font-medium mb-2">
              3. Complimentary Sizing &amp; Inspection
            </h2>
            <p>
              All rings include one complimentary bespoke sizing adjustment within six months of acquisition. Clients enjoy lifetime annual cleaning and microscopic prong inspection at our salons.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg text-[var(--color-charcoal)] font-medium mb-2">
              4. Insured White-Glove Shipping &amp; Returns
            </h2>
            <p>
              Shipments are fully insured via specialized armored transport. Standard catalogue pieces may be returned within 14 days in unworn condition with original seals and certificate documentation intact. Custom bespoke commissions are final sale.
            </p>
          </section>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
