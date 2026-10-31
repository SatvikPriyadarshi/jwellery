import type { Metadata } from "next";
import ContactPageClient from "@/components/contact/ContactPageClient";
import { getContactPageJsonLd, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Our Atelier & Concierge | Uni Fine Jewelry",
  description:
    "Connect with Uni Fine Jewelry's private concierge for bespoke commissions, gemstone acquisition, and atelier appointments in Jaipur and Kuala Lumpur.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Our Atelier & Concierge | Uni Fine Jewelry",
    description:
      "Connect with our private concierge team for bespoke commissions, gemstone acquisitions, and atelier appointments.",
    url: "/contact",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Uni Fine Jewelry — Contact Our Atelier & Concierge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Our Atelier & Concierge | Uni Fine Jewelry",
    description:
      "Connect with our private concierge team for bespoke commissions and atelier appointments.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  const contactSchema = getContactPageJsonLd();
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <main className="min-h-screen bg-[#f3efe4]">
      {/* ContactPage & Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ContactPageClient />
    </main>
  );
}
