"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AcidSquares from "@/components/effects/AcidSquares";
import MeshLettering from "@/components/ui/mesh-lettering";
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
          src="/images/jewellery-hero.jpg"
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
              imageSrc="/images/jewellery-hero.jpg"
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
          <h1 className="sr-only">Bespoke designs for unique moments</h1>
          <div className="hero__mesh-wrap">
            <MeshLettering
              text={"Bespoke designs\nfor unique moments"}
              fontFamily="var(--font-cormorant), Cormorant Garamond, Georgia, serif"
              fontWeight={600}
              fontSize={360}
              lineHeight={0.9}
              letterSpacing={0}
              colors={["#F7F3EA", "#F6E2B8"]}
              sheen={1.2}
              gloss={0.6}
              iridescence={0.35}
              wind={0.8}
              windAngle={-15}
              turbulence={0.4}
              softness={0.55}
              interactive={true}
              clickGust={true}
              intro={true}
              introDuration={1.8}
              className="hero__mesh-lettering"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
