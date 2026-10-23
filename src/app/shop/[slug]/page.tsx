import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/nav/SiteNav";
import SiteFooter from "@/components/home/SiteFooter";
import PRODUCTS, {
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";
import "@/components/shop/ShopPage.css";

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
    };
  }

  return {
    title: `${product.name} | Fine Jewellery Collection | Uni Fine Jewelry`,
    description: `${product.shortDescription} Ref: ${product.id}.`,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product, 4);

  return (
    <main className="min-h-screen bg-[#f7f3ea] relative">
      <SiteNav activeHref="/shop" solid />

      {/* Breadcrumb Navigation Bar */}
      <div className="bg-[#ffffff] border-b border-[rgba(198,161,91,0.22)] py-3 sm:py-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
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
            <span>&larr; Back to Collection</span>
          </Link>
        </div>
      </div>

      {/* Main PDP Content */}
      <ProductDetailClient product={product} related={related} />

      <SiteFooter />
    </main>
  );
}
