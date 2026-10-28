"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { type Product } from "@/data/products";

interface ProductQuickViewProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductQuickView({
  product,
  onClose,
}: ProductQuickViewProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const [activeImage, setActiveImage] = useState<string>("");

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      // Lock background scroll
      document.body.style.overflow = "hidden";
      // Focus close button on open
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);

      // Handle Escape key
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [product, onClose]);

  if (!product) return null;

  const allImages = [product.image, ...(product.gallery || [])];

  const inquirySubject = encodeURIComponent(
    `Atelier Inquiry: ${product.name} (Ref: ${product.id})`
  );
  const inquiryBody = encodeURIComponent(
    `Hello Uni Fine Jewelry Concierge,\n\nI am interested in acquiring or requesting details about:\nPiece: ${product.name}\nReference: ${product.id}\nCategory: ${product.category}\n\nPlease share availability, pricing, and bespoke viewing options.\n\nThank you.`
  );
  const mailtoUrl = `mailto:concierge@unifinejewelry.com?subject=${inquirySubject}&body=${inquiryBody}`;
  const whatsappUrl = `https://wa.me/917568042023?text=${encodeURIComponent(
    `Hello Uni Fine Jewelry Concierge,\n\nI am inquiring about:\n*Piece:* ${product.name}\n*Reference:* ${product.id}\n*Category:* ${product.category}\n*Link:* https://jwellery-lilac.vercel.app/shop/${product.slug}\n\nPlease share availability, pricing, and bespoke viewing options.\n\nThank you.`
  )}`;

  const getFittedImage = (img: string) =>
    img && img.startsWith("/images/shop/")
      ? img.replace("/images/shop/", "/images/shop-fitted/")
      : img;

  return (
    <div
      className="qv-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="qv-product-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div ref={modalRef} className="qv-modal">
        {/* Close Button */}
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          className="qv-close-btn"
          aria-label="Close quick view"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Left Column: Gallery Imagery */}
        <div className="qv-gallery">
          <div className="qv-main-image-wrap">
            <Image
              src={getFittedImage(activeImage || product.image)}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 90vw, 400px"
              quality={90}
              className="qv-main-img"
            />
          </div>

          {allImages.length > 1 && (
            <div className="qv-thumbs" role="tablist" aria-label="Alternate views">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImage(img)}
                  className={`qv-thumb-btn ${activeImage === img ? "is-active" : ""}`}
                  aria-label={`View angle ${i + 1}`}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Editorial Specifications & Action */}
        <div className="qv-details">
          <div>
            <p className="qv-category">{product.category}</p>
            <h2 id="qv-product-title" className="qv-title">
              {product.name}
            </h2>

            <span className="qv-price-badge">{product.priceLabel}</span>

            <p className="qv-desc">{product.shortDescription}</p>

            <table className="qv-specs-table" aria-label="Product attributes">
              <tbody>
                <tr>
                  <th scope="row">Category</th>
                  <td>{product.category}</td>
                </tr>
                <tr>
                  <th scope="row">Visible Gemstone</th>
                  <td>{product.visualAttributes.visibleStone}</td>
                </tr>
                <tr>
                  <th scope="row">Apparent Metal</th>
                  <td>{product.visualAttributes.apparentMetalColor}</td>
                </tr>
                <tr>
                  <th scope="row">Setting Design</th>
                  <td>{product.visualAttributes.design}</td>
                </tr>
                <tr>
                  <th scope="row">Reference</th>
                  <td>{product.id}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="qv-actions">
            <a
              href={mailtoUrl}
              className="qv-inquire-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Inquire With Atelier</span>
              <span aria-hidden="true">&rarr;</span>
            </a>

            <div className="flex gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="qv-pdp-link text-center flex-1"
              >
                <span>WhatsApp Concierge</span>
              </a>

              <Link
                href={`/shop/${product.slug}`}
                prefetch={false}
                onClick={onClose}
                className="qv-pdp-link text-center flex-1"
              >
                <span>Full Details</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
