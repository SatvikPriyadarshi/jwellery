"use client";

import Image from "next/image";
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

      const title = el.querySelector(".contact-statement__title");
      const ornament = el.querySelector(".contact-statement__ornament");
      const floralLeft = el.querySelector(".contact-statement__floral-bl");
      const floralRight = el.querySelector(".contact-statement__floral-br");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });

      tl.fromTo(
        title,
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.9, ease: "power2.out" }
      )
        .fromTo(
          ornament,
          { autoAlpha: 0, scale: 0.95 },
          { autoAlpha: 1, scale: 1, duration: 0.7, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          [floralLeft, floralRight],
          { autoAlpha: 0 },
          { autoAlpha: 0.7, duration: 1.1, ease: "power2.out" },
          "-=0.6"
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
      {/* Botanical Floral Corner Watermarks */}
      <div className="contact-statement__floral-bl" aria-hidden="true">
        <Image
          src="/images/contact/floral-bottom-left.png"
          alt=""
          width={220}
          height={200}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="contact-statement__floral-br" aria-hidden="true">
        <Image
          src="/images/contact/floral-bottom-right.png"
          alt=""
          width={220}
          height={200}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="contact-statement__inner">
        <h2 className="contact-statement__title">
          Timeless Beauty, Thoughtfully Crafted.
        </h2>

        <div className="contact-statement__ornament" aria-hidden="true">
          <span className="contact-statement__ornament-line" />
          <span className="contact-statement__ornament-diamond">◆</span>
          <span className="contact-statement__ornament-line" />
        </div>
      </div>
    </section>
  );
}
