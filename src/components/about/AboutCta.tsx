"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutCta() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      const content = root.querySelector(".cta-inner");

      gsap.fromTo(
        content,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content,
            start: "top 82%",
            once: true,
          },
        }
      );
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      className="relative bg-[var(--color-ivory)] py-20 sm:py-28 text-[var(--color-charcoal)] border-t border-[var(--color-champagne)]/25"
    >
      <div className="cta-inner relative mx-auto max-w-5xl px-6 text-center">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-[var(--color-champagne)] font-medium">
          Begin Your Chapter
        </p>

        <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[var(--color-dark-forest)] leading-tight">
          A Legacy of Brilliance, <br />
          <span className="italic font-normal text-[var(--color-champagne)]">
            Crafted to be Cherished.
          </span>
        </h2>

        <p className="mt-6 font-sans text-base sm:text-lg text-[#3d4740] font-light max-w-2xl mx-auto leading-relaxed">
          Whether selecting a signature emerald, marking a life milestone with
          brilliant diamonds, or commissioning a bespoke one-of-a-kind heirloom,
          our family welcomes you to experience the artistry firsthand.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/#collection"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[var(--color-emerald)] text-[var(--color-ivory)] px-9 py-4 font-sans text-xs tracking-[0.24em] uppercase transition-all duration-300 hover:bg-[#0b211c] hover:shadow-xl hover:shadow-[#102a31]/20"
          >
            <span>Explore The Collection</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-[var(--color-champagne)] text-[var(--color-dark-forest)] px-9 py-4 font-sans text-xs tracking-[0.24em] uppercase transition-all duration-300 hover:bg-[var(--color-champagne)] hover:text-[#0b211c]"
          >
            <span>Book Private Appointment</span>
            <span aria-hidden="true">&darr;</span>
          </a>
        </div>

        <p className="mt-8 font-sans text-xs tracking-wider uppercase text-[#738078]">
          Jaipur Atelier &bull; Kuala Lumpur Salon &bull; Worldwide Delivery
        </p>
      </div>
    </section>
  );
}
