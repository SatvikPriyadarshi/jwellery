import { Product } from "@/data/products";

/**
 * Production Canonical Site URL
 * Defaults to the verified live Vercel domain, or overrides with NEXT_PUBLIC_SITE_URL if configured.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://jwellery-lilac.vercel.app")
).replace(/\/+$/, "");

export const SITE_CONFIG = {
  name: "Uni Fine Jewelry",
  legalName: "Uni Fine Jewelry Co.",
  foundingYear: "1965",
  titleDefault: "Uni Fine Jewelry | Bespoke Heirlooms & Ethical Gemstones Since 1965",
  titleTemplate: "%s | Uni Fine Jewelry",
  description:
    "Explore Uni Fine Jewelry: family-owned high jewelry atelier since 1965. Handcrafted Zambian emeralds, rare colored gemstones, and bespoke diamond heirlooms shaped through generations of Jaipur lapidary artistry.",
  ogImage: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/images/Logo.webp`,
  email: "concierge@unifinejewelry.com",
  phone: "+91 75680 42023",
  social: {
    instagram: "https://instagram.com/unifinejewelry",
  },
  locations: [
    {
      locality: "Jaipur",
      region: "Rajasthan",
      country: "IN",
    },
    {
      locality: "Kuala Lumpur",
      country: "MY",
    },
  ],
};

/**
 * Organization & JewelryStore Schema (JSON-LD)
 */
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["JewelryStore", "Organization"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: SITE_CONFIG.logo,
      width: 798,
      height: 335,
    },
    image: SITE_CONFIG.ogImage,
    description: SITE_CONFIG.description,
    foundingDate: SITE_CONFIG.foundingYear,
    priceRange: "$$$$",
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: SITE_CONFIG.locations.map((loc) => ({
      "@type": "PostalAddress",
      addressLocality: loc.locality,
      ...(loc.region ? { addressRegion: loc.region } : {}),
      addressCountry: loc.country,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Concierge",
      email: SITE_CONFIG.email,
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [SITE_CONFIG.social.instagram],
  };
}

/**
 * WebSite Schema (JSON-LD)
 */
export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/shop?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * BreadcrumbList Schema (JSON-LD)
 */
export function getBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Product Schema (JSON-LD)
 * Accurate and truthful to visible page content.
 */
export function getProductJsonLd(product: Product) {
  const productUrl = `${SITE_URL}/shop/${product.slug}`;
  const imageUrl = product.image.startsWith("http")
    ? product.image
    : `${SITE_URL}${product.image}`;

  const galleryUrls = (product.gallery || []).map((g) =>
    g.startsWith("http") ? g : `${SITE_URL}${g}`
  );

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    url: productUrl,
    name: product.name,
    description: product.shortDescription,
    image: [imageUrl, ...galleryUrls],
    sku: product.id,
    mpn: product.id,
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.name,
    },
    category: product.category,
    material: product.visualAttributes.apparentMetalColor,
    color: product.visualAttributes.apparentMetalColor,
    gemstone: product.visualAttributes.visibleStone,
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "USD",
      price: product.price ? String(product.price) : "0",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        description: product.priceLabel || "Contact for Pricing",
      },
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  };
}

/**
 * CollectionPage Schema (JSON-LD)
 */
export function getCollectionPageJsonLd(products: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/shop#collection`,
    url: `${SITE_URL}/shop`,
    name: "Fine Jewellery Collection | Uni Fine Jewelry",
    description:
      "Explore the complete collection of handcrafted emerald, diamond, ruby, and sapphire jewellery.",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.slice(0, 24).map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/shop/${product.slug}`,
        name: product.name,
      })),
    },
  };
}

/**
 * AboutPage Schema (JSON-LD)
 */
export function getAboutPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about#about`,
    url: `${SITE_URL}/about`,
    name: "Our Story & Heritage Since 1965 | Uni Fine Jewelry",
    description:
      "The history of Uni Fine Jewelry: over five decades of family lapidary mastery and ethical Zambian emerald manufacturing.",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

/**
 * ContactPage Schema (JSON-LD)
 */
export function getContactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#contact`,
    url: `${SITE_URL}/contact`,
    name: "Contact Our Atelier & Concierge | Uni Fine Jewelry",
    description:
      "Connect with Uni Fine Jewelry's concierge team for bespoke jewelry commissions, gemstone acquisitions, and atelier appointments in Jaipur and Kuala Lumpur.",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntity: {
      "@type": "JewelryStore",
      name: SITE_CONFIG.name,
      telephone: "+91 75680 42023",
      email: "info@unifinejewelry.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "N K Towers, Purohit Ji Ka Bagh, Mirza Ismail Rd",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        postalCode: "302001",
        addressCountry: "IN",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "10:30",
          closes: "19:00",
        },
      ],
    },
  };
}
