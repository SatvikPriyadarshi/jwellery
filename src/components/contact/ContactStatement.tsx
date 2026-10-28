"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ContactStatement() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduce) return;

      const crest = el.querySelector(".contact-statement__crest");
      const title = el.querySelector(".contact-statement__title");
      const divider = el.querySelector(".contact-statement__divider");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });

      tl.fromTo(
        crest,
        { autoAlpha: 0, scale: 0.9, y: 15 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.7, ease: "power2.out" }
      )
        .fromTo(
          title,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          divider,
          { scaleX: 0, transformOrigin: "center" },
          { scaleX: 1, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="contact-statement"
      aria-label="Closing Brand Devotion"
    >
      <div className="contact-statement__inner">
        <div className="contact-statement__crest" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor">
            <path
              d="M24 8c1.4 4 3 5.6 6 7-3 .8-4.6 2.8-6 6-1.4-3.2-3-5.2-6-6 3-1.4 4.6-3 6-7z"
              strokeWidth="1.2"
            />
            <path d="M24 23v14" strokeWidth="1.2" />
          </svg>
        </div>

        <h2 className="contact-statement__title">
          Timeless Beauty, Thoughtfully Crafted.
        </h2>

        <div className="contact-statement__divider" aria-hidden="true" />
      </div>
    </section>
  );
}
