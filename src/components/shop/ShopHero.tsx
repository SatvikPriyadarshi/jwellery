import Image from "next/image";

export default function ShopHero() {
  return (
    <section className="shop-hero" aria-label="Welcome to Uni Fine Jewelry">
      {/* Subtle Caustic Lighting Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(198,161,91,0.12)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(18,60,50,0.4)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      {/* Screen-reader heading for semantic outline & SEO */}
      <h1 className="sr-only">
        The Fine Jewellery Collection — Enjoy 5% OFF Your First Order | Uni Fine Jewelry
      </h1>

      <div className="shop-banner-container">
        <a
          href="#products-grid"
          className="shop-banner-link"
          aria-label="Uni Fine Jewelry Welcome Offer: Enjoy 5% OFF Your First Order with code WELCOME5. Shop the collection now."
        >
          <div className="shop-banner-frame">
            <Image
              src="/images/jewellery/shopBanner.png"
              alt="Uni Fine Jewelry — Enjoy 5% OFF Your First Order. Use code WELCOME5 at checkout. Shop Now."
              width={2171}
              height={724}
              priority
              quality={95}
              sizes="(max-width: 768px) 100vw, (max-width: 1440px) 96vw, 1400px"
              className="shop-banner-img"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
