"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AcidSquares from "@/components/effects/AcidSquares";
import "./Hero.css";

export default function Hero() {
  const [enableEffect, setEnableEffect] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const sync = () => setEnableEffect(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <section className="hero" aria-label="Jewellery hero">
      <div className="hero__media">
        <Image
          src="/images/jewellery-hero.png"
          alt="Model wearing an emerald and diamond collar necklace, matching drop earrings, and a triangular emerald ring"
          fill
          priority
          sizes="100vw"
          className="hero__img"
          quality={90}
        />

        {enableEffect ? (
          <div className="pointer-events-none absolute inset-0">
            <AcidSquares
              imageSrc="/images/jewellery-hero.png"
              waves={0}
              pulse={0}
              grain={0}
              fade={0}
              intro={false}
              mouseInteraction
              hoverEffect="none"
              pulseOnClick={false}
              detail="low"
            />
          </div>
        ) : null}
      </div>

      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__copy">
          <h1 className="hero__title">
            Bespoke designs
            <br />
            for unique moments
          </h1>
          <Link href="/#collection" className="hero__cta">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
