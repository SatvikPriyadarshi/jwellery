"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { type Product } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";
import ProductQuickView from "@/components/shop/ProductQuickView";

interface ProductDetailClientProps {
  product: Product;
  related: Product[];
}

export default function ProductDetailClient({
  product,
  related,
}: ProductDetailClientProps) {
  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const allImages = [product.image, ...(product.gallery || [])];

  const inquirySubject = encodeURIComponent(
    `Atelier Inquiry: ${product.name} (Ref: ${product.id})`
  );
  const inquiryBody = encodeURIComponent(
    `Hello Uni Fine Jewelry Concierge,\n\nI am interested in acquiring or commissioning:\nPiece: ${product.name}\nReference: ${product.id}\nCategory: ${product.category}\n\nPlease share current availability, pricing details, and private appointment options.\n\nThank you.`
  );
  const mailtoUrl = `mailto:concierge@unifinejewelry.com?subject=${inquirySubject}&body=${inquiryBody}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    `Hello Uni Fine Jewelry, I am inquiring regarding ${product.name} (Ref: ${product.id}).`
  )}`;

  const getFittedImage = (img: string) =>
    img && img.startsWith("/images/shop/")
      ? img.replace("/images/shop/", "/images/shop-fitted/")
      : img;

  return (
    <div className="py-8 sm:py-16">
      <div className="shop-container">
        {/* Two-Column Master Product Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start bg-[#ffffff] p-4 sm:p-8 lg:p-10 border border-[rgba(198,161,91,0.3)] shadow-sm rounded-lg">
          {/* Left Column: Gallery & Photography */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative aspect-square w-full bg-[#faf7f2] border border-[rgba(198,161,91,0.2)] rounded-md overflow-hidden flex items-center justify-center">
              <Image
                src={getFittedImage(activeImage)}
                alt={`${product.name} — high jewelry showcase`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                quality={95}
                className="object-contain p-2 sm:p-4 transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Thumbnail Selectors if multiple images exist */}
            {allImages.length > 1 && (
              <div
                className="flex gap-3 overflow-x-auto pb-2"
                role="tablist"
                aria-label="Alternate views"
              >
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-20 bg-[#faf7f2] border p-1 transition-all ${
                      activeImage === img
                        ? "border-[var(--color-champagne)] shadow-md"
                        : "border-[rgba(198,161,91,0.25)] hover:border-[var(--color-champagne)]"
                    }`}
                    aria-label={`View angle ${i + 1}`}
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Editorial Specifications & Concierge Action */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <p className="font-sans text-xs tracking-[0.28em] uppercase text-[var(--color-champagne)] font-medium mb-2">
                {product.category}
              </p>

              <h1 className="font-serif text-3xl sm:text-4xl text-[var(--color-charcoal)] font-normal leading-[1.15] mb-3">
                {product.name}
              </h1>

              <div className="inline-block font-sans text-sm tracking-wider uppercase font-medium text-[var(--color-emerald)] bg-[rgba(18,60,50,0.06)] px-3 py-1.5 border border-[rgba(18,60,50,0.2)] mb-6">
                {product.priceLabel}
              </div>

              <p className="font-sans text-sm text-[#4a544d] font-light leading-relaxed mb-8">
                {product.shortDescription}
              </p>

              {/* Verified Product Specifications Table */}
              <div className="border-t border-b border-[rgba(198,161,91,0.2)] py-5 mb-8">
                <h2 className="font-serif text-lg text-[var(--color-charcoal)] mb-4">
                  Piece Specifications
                </h2>
                <dl className="grid grid-cols-2 gap-y-3 font-sans text-xs sm:text-sm">
                  <dt className="text-stone-500 font-light">Category</dt>
                  <dd className="text-right font-medium text-[var(--color-charcoal)] capitalize">
                    {product.category}
                  </dd>

                  <dt className="text-stone-500 font-light">Visible Gemstone</dt>
                  <dd className="text-right font-medium text-[var(--color-charcoal)] capitalize">
                    {product.visualAttributes.visibleStone}
                  </dd>

                  <dt className="text-stone-500 font-light">Apparent Metal</dt>
                  <dd className="text-right font-medium text-[var(--color-charcoal)] capitalize">
                    {product.visualAttributes.apparentMetalColor}
                  </dd>

                  <dt className="text-stone-500 font-light">Setting Design</dt>
                  <dd className="text-right font-medium text-[var(--color-charcoal)] capitalize">
                    {product.visualAttributes.design}
                  </dd>

                  <dt className="text-stone-500 font-light">Unique Reference</dt>
                  <dd className="text-right font-mono text-xs text-stone-600">
                    {product.id}
                  </dd>
                </dl>
              </div>
            </div>

            {/* Atelier Concierge Inquiries */}
            <div className="flex flex-col gap-3">
              <a
                href={mailtoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 px-6 bg-[var(--color-emerald)] hover:bg-[#184c3f] text-[var(--color-ivory)] border border-[var(--color-champagne)] font-sans text-xs font-medium tracking-[0.22em] uppercase rounded-md transition-all shadow-md"
              >
                Inquire with Atelier Concierge &rarr;
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 px-6 bg-[#faf7f2] hover:bg-[#ffffff] text-[var(--color-charcoal)] hover:text-[var(--color-emerald)] border border-[rgba(198,161,91,0.4)] font-sans text-xs font-medium tracking-[0.18em] uppercase rounded-md transition-colors"
              >
                Chat on WhatsApp
              </a>

              {/* Luxury Atelier Assurances */}
              <div className="mt-6 pt-5 border-t border-[rgba(198,161,91,0.15)] grid grid-cols-3 gap-1 sm:gap-2 text-center">
                <div>
                  <p className="font-serif text-xs sm:text-sm text-[var(--color-charcoal)] font-medium">
                    Atelier Sourced
                  </p>
                  <p className="font-sans text-[10px] sm:text-[11px] text-stone-500 mt-0.5">
                    100% Conflict Free
                  </p>
                </div>
                <div>
                  <p className="font-serif text-xs sm:text-sm text-[var(--color-charcoal)] font-medium">
                    Bespoke Sizing
                  </p>
                  <p className="font-sans text-[10px] sm:text-[11px] text-stone-500 mt-0.5">
                    Complimentary
                  </p>
                </div>
                <div>
                  <p className="font-serif text-xs sm:text-sm text-[var(--color-charcoal)] font-medium">
                    Worldwide Delivery
                  </p>
                  <p className="font-sans text-[10px] sm:text-[11px] text-stone-500 mt-0.5">
                    Insured Transit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Pieces Showcase */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[rgba(198,161,91,0.25)]">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="font-sans text-xs tracking-[0.28em] uppercase text-[var(--color-champagne)] font-medium mb-1">
                  Complementary Creations
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl text-[var(--color-charcoal)]">
                  More From {product.category}
                </h2>
              </div>
              <Link
                href={`/shop?category=${encodeURIComponent(product.category)}`}
                prefetch={false}
                className="font-sans text-xs tracking-wider uppercase text-[var(--color-champagne)] hover:text-[var(--color-emerald)] transition-colors pb-1 border-b border-[var(--color-champagne)]"
              >
                View All {product.category} &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {related.map((relProduct) => (
                <ProductCard
                  key={relProduct.id}
                  product={relProduct}
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Accessible Quick View Dialog */}
      <ProductQuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}
