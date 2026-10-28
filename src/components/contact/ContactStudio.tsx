"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ContactStudio() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduce) return;

      const copy = section.querySelector(".contact-studio__copy");
      const visual = section.querySelector(".contact-studio__visual");

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

  return (
    <section
      ref={sectionRef}
      className="contact-studio"
      aria-label="Visit Our Studio in Jaipur"
    >
      <div className="contact-studio__inner">
        {/* Left Column: Office Details & Directions */}
        <div className="contact-studio__copy">
          <div className="contact-eyebrow-wrap">
            <span className="contact-eyebrow">ATELIER PRESENCE</span>
            <span className="contact-eyebrow-line" aria-hidden="true" />
          </div>

          <h2 className="contact-studio__title">VISIT US IN JAIPUR</h2>

          <p className="contact-studio__desc">
            While our collections travel worldwide, our roots remain anchored
            in the historic gemstone capital of Jaipur. We welcome patrons and
            collectors to our administrative office by appointment for private
            consultations, bespoke stone selection, and archive previews.
          </p>

          <div className="contact-studio__address-card">
            <p className="contact-studio__address-label">OFFICE ADDRESS</p>
            <address className="contact-studio__address-text">
              N K Towers, Purohit Ji Ka Bagh, <br />
              Mirza Ismail Rd, Jaipur, <br />
              Rajasthan 302001, India
            </address>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=N+K+Towers+Purohit+Ji+Ka+Bagh+Mirza+Ismail+Rd+Jaipur+Rajasthan+302001"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-studio__directions-link"
          >
            <span>GET DIRECTIONS</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Right Column: Studio / Salon Photograph */}
        <div className="contact-studio__visual">
          <div className="contact-studio__image-frame">
            <Image
              src="/images/jewellery/about-today-jewelry.jpg"
              alt="Uni Fine Jewelry salon vitrine and private consultation setting in Jaipur"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 550px"
              className="contact-studio__img"
            />
          </div>
          <div className="contact-studio__caption">
            <span className="contact-bespoke__caption-dot" aria-hidden="true" />
            <span>Private appointments available Monday — Saturday by prior arrangement</span>
          </div>
        </div>
      </div>
    </section>
  );
}
