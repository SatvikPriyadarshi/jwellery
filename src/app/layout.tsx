import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Outfit, Lato, Figtree } from "next/font/google";
import "./globals.css";
import {
  SITE_URL,
  SITE_CONFIG,
  getOrganizationJsonLd,
  getWebSiteJsonLd,
} from "@/lib/seo";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#081a15",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_CONFIG.titleDefault,
    template: SITE_CONFIG.titleTemplate,
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.name, url: SITE_URL }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  category: "Jewelry",
  keywords: [
    "fine jewelry",
    "bespoke jewelry",
    "Zambian emeralds",
    "emerald necklace",
    "diamond solitaire ring",
    "Jaipur jewelry atelier",
    "high jewelry",
    "handcrafted heirloom jewelry",
    "Uni Fine Jewelry",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.titleDefault,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Uni Fine Jewelry — Bespoke High Jewellery Since 1965",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.titleDefault,
    description: SITE_CONFIG.description,
    images: ["/og-image.jpg"],
    creator: "@unifinejewelry",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = getOrganizationJsonLd();
  const websiteSchema = getWebSiteJsonLd();

  return (
    <html
      lang="en"
      className={`${lato.variable} ${figtree.variable} ${bodoni.variable} ${cormorant.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        {/* Organization & WebSite JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="m-0 min-h-full p-0 font-sans">{children}</body>
    </html>
  );
}
