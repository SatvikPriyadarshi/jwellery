"use client";

import Image from "next/image";
import Link from "next/link";
import { type Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  priority?: boolean;
}

export default function ProductCard({
  product,
  onQuickView,
  priority = false,
}: ProductCardProps) {
  // Format stone sub-title gracefully (e.g. "Emerald", "Diamond", "Ruby")
  const stoneName = product.visualAttributes.visibleStone
    ? product.visualAttributes.visibleStone.replace(/\bgemstone\b/i, "").trim()
    : "";

  // Use fitted high-res image asset with extra whitespace cropped
  const imageSrc = product.image.startsWith("/images/shop/")
    ? product.image.replace("/images/shop/", "/images/shop-fitted/")
    : product.image;

  return (
    <article className="prod-card" data-product-id={product.id}>
      {/* Vitrine Photograph Window */}
      <div className="prod-card__figure">
        <Link
          href={`/shop/${product.slug}`}
          prefetch={false}
          className="prod-card__img-link"
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            src={imageSrc}
            alt={`${product.name} — ${product.category}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            quality={90}
            priority={priority}
            className="prod-card__img"
          />
        </Link>

        {/* Floating Quick View (Desktop Hover) */}
        <button
          type="button"
          onClick={() => onQuickView(product)}
          className="prod-card__quick-btn"
          aria-label={`Quick view ${product.name}`}
        >
          Quick View
        </button>
      </div>

      {/* Editorial Information Block */}
      <div className="prod-card__body">
        <div className="prod-card__meta">
          <p className="prod-card__category">
            {product.category}
            {stoneName && (
              <>
                <span className="prod-card__meta-sep" aria-hidden="true">
                  &bull;
                </span>
                <span>{stoneName}</span>
              </>
            )}
          </p>

          <h3 className="prod-card__title">
            <Link href={`/shop/${product.slug}`} prefetch={false}>
              {product.name}
            </Link>
          </h3>
        </div>

        <div className="prod-card__footer">
          <span className="prod-card__price-label">{product.priceLabel}</span>
          <Link
            href={`/shop/${product.slug}`}
            prefetch={false}
            className="prod-card__view-link"
            aria-label={`View ${product.name}`}
          >
            <span>Explore</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
