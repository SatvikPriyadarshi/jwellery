"use client";

import Image from "next/image";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" aria-label="Jewellery hero">
      <div className="hero__media">
        <Image
          src="/images/jewellery-hero.jpg"
          alt="Bespoke designs for unique moments"
          fill
          priority
          sizes="100vw"
          className="hero__img"
          quality={95}
        />
      </div>

      <div className="hero__content">
        <h1 className="sr-only">Bespoke designs for unique moments</h1>
      </div>
    </section>
  );
}
