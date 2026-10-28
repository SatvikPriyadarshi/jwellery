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

      const eyebrow = container.querySelector(".contact-hero__eyebrow-wrap");
      const title = container.querySelector(".contact-hero__title");
      const lede = container.querySelector(".contact-hero__lede");
      const visual = container.querySelector(".contact-hero__visual-wrap");

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        eyebrow,
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.8, delay: 0.15 }
      )
        .fromTo(
          title,
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 0.95 },
          "-=0.55"
        )
        .fromTo(
          lede,
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          visual,
          { autoAlpha: 0, y: 26, scale: 0.99 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 1.1, ease: "power3.out" },
          "-=0.75"
        );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="contact-hero" aria-label="Contact Introduction">
      <div className="contact-hero__inner">
        {/* Left Column: Refined Typography & Introduction */}
        <div className="contact-hero__copy">
          <div className="contact-hero__eyebrow-wrap">
            <span className="contact-hero__eyebrow">WE&apos;RE HERE FOR YOU</span>
            <span className="contact-hero__eyebrow-line" aria-hidden="true" />
          </div>

          <h1 className="contact-hero__title">
            Every Detail <br />
            Begins With <span className="contact-hero__title-italic">You.</span>
          </h1>

          <p className="contact-hero__lede">
            From discovering your next treasured piece to creating something
            uniquely yours, we&apos;re here to make every conversation personal.
          </p>
        </div>

        {/* Right Column: Model Photograph & Consultation Badge */}
        <div className="contact-hero__visual-wrap">
          <div className="contact-hero__image-frame">
            <Image
              src="/images/contact/hero-model.jpg"
              alt="Uni Fine Jewelry high jewellery campaign model adorned with bespoke Zambian emerald drop earrings and statement necklace"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 540px"
              className="contact-hero__img"
            />
          </div>

          {/* Custom Jewellery Consultation floating badge */}
          <div className="contact-hero__consult-badge" aria-hidden="true">
            <span className="contact-hero__consult-text">
              CUSTOM<br />JEWELLERY<br />CONSULTATION
            </span>
            <div className="contact-hero__consult-divider">
              <span className="contact-hero__consult-line" />
              <span className="contact-hero__consult-diamond">◇</span>
              <span className="contact-hero__consult-line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
