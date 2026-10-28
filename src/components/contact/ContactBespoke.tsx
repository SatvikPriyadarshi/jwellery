"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ContactBespokeProps {
  onBespokeClick?: () => void;
}

export default function ContactBespoke({ onBespokeClick }: ContactBespokeProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduce) return;

      const copy = section.querySelector(".contact-bespoke__copy");
      const visual = section.querySelector(".contact-bespoke__visual");

      if (copy && visual) {
        gsap.fromTo(
          copy,
          { autoAlpha: 0, y: 35 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          visual,
          { autoAlpha: 0, y: 40, scale: 0.98 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const handleCtaClick = () => {
    if (onBespokeClick) {
      onBespokeClick();
    } else {
      const formEl = document.getElementById("contact-form");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="contact-bespoke"
      aria-label="Bespoke Jewellery Consultation"
    >
      <div className="contact-bespoke__inner">
        {/* Left Column: Editorial Copy */}
        <div className="contact-bespoke__copy">
          <div className="contact-eyebrow-wrap">
            <span className="contact-eyebrow">MADE PERSONAL, MADE FOR YOU</span>
            <span className="contact-eyebrow-line" aria-hidden="true" />
          </div>

          <h2 className="contact-bespoke__title">
            Some Stories Deserve <br />
            Something One of a Kind.
          </h2>

          <p className="contact-bespoke__desc">
            Whether you&apos;re imagining a custom design or searching for a
            meaningful piece, let us help bring your vision to life. From
            initial stone selection to the final master hand-setting, our
            ateliers in Jaipur work directly with you.
          </p>

          <button
            type="button"
            onClick={handleCtaClick}
            className="contact-bespoke__cta"
          >
            <span>ENQUIRE ABOUT BESPOKE DESIGN</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Right Column: Craftsmanship Photography */}
        <div className="contact-bespoke__visual">
          <div className="contact-bespoke__image-frame">
            <Image
              src="/images/jewellery/about-2018-atelier.jpg"
              alt="Master goldsmith and lapidary artisan sculpting a custom fine jewelry mounting at the Jaipur workbench"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 550px"
              className="contact-bespoke__img"
            />
          </div>
          <div className="contact-bespoke__caption">
            <span className="contact-bespoke__caption-dot" aria-hidden="true" />
            <span>Jaipur Atelier • Custom Goldsmithing &amp; Precision Lapidary</span>
          </div>
        </div>
      </div>
    </section>
  );
}
