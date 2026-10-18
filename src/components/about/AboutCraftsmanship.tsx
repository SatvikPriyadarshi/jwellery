"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CRAFT_STEPS = [
  {
    step: "01",
    title: "Ethical Gem Sourcing",
    subtitle: "From Earth to Atelier",
    image: "/images/jewellery/footer-stones.jpg",
    alt: "Rare cut and rough gemstones carefully sorted on a jeweler tray",
    description:
      "Direct relationships with certified mines worldwide, hand-selecting only rough diamonds and coloured gemstones with exceptional crystalline fire and pure saturation.",
  },
  {
    step: "02",
    title: "Lapidary Precision",
    subtitle: "Zambian Emerald Mastery",
    image: "/images/jewellery/about-emerald-detail.jpg",
    alt: "Macro emerald facet detail revealing brilliant geometric symmetry",
    description:
      "Decades of gemstone cutting expertise. Our lapidary artisans cut and polish each rough emerald to maximize optical refraction and showcase its velvety inner green hue.",
  },
  {
    step: "03",
    title: "Haute Goldsmithing",
    subtitle: "Solid 18K Gold Metallurgy",
    image: "/images/jewellery/loyalty-atelier.jpg",
    alt: "Goldsmith hand-working fine jewelry with jeweler torch and pliers",
    description:
      "Each setting is individually hand-fabricated in rich 18K yellow, white, or rose gold. Prongs, bezels, and galleries are calibrated to the micron to protect each stone for decades.",
  },
  {
    step: "04",
    title: "The Cherished Heirloom",
    subtitle: "Crafted for Generations",
    image: "/images/jewellery/footer-box.jpg",
    alt: "Fine emerald necklace presented in an elegant velvet jewelry box",
    description:
      "Every finished piece undergoes rigorous quality appraisal and gemological certification, prepared to be presented, treasured, and passed down as an enduring family heirloom.",
  },
];

export default function AboutCraftsmanship() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      const header = root.querySelector(".craft-header");
      const cards = root.querySelectorAll(".craft-card");
      const quote = root.querySelector(".craft-quote");

      gsap.fromTo(
        header,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 35 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 80%",
            once: true,
          },
        }
      );

      if (quote) {
        gsap.fromTo(
          quote,
          { autoAlpha: 0, y: 25 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: quote,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      className="relative bg-[#0c241c] py-28 sm:py-36 text-[var(--color-ivory)] overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-14">
        {/* Section Header with NO artificial lines */}
        <div className="craft-header grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-[var(--color-champagne)] font-medium">
              Atelier Artistry
            </p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[var(--color-ivory)] leading-[1.12]">
              Crafted Through Generations: <br />
              <span className="italic font-normal text-[var(--color-champagne)]">
                The Four Pillars of Mastery
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="font-sans text-sm text-[var(--color-ivory)]/80 font-light leading-relaxed">
              Our heritage is our foundation, our expertise is our strength, and
              our commitment to excellence guides everything we do. Every stage of
              our evolution has been shaped by a deep respect for the materials we
              work with and the people who place their trust in us.
            </p>
          </div>
        </div>

        {/* 4 Pillars Card Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CRAFT_STEPS.map((craft) => (
            <div
              key={craft.step}
              className="craft-card group relative bg-[#081814]/80 border border-[rgba(198,161,91,0.25)] p-6 transition-all duration-500 hover:border-[var(--color-champagne)] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#102a31]/50 flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Subtitle */}
                <div className="flex items-center justify-between border-b border-[rgba(198,161,91,0.2)] pb-3 mb-4">
                  <span className="font-serif text-2xl text-[var(--color-champagne)] font-light">
                    {craft.step}
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-[var(--color-ivory)]/60 font-sans">
                    {craft.subtitle}
                  </span>
                </div>

                {/* Photo window */}
                <div className="relative aspect-square w-full overflow-hidden border border-[rgba(198,161,91,0.2)] bg-[#040c09] mb-4">
                  <Image
                    src={craft.image}
                    alt={craft.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081814]/70 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Title & Copy */}
                <h3 className="font-serif text-lg sm:text-xl font-normal text-[var(--color-ivory)]">
                  {craft.title}
                </h3>
                <p className="mt-2 font-sans text-xs sm:text-sm text-[var(--color-ivory)]/75 font-light leading-relaxed">
                  {craft.description}
                </p>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-3 border-t border-[rgba(198,161,91,0.15)] flex items-center justify-between text-[11px] text-[var(--color-champagne)] tracking-widest uppercase font-sans">
                <span>Atelier Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Quote Statement */}
        <div className="craft-quote mt-20 border-t border-[rgba(198,161,91,0.2)] pt-12 text-center max-w-2xl mx-auto">
          <p className="font-serif text-xl sm:text-2xl italic text-[var(--color-champagne)]">
            &ldquo;At Uni Fine Jewelry, we aspire to create more than beautiful objects.
            We create pieces that hold meaning, celebrate individuality, and stand the test of time.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
