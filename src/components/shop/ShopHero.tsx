import Link from "next/link";

export default function ShopHero() {
  return (
    <section className="shop-hero">
      {/* Subtle Caustic Lighting Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(198,161,91,0.12)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(18,60,50,0.4)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="shop-container">
        <div className="shop-hero__inner">
          <div className="shop-hero__eyebrow-wrap">
            <p className="shop-hero__eyebrow">The Atelier Collection</p>
          </div>

          <h1 className="shop-hero__title">
            Jewellery to Treasure. <br />
            <span className="shop-hero__title-accent">For Generations.</span>
          </h1>

          <p className="shop-hero__desc">
            Discover thoughtfully crafted fine jewellery defined by timeless design,
            exquisite gemstone mastery, and enduring elegance.
          </p>

          <div className="shop-hero__cta-wrap">
            <Link
              href="/about#pillars-of-mastery"
              prefetch={false}
              className="shop-hero__link"
            >
              <span>Discover Our Craftsmanship</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
