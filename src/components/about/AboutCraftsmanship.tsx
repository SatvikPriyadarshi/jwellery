"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./AboutCraftsmanship.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface PillarItem {
  id: string;
  title: string;
  tagline: string;
  detail: string;
  image: string;
  alt: string;
}

const PILLARS_DATA: PillarItem[] = [
  {
    id: "ethical-sourcing",
    title: "Ethical Gem Sourcing",
    tagline: "Responsibly sourced, naturally extraordinary.",
    detail:
      "Every gemstone is traced directly to certified conflict-free artisanal mines, hand-selected for crystalline fire, density, and natural saturation.",
    image: "/images/jewellery/pillar-1.jpg",
    alt: "Pear-cut emerald drop earrings ethically sourced and hand-finished",
  },
  {
    id: "lapidary-precision",
    title: "Lapidary Precision",
    tagline: "Expertly cut for unmatched brilliance.",
    detail:
      "Master cutters orient each crystal along its natural optical axis, precision-faceting every plane to maximize fire and velvety green saturation.",
    image: "/images/jewellery/pillar-2.jpg",
    alt: "Precision octagonal faceted Zambian emerald jewel",
  },
  {
    id: "haute-goldsmithing",
    title: "Haute Goldsmithing",
    tagline: "Handcrafted with care, made to last.",
    detail:
      "Fabricated by hand in solid 18K gold. Bezels, prongs, and galleries are sculpted individually to protect precious stones for lifetimes to come.",
    image: "/images/jewellery/pillar-3.jpg",
    alt: "Artisan handcrafted 18K solid gold jewelry with fine floral detailing",
  },
  {
    id: "cherished-heirloom",
    title: "The Cherished Heirloom",
    tagline: "Timeless pieces for generations.",
    detail:
      "Individually appraised, hallmarked, and gemologically certified, created to commemorate milestones and be treasured through generations.",
    image: "/images/jewellery/pillar-4.jpg",
    alt: "High jewelry emerald and diamond collar necklace statement piece",
  },
];

export default function AboutCraftsmanship() {
  const rootRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      const header = root.querySelector(".pillars-header");
      const cards = root.querySelectorAll(".pillar-card");
      const footer = root.querySelector(".pillars-footer");

      if (header) {
        gsap.fromTo(
          header,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: root,
              start: "top 75%",
              once: true,
            },
          }
        );
      }

      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: root,
              start: "top 70%",
              once: true,
            },
          }
        );
      }

      if (footer) {
        gsap.fromTo(
          footer,
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: root,
              start: "top 65%",
              once: true,
            },
          }
        );
      }
    },
    { scope: rootRef }
  );

  const handleScroll = (direction: "left" | "right") => {
    if (!gridRef.current) return;
    const cardWidth = gridRef.current.clientWidth / 4;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    gridRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section
      ref={rootRef}
      id="pillars-of-mastery"
      className="pillars-section"
      aria-labelledby="pillars-heading"
    >
      <div className="pillars-container">
        {/* Header Row */}
        <header className="pillars-header">
          <div className="pillars-header__titles">
            <div className="pillars-eyebrow-wrap">
              <p className="pillars-eyebrow">Atelier Artistry</p>
            </div>
            <h2 id="pillars-heading" className="pillars-title">
              Crafted Through Generations: <br />
              <span className="pillars-title__accent">
                The Four Pillars of Mastery
              </span>
            </h2>
          </div>

          <div className="pillars-header__narrative">
            <p className="pillars-narrative-text">
              Our heritage is our foundation, our expertise is our strength, and
              our commitment to excellence guides everything we do. Every stage of
              our evolution has been shaped by a deep respect for the materials we
              work with and the people who place their trust in us.
            </p>
            <Link href="#who-we-are" prefetch={false} className="pillars-story-link">
              <span>SEE OUR STORY</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </header>

        {/* 4 Pillars Vitrine Row Flanked by Nav Outline Arrows */}
        <div className="pillars-row-wrapper">
          <button
            type="button"
            className="pillars-nav-btn"
            aria-label="Previous pillar"
            onClick={() => handleScroll("left")}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div ref={gridRef} className="pillars-grid" role="list">
            {PILLARS_DATA.map((pillar) => {
              const isExpanded = Boolean(expandedCards[pillar.id]);

              return (
                <article
                  key={pillar.id}
                  className="pillar-card"
                  role="listitem"
                >
                  <div className="pillar-card__figure">
                    <Image
                      src={pillar.image}
                      alt={pillar.alt}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                      quality={90}
                      className="pillar-card__img"
                    />
                  </div>

                  <div className="pillar-card__content">
                    <div className="pillar-card__body">
                      <h3 className="pillar-card__title">{pillar.title}</h3>
                      <p className="pillar-card__desc">{pillar.tagline}</p>

                      <div
                        id={`pillar-detail-${pillar.id}`}
                        className={`pillar-card__detail-wrap ${isExpanded ? "is-expanded" : ""}`}
                        aria-hidden={!isExpanded}
                      >
                        <p className="pillar-card__detail-text">
                          {pillar.detail}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="pillar-card__action"
                      onClick={() => toggleCard(pillar.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`pillar-detail-${pillar.id}`}
                    >
                      {isExpanded ? "SEE LESS" : "SEE MORE"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <button
            type="button"
            className="pillars-nav-btn"
            aria-label="Next pillar"
            onClick={() => handleScroll("right")}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Bottom Editorial Quote */}
        <footer className="pillars-footer">
          <blockquote className="pillars-quote">
            &ldquo;At Uni Fine Jewelry, we aspire to create more than beautiful objects.
            We create pieces that hold meaning, celebrate individuality, and stand the test of time.&rdquo;
          </blockquote>
        </footer>
      </div>
    </section>
  );
}
