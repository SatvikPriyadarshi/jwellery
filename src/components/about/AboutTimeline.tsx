"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./AboutTimeline.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export type Milestone = {
  id: string;
  year: string;
  navLabel: string;
  chapter: string;
  title: string;
  image: string;
  alt: string;
  stamp: string;
  description: string;
  discoveryTitle: string;
  discoveryText: string;
  artisanTitle: string;
  artisanText: string;
  tags: string[];
};

export const MILESTONES: Milestone[] = [
  {
    id: "era-1965",
    year: "1965",
    navLabel: "1965 • Origins",
    chapter: "Chapter I • Foundations",
    title: "Trading of Coloured Gemstones & Diamonds",
    image: "/images/jewellery/about-1965-trading.jpg",
    alt: "Historic gemstone and rough diamond trading ledger and sorting trays",
    stamp: "Archive // 1965 Foundations",
    description:
      "Uni Fine Jewelry is a family-owned business built on a legacy of passion, expertise, and an enduring appreciation for the beauty of fine gemstones. Our story began with the trading of coloured gemstones and diamonds, an endeavour that established our lifelong foundation in gemstone knowledge, quality, and craftsmanship.",
    discoveryTitle: "Gemological Roots",
    discoveryText:
      "Mastery of rough crystalline provenance, optical color saturation, and diamond clarity grading.",
    artisanTitle: "Foundational Hub",
    artisanText:
      "Historic Jaipur trading district with direct links to African and Asian rough sources.",
    tags: ["#GemstoneTrading", "#DiamondRough", "#JaipurHeritage", "#FamilyRoots"],
  },
  {
    id: "era-1990",
    year: "1990",
    navLabel: "1990 • Emeralds",
    chapter: "Chapter II • Lapidary Mastery",
    title: "Expansion into Zambian Emerald Manufacturing",
    image: "/images/jewellery/about-1990-emeralds.jpg",
    alt: "Deep green Zambian emeralds cut and polished in our manufacturing lapidary",
    stamp: "Lapidary // Zambian Emeralds",
    description:
      "By 1990, we had expanded into the manufacturing of coloured gemstones, developing particular expertise in Zambian emeralds. This chapter of our journey continued until 2018, deepening our understanding of gemstones from their natural origins to their finest finished forms.",
    discoveryTitle: "Lapidary Specialization",
    discoveryText:
      "Precision step-cutting, octagonal emerald facets, and enhancing velvety saturated green hues.",
    artisanTitle: "Origin Provenance",
    artisanText:
      "Ethical sourcing from the celebrated emerald reserves of Zambia’s Kafubu River basin.",
    tags: ["#ZambianEmeralds", "#GemCutting", "#EmeraldLapidary", "#RoughToFinished"],
  },
  {
    id: "era-2018",
    year: "2018",
    navLabel: "2018 • The Atelier",
    chapter: "Chapter III • Haute Joaillerie",
    title: "Fine Jewelry Manufacturing & Master Goldsmithing",
    image: "/images/jewellery/about-2018-atelier.jpg",
    alt: "Artisan master jeweler crafting fine jewelry on the jeweler bench",
    stamp: "Atelier // Fine Craftsmanship",
    description:
      "Building upon decades of experience, we entered the world of fine jewelry manufacturing, bringing together our gemstone heritage and the artistry of skilled craftsmen. In our atelier, master goldsmiths and stone-setters transform our finest stones into architectural fine jewelry.",
    discoveryTitle: "Artisan Métier",
    discoveryText:
      "Hand-fabricated 18K solid gold, micro-claw diamond pavé, and bespoke bezel calibration.",
    artisanTitle: "Atelier Philosophy",
    artisanText:
      "Harmonizing raw gemological heritage with the highest standards of international fine jewelry.",
    tags: ["#FineJewelryManufacturing", "#MasterGoldsmith", "#18KGold", "#BespokeAtelier"],
  },
  {
    id: "era-today",
    year: "TODAY",
    navLabel: "Today • A Legacy",
    chapter: "Chapter IV • Eternal Brilliance",
    title: "Timeless Heirlooms for Generations to Come",
    image: "/images/jewellery/about-today-jewelry.jpg",
    alt: "Exquisite finished fine jewelry combining gold, diamonds, and emeralds",
    stamp: "Present // Heirloom Creations",
    description:
      "Today, Uni Fine Jewelry combines generations of knowledge with meticulous attention to detail to create exquisite jewelry that celebrates the enduring beauty of gold, diamonds, emeralds, and other precious coloured gemstones. From classic creations to distinctive statement pieces, our jewelry is made to be treasured, cherished, and passed down through generations.",
    discoveryTitle: "Modern Heirloom",
    discoveryText:
      "Pieces designed as personal talismans of resilience, milestone achievements, and family legacy.",
    artisanTitle: "Global Salons",
    artisanText:
      "Private viewing salons in Jaipur and Kuala Lumpur, serving collectors worldwide.",
    tags: ["#BespokeHeirlooms", "#GenerationalCraft", "#FineJewelry", "#UniFineJewelry"],
  },
];

export default function AboutTimeline() {
  const pinSectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stemFillRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [activeEraIndex, setActiveEraIndex] = useState(0);

  // Mobile touch gestures
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);

  // Jump to specific milestone (universal across desktop & mobile)
  const jumpToMilestone = (index: number) => {
    const st = ScrollTrigger.getById("timeline-horizontal-scroll");
    if (st) {
      const totalItems = MILESTONES.length + 0.35; // account for outro card
      const targetProgress = Math.min(1, Math.max(0, index / (totalItems - 1)));
      const targetScroll = st.start + targetProgress * (st.end - st.start);
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    const nextIdx = Math.max(0, activeEraIndex - 1);
    jumpToMilestone(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(MILESTONES.length - 1, activeEraIndex + 1);
    jumpToMilestone(nextIdx);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchStartTime.current = Date.now();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    const deltaTime = Date.now() - touchStartTime.current;

    // Horizontal swipe gesture steps between milestones
    if (
      Math.abs(deltaX) > 42 &&
      Math.abs(deltaX) > Math.abs(deltaY) * 1.3 &&
      deltaTime < 600
    ) {
      if (deltaX < 0 && activeEraIndex < MILESTONES.length - 1) {
        jumpToMilestone(activeEraIndex + 1);
      } else if (deltaX > 0 && activeEraIndex > 0) {
        jumpToMilestone(activeEraIndex - 1);
      }
    }
  };

  // Universal GSAP Horizontal Pinned ScrollTrigger (Desktop & Phone)
  useGSAP(
    () => {
      const pinSection = pinSectionRef.current;
      const track = trackRef.current;
      const stemFill = stemFillRef.current;
      const progressBar = progressBarRef.current;

      if (!pinSection || !track) return;

      const getScrollDistance = () =>
        Math.max(0, track.scrollWidth - window.innerWidth);

      const isMobile = window.innerWidth <= 860;
      const scrubSpeed = isMobile ? 0.6 : 0.8;
      const scrollMultiplier = isMobile ? 1.15 : 1.25;

      // Master horizontal translation pinned tween
      const scrollTween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          id: "timeline-horizontal-scroll",
          trigger: pinSection,
          pin: true,
          pinSpacing: true,
          start: "top top",
          end: () => `+=${Math.round(getScrollDistance() * scrollMultiplier)}`,
          scrub: scrubSpeed,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Update master gold progress indicator
            if (progressBar) {
              gsap.set(progressBar, { scaleX: self.progress });
            }

            // Update the golden tree stem fill across the track
            if (stemFill) {
              gsap.set(stemFill, { scaleX: self.progress });
            }

            // Determine active milestone index (0 to 3)
            const count = MILESTONES.length;
            const idx = Math.min(
              count - 1,
              Math.floor(self.progress * (count + 0.2))
            );
            setActiveEraIndex(idx);

            // Update active node diamond states
            const nodes = track.querySelectorAll(".htl-node");
            nodes.forEach((node, nodeIdx) => {
              if (nodeIdx <= idx) {
                node.classList.add("htl-node--active");
              } else {
                node.classList.remove("htl-node--active");
              }
            });
          },
        },
      });

      // Parallax image floating inside each card as it passes through the viewport
      const cards = track.querySelectorAll(".htl-card");
      cards.forEach((card) => {
        const img = card.querySelector(".htl-card__img");
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.1, x: isMobile ? 14 : 25 },
            {
              scale: 1,
              x: isMobile ? -14 : -25,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: scrollTween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );
        }
      });

      return () => {
        scrollTween.kill();
        const st = ScrollTrigger.getById("timeline-horizontal-scroll");
        if (st) st.kill();
      };
    },
    { scope: pinSectionRef }
  );

  return (
    <section
      ref={pinSectionRef}
      id="timeline"
      className="htl-section"
      aria-label="Uni Fine Jewelry Heritage Chronology"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header Deck & Controls */}
      <div className="htl-header-deck">
        <div className="htl-header-top">
          <div className="htl-header-titles">
            <p className="htl-eyebrow">
              Chronology of Craft &bull; 1965 &mdash; Today
            </p>
            <h2 className="htl-title">
              Our Journey Through{" "}
              <span className="htl-title__accent">Time &amp; Brilliance</span>
            </h2>
          </div>

          {/* Interactive Navigation Deck */}
          <div className="htl-controls">
            {/* Quick-Jump Era Buttons */}
            <div
              className="htl-era-pills"
              role="tablist"
              aria-label="Jump to timeline era"
            >
              {MILESTONES.map((milestone, idx) => {
                const isActive = activeEraIndex === idx;
                return (
                  <button
                    key={milestone.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => jumpToMilestone(idx)}
                    className={`htl-era-pill ${
                      isActive ? "htl-era-pill--active" : ""
                    }`}
                  >
                    <span className="htl-era-pill__diamond" aria-hidden="true" />
                    <span>{milestone.year}</span>
                  </button>
                );
              })}
            </div>

            {/* Navigation Arrow buttons */}
            <div className="htl-stepper">
              <div className="htl-stepper__arrows">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={activeEraIndex === 0}
                  className="htl-arrow-btn"
                  aria-label="Previous milestone"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={activeEraIndex === MILESTONES.length - 1}
                  className="htl-arrow-btn"
                  aria-label="Next milestone"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Description & Instructions */}
        <div className="htl-header-sub">
          <p className="htl-intro-copy">
            From the raw gemstone bazaars of 1965 to modern bespoke high jewelry,
            every decade has deepened our mastery, sharpened our craft, and
            reaffirmed our dedication to timeless beauty.
          </p>

          <div className="htl-scroll-hint" aria-hidden="true">
            <span className="htl-scroll-hint__label">Scroll to travel</span>
            <span className="htl-scroll-hint__track">
              <span className="htl-scroll-hint__bar" />
            </span>
          </div>
        </div>

        {/* Gold Scrubber Progress Line */}
        <div className="htl-progress-track" aria-hidden="true">
          <div ref={progressBarRef} className="htl-progress-fill" />
        </div>
      </div>

      {/* Main Horizontal Track Area */}
      <div className="htl-track-container">
        <div ref={trackRef} className="htl-track">
          {/* Continuous Tree of Craft: Horizontal Trunk Axis */}
          <div className="htl-tree-axis" aria-hidden="true">
            <div className="htl-tree-stem-track" />
            <div ref={stemFillRef} className="htl-tree-stem-fill" />
          </div>

          {/* Milestone Exhibition Cards */}
          {MILESTONES.map((milestone, index) => {
            const isActive = activeEraIndex === index;
            return (
              <article
                key={milestone.id}
                id={milestone.id}
                className={`htl-card ${isActive ? "htl-card--active" : ""}`}
              >
                {/* Tree Branch Anchor Node */}
                <div className="htl-branch-anchor" aria-hidden="true">
                  <div className="htl-node">
                    <span className="htl-node__core" />
                    <span className="htl-node__ring" />
                  </div>
                  <div className="htl-branch-line" />
                </div>

                <div className="htl-card__inner">
                  {/* Watermark Year Background */}
                  <span className="htl-card__watermark" aria-hidden="true">
                    {milestone.year}
                  </span>

                  {/* Left Column: Archival Photography Vitrine */}
                  <div className="htl-card__media-side">
                    <figure className="htl-card__figure">
                      <Image
                        src={milestone.image}
                        alt={milestone.alt}
                        fill
                        sizes="(max-width: 860px) 85vw, 460px"
                        className="htl-card__img"
                      />
                      <div className="htl-card__vignette" aria-hidden="true" />
                      <figcaption className="htl-card__stamp">
                        {milestone.stamp}
                      </figcaption>

                      {/* Year Floating Plaque */}
                      <div className="htl-card__year-badge">
                        <span>{milestone.year}</span>
                      </div>
                    </figure>
                  </div>

                  {/* Right Column: Narrative & Gemological Dossier */}
                  <div className="htl-card__content-side">
                    <div className="htl-card__header">
                      <span className="htl-card__chapter">
                        {milestone.chapter}
                      </span>
                      <h3 className="htl-card__title">{milestone.title}</h3>
                    </div>

                    <p className="htl-card__description">
                      {milestone.description}
                    </p>

                    {/* Dual Dossier Cards */}
                    <div className="htl-card__dossier">
                      <div className="htl-dossier-box">
                        <h4 className="htl-dossier-box__title">
                          {milestone.discoveryTitle}
                        </h4>
                        <p className="htl-dossier-box__text">
                          {milestone.discoveryText}
                        </p>
                      </div>

                      <div className="htl-dossier-box">
                        <h4 className="htl-dossier-box__title">
                          {milestone.artisanTitle}
                        </h4>
                        <p className="htl-dossier-box__text">
                          {milestone.artisanText}
                        </p>
                      </div>
                    </div>

                    {/* Curated Tags */}
                    <div className="htl-card__tags">
                      {milestone.tags.map((tag) => (
                        <span key={tag} className="htl-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}

          {/* Outro Finale Card: The Living Legacy */}
          <div className="htl-card htl-card--outro">
            <div className="htl-outro__inner">
              <div className="htl-outro__crest" aria-hidden="true">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-champagne)"
                  strokeWidth="1.2"
                >
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                  <polygon points="12 6 18 10 18 14 12 18 6 14 6 10 12 6" />
                </svg>
              </div>

              <span className="htl-card__chapter">A Living Heritage</span>

              <h3 className="htl-outro__title">
                Crafted to Be Cherished, <br />
                <span className="htl-title__accent">Now &amp; Always</span>
              </h3>

              <p className="htl-outro__desc">
                From 1965 to this very moment, each Uni Fine Jewelry creation is
                infused with sixty years of stone expertise, precision cutting,
                and goldsmith artistry. An enduring talisman of your own
                extraordinary journey.
              </p>

              <div className="htl-outro__actions">
                <a
                  href="#contact"
                  className="htl-outro__cta htl-outro__cta--primary"
                >
                  Book Private Salon
                </a>
                <a
                  href="/#collection"
                  className="htl-outro__cta htl-outro__cta--secondary"
                >
                  View Collection &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
