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
          { autoAlpha: 0, y: 30 },
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
          { autoAlpha: 0, y: 35, scale: 0.99 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1,
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
          <div className="contact-hero__eyebrow-wrap">
            <span className="contact-hero__eyebrow">MADE PERSONAL, MADE FOR YOU</span>
            <span className="contact-hero__eyebrow-line" aria-hidden="true" />
          </div>

          <h2 className="contact-bespoke__title">
            Some Stories Deserve <br />
            Something One of a Kind.
          </h2>

          <p className="contact-bespoke__desc">
            Whether you&apos;re imagining a custom design or searching for a
            meaningful piece, let us help bring your vision to life.
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

        {/* Right Column: Craftsman Precision Gemstone Setting */}
        <div className="contact-bespoke__visual">
          <div className="contact-bespoke__image-frame">
            <Image
              src="/images/contact/craftsman-setting.jpg"
              alt="Master craftsman setting an ethically sourced Zambian emerald into a handcrafted bespoke gold mounting"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 550px"
              className="contact-bespoke__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
