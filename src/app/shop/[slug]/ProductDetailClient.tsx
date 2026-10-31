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
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const allImages = [product.image, ...(product.gallery || [])];

  const inquirySubject = encodeURIComponent(
    `Atelier Inquiry: ${product.name} (Ref: ${product.id})`
  );
  const inquiryBody = encodeURIComponent(
    `Hello Uni Fine Jewelry Concierge,\n\nI am interested in acquiring or commissioning:\nPiece: ${product.name}\nReference: ${product.id}\nCategory: ${product.category}\n\nPlease share current availability, pricing details, and private appointment options.\n\nThank you.`
  );
  const mailtoUrl = `mailto:concierge@unifinejewelry.com?subject=${inquirySubject}&body=${inquiryBody}`;
  const whatsappUrl = `https://wa.me/917568042023?text=${encodeURIComponent(
    `Hello Uni Fine Jewelry Concierge,\n\nI am inquiring about:\n*Piece:* ${product.name}\n*Reference:* ${product.id}\n*Category:* ${product.category}\n*Link:* https://jwellery-lilac.vercel.app/shop/${product.slug}\n\nPlease share current pricing, certificate details, and private appointment options.\n\nThank you.`
  )}`;

  const getFittedImage = (img: string) =>
    img && img.startsWith("/images/shop/")
      ? img.replace("/images/shop/", "/images/shop-fitted/")
      : img;

  const handleCopyRef = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(product.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="py-8 sm:py-14">
      <div className="shop-container">
        {/* Main Product Presentation Master Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start bg-[#ffffff] p-5 sm:p-10 lg:p-12 border border-[rgba(193,145,94,0.32)] shadow-[0_20px_50px_rgba(14,42,34,0.06)] rounded-xl">
          {/* Left Column: Gallery & Photography Showcase */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative aspect-square w-full bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#faf8f4] border border-[rgba(193,145,94,0.25)] rounded-lg overflow-hidden flex items-center justify-center p-6 sm:p-12 shadow-[inset_0_0_40px_rgba(193,145,94,0.05)] group">
              {/* Corner Filigree Brackets */}
              <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[rgba(193,145,94,0.5)] rounded-tl-sm pointer-events-none" />
              <span className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[rgba(193,145,94,0.5)] rounded-tr-sm pointer-events-none" />
              <span className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[rgba(193,145,94,0.5)] rounded-bl-sm pointer-events-none" />
              <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[rgba(193,145,94,0.5)] rounded-br-sm pointer-events-none" />

              {/* Atelier Masterpiece Badge */}
              <div className="absolute top-5 left-5 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(11,33,28,0.88)] backdrop-blur-md border border-[rgba(193,145,94,0.4)] text-[var(--color-champagne)] font-sans text-[10px] tracking-[0.2em] uppercase font-semibold shadow-sm">
                <span className="text-[10px]">❖</span>
                <span>Atelier Masterpiece</span>
              </div>

              {/* Main Photo with smooth hover zoom */}
              <Image
                src={getFittedImage(activeImage)}
                alt={`${product.name} — high jewelry showcase`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                quality={95}
                className="object-contain p-4 sm:p-8 transition-transform duration-700 ease-out group-hover:scale-105 cursor-zoom-in"
                onClick={() => setIsZoomOpen(true)}
              />

              {/* Inspect Zoom Prompt Button */}
              <button
                type="button"
                onClick={() => setIsZoomOpen(true)}
                className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.92)] hover:bg-white text-[var(--color-emerald)] border border-[rgba(193,145,94,0.4)] text-[11px] font-sans font-medium tracking-wider shadow-md transition-all hover:scale-105"
                aria-label="Inspect high resolution details"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                <span>Inspect Facets</span>
              </button>
            </div>

            {/* Thumbnail Gallery if multiple images exist */}
            {allImages.length > 1 && (
              <div
                className="flex gap-3 overflow-x-auto pb-1"
                role="tablist"
                aria-label="Alternate views"
              >
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-20 rounded-md bg-[#faf8f4] border p-1 transition-all ${
                      activeImage === img
                        ? "border-[var(--color-champagne)] shadow-md ring-2 ring-[rgba(193,145,94,0.35)]"
                        : "border-[rgba(193,145,94,0.25)] hover:border-[var(--color-champagne)] opacity-75 hover:opacity-100"
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

          {/* Right Column: Editorial Specifications & Concierge Inquiries */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* Category Eyebrow with gold divider */}
              <p className="font-sans text-[11px] tracking-[0.32em] uppercase text-[var(--color-champagne)] font-semibold mb-2 flex items-center gap-2">
                <span>UNI HAUTE JOAILLERIE</span>
                <span className="w-6 h-[1px] bg-[rgba(193,145,94,0.4)]" />
                <span>{product.category.toUpperCase()}</span>
              </p>

              {/* Master Title */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] text-[var(--color-charcoal)] font-normal leading-[1.12] mb-3 tracking-tight">
                {product.name}
              </h1>

              {/* Price & Reference Line */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mb-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(24,67,67,0.06)] border border-[rgba(24,67,67,0.22)] text-[var(--color-emerald)] font-sans text-xs font-semibold tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-emerald)] animate-pulse" />
                  {product.priceLabel}
                </span>

                <button
                  type="button"
                  onClick={handleCopyRef}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fbf9f5] border border-[rgba(193,145,94,0.3)] text-stone-600 font-mono text-[11px] hover:border-[var(--color-champagne)] hover:text-[var(--color-emerald)] transition-colors"
                  title="Click to copy piece reference"
                >
                  <span>Ref: {product.id}</span>
                  <span className="text-[10px] text-[var(--color-champagne)] font-sans font-medium">
                    {copied ? "✓ Copied" : "⧉"}
                  </span>
                </button>
              </div>

              {/* Editorial Description Lead */}
              <div className="mb-6 p-4 rounded-lg bg-[rgba(247,243,234,0.45)] border-l-2 border-[var(--color-champagne)]">
                <p className="font-serif italic text-base sm:text-lg text-stone-700 leading-relaxed">
                  &ldquo;{product.shortDescription}&rdquo;
                </p>
              </div>

              {/* Verified Product Specifications Passport Card */}
              <div className="bg-[#faf8f4] border border-[rgba(193,145,94,0.28)] rounded-lg p-5 mb-7">
                <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-[rgba(193,145,94,0.2)]">
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--color-champagne)] text-sm">❖</span>
                    <h2 className="font-serif text-base text-[var(--color-charcoal)] font-medium tracking-wide">
                      Piece Specifications & Provenance
                    </h2>
                  </div>
                  <span className="text-[10px] font-sans tracking-[0.2em] uppercase font-semibold text-[var(--color-emerald)] bg-[rgba(24,67,67,0.08)] px-2 py-0.5 rounded">
                    Atelier Certified
                  </span>
                </div>

                <dl className="grid grid-cols-2 gap-y-2.5 gap-x-4 font-sans text-xs sm:text-sm">
                  <dt className="text-stone-500 font-light flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[var(--color-champagne)]" />
                    Category
                  </dt>
                  <dd className="text-right font-medium text-[var(--color-charcoal)] capitalize">
                    {product.category}
                  </dd>

                  <dt className="text-stone-500 font-light flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[var(--color-champagne)]" />
                    Visible Gemstone
                  </dt>
                  <dd className="text-right font-medium text-[var(--color-charcoal)] capitalize">
                    {product.visualAttributes.visibleStone}
                  </dd>

                  <dt className="text-stone-500 font-light flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[var(--color-champagne)]" />
                    Precious Metal
                  </dt>
                  <dd className="text-right font-medium text-[var(--color-charcoal)] capitalize">
                    {product.visualAttributes.apparentMetalColor}
                  </dd>

                  <dt className="text-stone-500 font-light flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[var(--color-champagne)]" />
                    Setting Architecture
                  </dt>
                  <dd className="text-right font-medium text-[var(--color-charcoal)] capitalize">
                    {product.visualAttributes.design}
                  </dd>

                  <dt className="text-stone-500 font-light flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[var(--color-champagne)]" />
                    Atelier Origin
                  </dt>
                  <dd className="text-right font-medium text-[var(--color-charcoal)]">
                    Jaipur & Kuala Lumpur
                  </dd>

                  <dt className="text-stone-500 font-light flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[var(--color-champagne)]" />
                    Unique Reference
                  </dt>
                  <dd className="text-right font-mono text-xs font-semibold text-[var(--color-emerald)]">
                    {product.id}
                  </dd>
                </dl>
              </div>
            </div>

            {/* Atelier Concierge Inquiries Actions */}
            <div className="flex flex-col gap-3">
              <a
                href={mailtoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-4 px-6 bg-[var(--color-emerald)] hover:bg-[#123636] text-[#c1915e] border border-[var(--color-champagne)] font-sans text-xs font-semibold tracking-[0.22em] uppercase rounded-md transition-all shadow-[0_4px_16px_rgba(24,67,67,0.25)] hover:shadow-[0_6px_22px_rgba(24,67,67,0.35)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Inquire with Atelier Concierge</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 px-6 bg-[#faf7f2] hover:bg-[#ffffff] text-[var(--color-charcoal)] hover:text-[var(--color-emerald)] border border-[rgba(193,145,94,0.45)] hover:border-[var(--color-champagne)] font-sans text-xs font-semibold tracking-[0.18em] uppercase rounded-md transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Inquire via WhatsApp Concierge</span>
              </a>

              <p className="text-[11px] font-sans text-stone-500 text-center tracking-wide mt-0.5">
                Private salon viewings in Jaipur & Kuala Lumpur or virtual video appointments available.
              </p>

              {/* 4 Luxury Atelier Assurances */}
              <div className="mt-5 pt-5 border-t border-[rgba(193,145,94,0.2)] grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                <div className="p-2.5 rounded-md bg-[#faf8f4] border border-[rgba(193,145,94,0.18)]">
                  <p className="font-serif text-xs sm:text-sm text-[var(--color-charcoal)] font-medium">
                    Atelier Sourced
                  </p>
                  <p className="font-sans text-[10px] text-stone-500 mt-0.5">
                    100% Conflict Free
                  </p>
                </div>
                <div className="p-2.5 rounded-md bg-[#faf8f4] border border-[rgba(193,145,94,0.18)]">
                  <p className="font-serif text-xs sm:text-sm text-[var(--color-charcoal)] font-medium">
                    Bespoke Sizing
                  </p>
                  <p className="font-sans text-[10px] text-stone-500 mt-0.5">
                    Complimentary
                  </p>
                </div>
                <div className="p-2.5 rounded-md bg-[#faf8f4] border border-[rgba(193,145,94,0.18)]">
                  <p className="font-serif text-xs sm:text-sm text-[var(--color-charcoal)] font-medium">
                    Insured Transit
                  </p>
                  <p className="font-sans text-[10px] text-stone-500 mt-0.5">
                    Worldwide Armored
                  </p>
                </div>
                <div className="p-2.5 rounded-md bg-[#faf8f4] border border-[rgba(193,145,94,0.18)]">
                  <p className="font-serif text-xs sm:text-sm text-[var(--color-charcoal)] font-medium">
                    Lifetime Care
                  </p>
                  <p className="font-sans text-[10px] text-stone-500 mt-0.5">
                    Annual Inspection
                  </p>
                </div>
              </div>

              {/* Collapsible Luxury Accordion (Craftsmanship, Packaging, Care) */}
              <div className="mt-6 border-t border-[rgba(193,145,94,0.2)] pt-2 divide-y divide-[rgba(193,145,94,0.16)]">
                {/* Accordion Item 1 */}
                <div className="py-3">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(0)}
                    className="w-full flex items-center justify-between text-left font-serif text-sm sm:text-base text-[var(--color-charcoal)] font-medium hover:text-[var(--color-emerald)] transition-colors"
                  >
                    <span>Generational Lapidary & Setting</span>
                    <span className="text-[var(--color-champagne)] font-sans text-xs">
                      {openAccordion === 0 ? "−" : "+"}
                    </span>
                  </button>
                  {openAccordion === 0 && (
                    <p className="font-sans text-xs text-stone-600 font-light leading-relaxed mt-2.5">
                      Each gemstone is individually selected and precision-cut by our master lapidaries in Jaipur. Hand-set under microscopic magnification in solid gold to ensure heirloom durability and unmatched light reflection.
                    </p>
                  )}
                </div>

                {/* Accordion Item 2 */}
                <div className="py-3">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(1)}
                    className="w-full flex items-center justify-between text-left font-serif text-sm sm:text-base text-[var(--color-charcoal)] font-medium hover:text-[var(--color-emerald)] transition-colors"
                  >
                    <span>Signature Vault Box & Certification</span>
                    <span className="text-[var(--color-champagne)] font-sans text-xs">
                      {openAccordion === 1 ? "−" : "+"}
                    </span>
                  </button>
                  {openAccordion === 1 && (
                    <p className="font-sans text-xs text-stone-600 font-light leading-relaxed mt-2.5">
                      Delivered in our signature embossed deep emerald velvet presentation vault box, accompanied by a stamped Certificate of Authenticity and comprehensive valuation documentation.
                    </p>
                  )}
                </div>

                {/* Accordion Item 3 */}
                <div className="py-3">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(2)}
                    className="w-full flex items-center justify-between text-left font-serif text-sm sm:text-base text-[var(--color-charcoal)] font-medium hover:text-[var(--color-emerald)] transition-colors"
                  >
                    <span>Atelier Care & Preservation</span>
                    <span className="text-[var(--color-champagne)] font-sans text-xs">
                      {openAccordion === 2 ? "−" : "+"}
                    </span>
                  </button>
                  {openAccordion === 2 && (
                    <p className="font-sans text-xs text-stone-600 font-light leading-relaxed mt-2.5">
                      We recommend storing your piece in its velvet pouch to prevent surface contact. Clean gently with warm water and a soft-bristle brush. Complimentary annual inspections are available at our ateliers.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Pieces Showcase */}
        {related.length > 0 && (
          <div className="mt-16 sm:mt-24 pt-10 sm:pt-14 border-t border-[rgba(193,145,94,0.25)]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-[var(--color-champagne)] font-semibold mb-1">
                  COMPLEMENTARY CREATIONS
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl text-[var(--color-charcoal)] font-normal">
                  More From {product.category}
                </h2>
              </div>
              <Link
                href={`/shop?category=${encodeURIComponent(product.category)}`}
                prefetch={false}
                className="inline-flex items-center gap-1.5 font-sans text-xs tracking-wider uppercase text-[var(--color-champagne)] hover:text-[var(--color-emerald)] transition-colors pb-1 border-b border-[var(--color-champagne)] w-fit"
              >
                <span>View All {product.category}</span>
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

      {/* Fullscreen High-Resolution Lightbox Modal */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(7,22,18,0.95)] backdrop-blur-md p-4 sm:p-8 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label={`${product.name} zoom inspection`}
          onClick={() => setIsZoomOpen(false)}
        >
          {/* Top Bar inside modal */}
          <div className="absolute top-5 left-6 right-6 flex items-center justify-between text-white z-20">
            <div>
              <p className="font-serif text-lg sm:text-xl text-[var(--color-champagne)] font-medium">
                {product.name}
              </p>
              <p className="font-sans text-xs text-stone-400">
                Ref: {product.id} • {product.category}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsZoomOpen(false)}
              className="w-10 h-10 rounded-full border border-[rgba(193,145,94,0.4)] flex items-center justify-center text-[var(--color-champagne)] hover:bg-[rgba(193,145,94,0.15)] transition-colors text-lg"
              aria-label="Close magnification modal"
            >
              ✕
            </button>
          </div>

          {/* Fullscreen Magnified Photo */}
          <div
            className="relative w-full max-w-3xl aspect-square max-h-[82vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={getFittedImage(activeImage)}
              alt={product.name}
              fill
              quality={100}
              className="object-contain drop-shadow-2xl"
            />
          </div>

          <p className="absolute bottom-5 text-center text-xs font-sans text-stone-400 tracking-wider uppercase pointer-events-none">
            Click anywhere or press Esc to return
          </p>
        </div>
      )}
    </div>
  );
}
