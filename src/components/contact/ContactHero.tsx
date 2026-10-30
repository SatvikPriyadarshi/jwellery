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
            <span className="contact-hero__eyebrow">ATELIER CONCIERGE</span>
          </div>

          <h1 className="contact-hero__title">
            Private Inquiries <br />
            &amp; Consultations
          </h1>

          <p className="contact-hero__lede">
            Connect directly with our atelier team for bespoke commissions,
            collection acquisitions, and private showroom viewings in Jaipur.
          </p>

          {/* Quick Concierge Direct Touchpoints */}
          <div className="contact-hero__quick-actions">
            <a
              href="https://wa.me/917568042023?text=Hello%20Uni%20Fine%20Jewelry%20Concierge%2C%20I%20would%20like%20to%20inquire%20about%20your%20fine%20jewelry%20collections."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-hero__quick-btn contact-hero__quick-btn--wa"
              aria-label="Direct WhatsApp Concierge at +91 75680 42023"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp Concierge</span>
            </a>
            <a
              href="tel:+917568042023"
              className="contact-hero__quick-btn"
              aria-label="Call Uni Fine Jewelry Atelier at +91 75680 42023"
            >
              <span>+91 75680 42023</span>
            </a>
            <a
              href="#contact-form"
              className="contact-hero__quick-btn contact-hero__quick-btn--gold"
            >
              <span>Consultation Form</span>
            </a>
          </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
