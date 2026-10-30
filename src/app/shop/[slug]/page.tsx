import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SiteNav from "@/components/nav/SiteNav";
import SiteFooter from "@/components/home/SiteFooter";
import PRODUCTS, {
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";
import "@/components/shop/ShopPage.css";
import {
  SITE_URL,
  getProductJsonLd,
  getBreadcrumbJsonLd,
} from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Jewellery Piece Not Found | Uni Fine Jewelry",
      robots: { index: false, follow: false },
    };
  }

  const title = `${product.name} | ${product.category}`;
  const description = `${product.name} in ${product.visualAttributes.apparentMetalColor} with natural ${product.visualAttributes.visibleStone}. Ref: ${product.id}. Handcrafted fine jewellery by Uni Fine Jewelry.`;
  const canonicalUrl = `/shop/${product.slug}`;
  const absoluteImageUrl = product.image.startsWith("http")
    ? product.image
    : `${SITE_URL}${product.image}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonicalUrl,
      title: `${product.name} | Uni Fine Jewelry`,
      description,
      images: [
        {
          url: absoluteImageUrl,
          width: 800,
          height: 800,
          alt: `${product.name} — ${product.category} by Uni Fine Jewelry`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Uni Fine Jewelry`,
      description,
      images: [absoluteImageUrl],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product, 4);

  // Generate Structured Data for Product and Breadcrumbs
  const productSchema = getProductJsonLd(product);
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Collection", url: "/shop" },
    {
      name: product.category,
      url: `/shop?category=${encodeURIComponent(product.category)}`,
    },
    { name: product.name, url: `/shop/${product.slug}` },
  ]);

  return (
    <main className="min-h-screen bg-[#f7f3ea] relative">
      {/* Product & Breadcrumb JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteNav activeHref="/shop" solid />

      {/* Breadcrumb Navigation Bar */}
      <div className="bg-[#ffffff] border-b border-[rgba(193, 145, 94,0.22)] py-3 sm:py-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <div className="shop-container flex items-center justify-between">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 sm:gap-2 text-xs font-sans text-stone-500 overflow-x-auto py-0.5"
          >
            <Link
              href="/"
              prefetch={false}
              className="hover:text-[var(--color-emerald)] transition-colors whitespace-nowrap"
            >
              Home
            </Link>
            <span aria-hidden="true" className="text-stone-300">&rsaquo;</span>
            <Link
              href="/shop"
              prefetch={false}
              className="hover:text-[var(--color-emerald)] transition-colors whitespace-nowrap"
            >
              Collection
            </Link>
            <span aria-hidden="true" className="text-stone-300">&rsaquo;</span>
            <Link
              href={`/shop?category=${encodeURIComponent(product.category)}`}
              className="hover:text-[var(--color-emerald)] transition-colors whitespace-nowrap capitalize"
            >
              {product.category}
            </Link>
            <span aria-hidden="true" className="text-stone-300">&rsaquo;</span>
            <span className="text-[var(--color-charcoal)] font-medium truncate max-w-[160px] sm:max-w-none">
              {product.name}
            </span>
          </nav>

          <Link
            href="/shop"
            prefetch={false}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[var(--color-emerald)] hover:text-[var(--color-champagne)] transition-colors"
          >
            <span>Back to Collection</span>
          </Link>
        </div>
      </div>

      {/* Main PDP Content */}
      <ProductDetailClient product={product} related={related} />

      <SiteFooter />
    </main>
  );
}
