import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/nav/SiteNav";
import SiteFooter from "@/components/home/SiteFooter";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy | Client Discretion & Data Protection",
  description:
    "Review Uni Fine Jewelry's privacy policy. We protect your personal data, bespoke consultation records, and private acquisition inquiries with strict confidentiality.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Uni Fine Jewelry",
    description:
      "Client discretion and data protection standards for private jewelry consultations and bespoke commissions.",
    url: "/privacy",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[var(--color-charcoal)]">
      <SiteNav activeHref="/privacy" solid />

      {/* Breadcrumbs */}
      <div className="bg-[#ffffff] border-b border-[rgba(193,145,94,0.22)] py-3">
        <div className="shop-container">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-sans text-stone-500">
            <Link href="/" className="hover:text-[var(--color-emerald)] transition-colors">Home</Link>
            <span aria-hidden="true">&rsaquo;</span>
            <span className="text-[var(--color-charcoal)] font-medium">Privacy Policy</span>
          </nav>
        </div>
      </div>

      <div className="shop-container py-12 sm:py-16 max-w-4xl mx-auto">
        <p className="font-sans text-xs tracking-[0.28em] uppercase text-[var(--color-champagne)] font-semibold mb-2">
          CLIENT DISCRETION &amp; SECURITY
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl text-[var(--color-charcoal)] font-normal mb-8">
          Atelier Privacy Policy
        </h1>

        <div className="bg-white p-6 sm:p-10 rounded-xl border border-[rgba(193,145,94,0.25)] shadow-sm space-y-6 font-sans text-sm text-stone-600 leading-relaxed font-light">
          <section>
            <h2 className="font-serif text-lg text-[var(--color-charcoal)] font-medium mb-2">
              1. Our Commitment to Discretion
            </h2>
            <p>
              Since 1965, Uni Fine Jewelry has served collectors and families with absolute confidentiality. We treat all personal details, bespoke jewelry design specifications, and purchase records as privileged information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg text-[var(--color-charcoal)] font-medium mb-2">
              2. Information We Collect
            </h2>
            <p>
              When you submit an atelier inquiry, schedule a private viewing, or message our concierge, we collect your name, contact information, and specific piece references to provide personalized concierge service. We do not sell or trade client data.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg text-[var(--color-charcoal)] font-medium mb-2">
              3. Secure Communications &amp; Transactions
            </h2>
            <p>
              Acquisitions and private consultations conducted through our Jaipur and Kuala Lumpur ateliers adhere to bank-grade encrypted communications and insured transit verification protocols.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg text-[var(--color-charcoal)] font-medium mb-2">
              4. Contact the Data Protection Officer
            </h2>
            <p>
              For inquiries regarding your stored preferences or to request data removal, please contact{" "}
              <a href="mailto:concierge@unifinejewelry.com" className="text-[var(--color-emerald)] font-medium underline">
                concierge@unifinejewelry.com
              </a>.
            </p>
          </section>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
