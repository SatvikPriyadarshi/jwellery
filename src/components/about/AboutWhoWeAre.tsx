"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./AboutWhoWeAre.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutWhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      const textCol = section.querySelector(".who-copy");
      const visualCol = section.querySelector(".who-visual");

      if (textCol) {
        gsap.fromTo(
          textCol,
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textCol,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      if (visualCol) {
        gsap.fromTo(
          visualCol,
          { autoAlpha: 0, y: 38 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.95,
            ease: "power2.out",
            scrollTrigger: {
              trigger: visualCol,
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
    <section ref={sectionRef} id="who-we-are" className="who-section">
      <div className="who-section__inner">
        {/* Left Column: Narrative Copy */}
        <div className="who-copy">
          <div className="who-eyebrow-wrap">
            <span className="who-eyebrow">WHO WE ARE</span>
          </div>

          <h2 className="who-title">
            A Family Devotion to <br />
            <span className="who-title__mid">Nature’s</span> <br />
            <em className="who-title__accent">Rarest Treasures</em>
          </h2>

          <div className="who-body">
            <p>
              Uni Fine Jewelry is a family-owned business built on a legacy of
              passion, expertise, and an enduring appreciation for the beauty of
              fine gemstones.
            </p>
            <p>
              With roots in the gemstone industry dating back to 1965, our
              journey spans generations of dedication to sourcing, understanding,
              and transforming some of nature’s most extraordinary treasures
              into timeless creations.
            </p>

            {/* Expandable Extra Story Paragraphs */}
            <div
              id="who-story-extra"
              className={`who-extra-wrap ${isExpanded ? "is-expanded" : ""}`}
              aria-hidden={!isExpanded}
            >
              <div className="who-extra-content">
                <p>
                  Our story began with the trading of coloured gemstones and
                  diamonds, an endeavour that established our foundation in gemstone
                  knowledge, quality, and craftsmanship. By 1990, we had expanded
                  into the manufacturing of coloured gemstones, developing particular
                  expertise in Zambian emeralds. This chapter continued until 2018.
                </p>
                <p>
                  Building upon decades of experience, we entered fine jewelry
                  manufacturing, bringing together our gemstone heritage and the
                  artistry of skilled craftsmen. Every piece is made to be treasured
                  and passed down through generations.
                </p>
              </div>
            </div>
          </div>

          {/* Luxury SEE MORE button, aligned with text */}
          <div className="who-action-wrap">
            <button
              type="button"
              className="who-more-btn"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
              aria-controls="who-story-extra"
            >
              <span>{isExpanded ? "SEE LESS" : "SEE MORE"}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Editorial Visual Composition */}
        <div className="who-visual">
          {/* Architectural Gold Outline Accent Frame */}
          <div className="who-gold-frame" aria-hidden="true" />

          {/* Main Editorial High-Jewelry Photograph */}
          <div className="who-main-frame">
            <Image
              src="/images/jewellery/about-us-editorial.jpg"
              alt="High jewelry emerald earrings, ring, and bracelet worn with dark velvet gown"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              className="who-main-frame__img"
            />
          </div>

          {/* Refined Heritage Floating Plaque */}
          <div className="who-heritage-badge">
            <span className="who-heritage-badge__tag">HERITAGE</span>
            <p className="who-heritage-badge__desc">
              Generations of expertise, crafting excellence since 1965.
            </p>
            <span className="who-heritage-badge__line" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
