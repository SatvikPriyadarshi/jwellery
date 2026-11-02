"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AcidSquares from "@/components/effects/AcidSquares";
import MeshLettering from "@/components/ui/mesh-lettering";
// import { LogoMarquee, Logo } from "@/components/ui/logo-marquee";
import "./Hero.css";

/* Preserved for future use: Trusted Partners Logos
const TRUSTED_PARTNERS: Logo[] = [
  { src: "/images/partners/gia.svg", alt: "GIA Gemological Institute of America" },
  { src: "/images/partners/igi.svg", alt: "IGI International Gemological Institute" },
  { src: "/images/partners/gubelin.svg", alt: "Gübelin Swiss Gemmological Laboratory" },
  { src: "/images/partners/ssef.svg", alt: "SSEF Swiss Gemmological Institute" },
  { src: "/images/partners/debeers.svg", alt: "De Beers Group Institute of Diamonds" },
  { src: "/images/partners/rjc.svg", alt: "Responsible Jewellery Council Member" },
  { src: "/images/partners/kimberley.svg", alt: "Kimberley Process Ethical Sourcing" },
  { src: "/images/partners/gjepc.svg", alt: "GJEPC India Lapidary Guild" },
];
*/

export default function Hero() {
  const [enableEffect, setEnableEffect] = useState(false);

  useEffect(() => {
    setEnableEffect(true);
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
          quality={95}
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
          <h1 className="sr-only">
            Uni Fine Jewelry — Bespoke High Jewellery &amp; Ethical Gemstones Since 1965
          </h1>
          <div className="hero__mesh-wrap">
            <MeshLettering
              text={"Bespoke designs\nfor unique moments"}
              fontFamily="var(--font-cormorant), Cormorant Garamond, Georgia, serif"
              fontWeight={600}
              fontSize={360}
              lineHeight={0.9}
              letterSpacing={0}
              colors={["#c1915e", "#c1915e"]}
              sheen={0.9}
              gloss={0.5}
              iridescence={0}
              wind={0.8}
              windAngle={-15}
              turbulence={0.4}
              softness={0.55}
              interactive={true}
              clickGust={true}
              intro={true}
              introDuration={1.8}
              className="hero__mesh-lettering"
            >
              <span className="hero__copyable-title">
                Bespoke designs for unique moments
              </span>
            </MeshLettering>
          </div>
        </div>
      </div>

      {/* Trusted Partners Marquee at bottom of Hero Banner (Preserved for future use) */}
      {/*
      <div className="hero__partners">
        <div className="hero__partners-header">
          <span className="hero__partners-badge">OFFICIAL ACCREDITATIONS</span>
          <span className="hero__partners-dot" aria-hidden="true">·</span>
          <p className="hero__partners-title">
            WORLD-BENCHMARK GEMOLOGICAL LABS &amp; ETHICAL SOURCING
          </p>
        </div>
        <LogoMarquee logos={TRUSTED_PARTNERS} className="hero__partners-marquee" />
      </div>
      */}
    </section>
  );
}
