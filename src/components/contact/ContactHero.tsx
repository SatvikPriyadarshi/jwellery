"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function ContactHero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduce) return;

      const eyebrow = container.querySelector(".contact-eyebrow-wrap");
      const title = container.querySelector(".contact-hero__title");
      const lede = container.querySelector(".contact-hero__lede");
      const divider = container.querySelector(".contact-hero__divider");
      const visual = container.querySelector(".contact-hero__visual");

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        eyebrow,
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.8, delay: 0.15 }
      )
        .fromTo(
          title,
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.95 },
          "-=0.55"
        )
        .fromTo(
          lede,
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          divider,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.65 },
          "-=0.4"
        )
        .fromTo(
          visual,
          { autoAlpha: 0, y: 30, scale: 0.98 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 1.1, ease: "power3.out" },
          "-=0.8"
        );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="contact-hero" aria-label="Contact Introduction">
      <div className="contact-hero__inner">
        {/* Left Column: Refined Typography & Introduction */}
        <div className="contact-hero__copy">
          <div className="contact-eyebrow-wrap">
            <span className="contact-eyebrow">WE&apos;RE HERE FOR YOU</span>
            <span className="contact-eyebrow-line" aria-hidden="true" />
          </div>

          <h1 className="contact-hero__title">
            Every Detail <br />
            <span className="contact-hero__title-accent">Begins With You.</span>
          </h1>

          <p className="contact-hero__lede">
            From discovering your next treasured piece to creating something
            uniquely yours, we&apos;re here to make every conversation personal.
          </p>

          <div className="contact-hero__divider" aria-hidden="true" />
        </div>

        {/* Right Column: High-Quality Jewellery Campaign Photograph */}
        <div className="contact-hero__visual">
          <div className="contact-hero__image-frame">
            <Image
              src="/images/jewellery/lookbook-portrait.jpg"
              alt="Editorial jewellery campaign featuring handcrafted gemstones and diamond fine jewelry"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
              className="contact-hero__img"
            />
          </div>

          <div className="contact-hero__badge" aria-hidden="true">
            <span className="contact-hero__badge-label">Personal Concierge</span>
            <span className="contact-hero__badge-sub">Jaipur &amp; Worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
