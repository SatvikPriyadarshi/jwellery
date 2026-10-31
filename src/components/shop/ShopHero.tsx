"use client";

import Image from "next/image";

export default function ShopHero() {
  const handleScrollToGrid = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("products-grid");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="shop-hero" aria-label="The Atelier Collection">
      {/* Subtle Caustic Lighting Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(193,145,94,0.12)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(24,67,67,0.45)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="shop-hero-container">
        <div className="shop-banner-card">
          <div className="shop-banner-layout">
            {/* 1. LEFT COLUMN: Brand Identity, Editorial Headline & Description */}
            <div className="shop-banner-col shop-banner-col--left">
              <div className="shop-banner-brand-badge">
                <span className="shop-banner-brand-name">UNI FINE JEWELRY</span>
              </div>

              <div className="shop-banner-eyebrow-wrap">
                <p className="shop-banner-eyebrow">THE ATELIER COLLECTION</p>
              </div>

              <h1 className="shop-banner-title">
                Jewellery to Treasure. <br />
                <span className="shop-banner-title-italic">For Generations.</span>
              </h1>

              <p className="shop-banner-desc">
                Discover thoughtfully crafted fine jewellery defined by timeless design,
                rare untreated Zambian emeralds, and generations of Jaipur lapidary artistry.
              </p>

              <div className="shop-banner-features">
                <span className="shop-banner-feature-item">
                  <span className="shop-banner-diamond-dot" aria-hidden="true" />
                  18K Solid Gold
                </span>
                <span className="shop-banner-feature-divider" aria-hidden="true">·</span>
                <span className="shop-banner-feature-item">
                  <span className="shop-banner-diamond-dot" aria-hidden="true" />
                  Ethical Zambian Emeralds
                </span>
                <span className="shop-banner-feature-divider" aria-hidden="true">·</span>
                <span className="shop-banner-feature-item">
                  <span className="shop-banner-diamond-dot" aria-hidden="true" />
                  Jaipur Master Goldsmiths
                </span>
              </div>
            </div>

            {/* 2. CENTER COLUMN: Hero Fine Jewellery Visual (Pendant Showcase) */}
            <div className="shop-banner-col shop-banner-col--center">
              <div className="shop-banner-pendant-frame">
                <Image
                  src="/images/jewellery/shop-banner-pendant.jpg"
                  alt="Uni Fine Jewelry handcrafted pear-cut Zambian emerald and halo diamond heirloom pendant"
                  width={580}
                  height={724}
                  priority
                  quality={95}
                  sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 310px"
                  className="shop-banner-pendant-img"
                />
              </div>
            </div>

            {/* 3. RIGHT COLUMN: Atelier Hallmark Card & Shop Now CTA */}
            <div className="shop-banner-col shop-banner-col--right">
              {/* Double-Bordered Atelier Box (Designed after the reference frame) */}
              <div className="shop-banner-atelier-card">
                <div className="shop-banner-atelier-card__inner">
                  <p className="shop-banner-atelier-eyebrow">EST. 1965</p>
                  <p className="shop-banner-atelier-title">JAIPUR ATELIER</p>
                  <span className="shop-banner-atelier-line" aria-hidden="true" />
                  <p className="shop-banner-atelier-sub">BESPOKE HIGH JEWELLERY</p>
                  <p className="shop-banner-atelier-tag">CERTIFIED NATURAL GEMS</p>
                </div>
              </div>

              {/* The Styled Pill CTA Button */}
              <div className="shop-banner-cta-wrap">
                <a
                  href="#products-grid"
                  onClick={handleScrollToGrid}
                  className="shop-banner-btn"
                  aria-label="Shop the complete fine jewellery collection"
                >
                  <span>SHOP NOW</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
