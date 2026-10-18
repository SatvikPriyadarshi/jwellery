"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./AboutTimeline.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Milestone = {
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

const MILESTONES: Milestone[] = [
  {
    id: "era-1965",
    year: "1965",
    navLabel: "1965 • Origins",
    chapter: "Milestone I • Foundations",
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
    navLabel: "1990 • Zambian Emeralds",
    chapter: "Milestone II • Lapidary Mastery",
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
    chapter: "Milestone III • Haute Joaillerie",
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
    chapter: "Milestone IV • Eternal Brilliance",
    title: "Timeless Heirlooms for Generations to Come",
    image: "/images/jewellery/about-today-jewelry.jpg",
    alt: "Exquisite finished fine jewelry combining gold, diamonds, and emeralds",
    stamp: "Present // Heirloom Creations",
    description:
      "Today, Uni Fine Jewelry combines generations of knowledge with meticulous attention to detail to create exquisite jewelry that celebrates the enduring beauty of gold, diamonds, emeralds, and other precious coloured gemstones. From classic creations to distinctive statement pieces, our jewelry is made to be treasured, cherished, and passed down through generations.",
    discoveryTitle: "Modern Heirloom",
    discoveryText:
      "Pieces designed as personal talismans of resilience, milestone achievements, and family legacy.",
    artisanTitle: "Global Presence",
    artisanText:
      "Private viewing salons in Jaipur and Kuala Lumpur, serving collectors worldwide.",
    tags: ["#BespokeHeirlooms", "#GenerationalCraft", "#FineJewelry", "#UniFineJewelry"],
  },
];

export default function AboutTimeline() {
  const containerRef = useRef<HTMLElement>(null);
  const treeFillRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = containerRef.current;
      const treeFill = treeFillRef.current;
      if (!root) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      // Animate the tree stem line filling downwards as user scrolls
      if (treeFill) {
        gsap.fromTo(
          treeFill,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".timeline-tree-wrapper",
              start: "top 65%",
              end: "bottom 80%",
              scrub: 0.6,
            },
          }
        );
      }

      // Animate each milestone item
      const items = root.querySelectorAll(".timeline-list li");
      items.forEach((item, index) => {
        const isOdd = index % 2 === 0;
        const node = item.querySelector(".timeline-node");
        const connector = item.querySelector(".timeline-connector");
        const card = item.querySelector(".timeline-card");
        const timeBadge = item.querySelector(".timeline-card time");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 78%",
            once: true,
          },
        });

        if (node) {
          tl.fromTo(
            node,
            { scale: 0, rotation: 0 },
            {
              scale: 1,
              rotation: 45,
              duration: 0.5,
              ease: "back.out(1.8)",
              onComplete: () => {
                node.classList.add("timeline-node--active");
              },
            }
          );
        }

        if (connector) {
          tl.fromTo(
            connector,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.4, ease: "power2.out" },
            "-=0.2"
          );
        }

        if (card) {
          tl.fromTo(
            card,
            {
              autoAlpha: 0,
              y: 40,
              x: isOdd ? -30 : 30,
            },
            {
              autoAlpha: 1,
              y: 0,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.3"
          );
        }

        if (timeBadge) {
          tl.fromTo(
            timeBadge,
            { scale: 0.8, autoAlpha: 0 },
            { scale: 1, autoAlpha: 1, duration: 0.4, ease: "back.out(1.5)" },
            "-=0.5"
          );
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="timeline"
      className="timeline-section"
      aria-label="Uni Fine Jewelry Heritage Chronology"
    >
      <div className="timeline-container">
        {/* Section Header with NO artificial lines */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[var(--tl-gold)] font-medium">
            Chronology of Craft
          </p>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[var(--tl-text-light)]">
            Our Journey Through{" "}
            <span className="italic font-normal text-[var(--tl-gold)]">
              Time &amp; Brilliance
            </span>
          </h2>

          <p className="mt-4 font-sans text-sm sm:text-base text-[var(--tl-text-light)]/75 font-light leading-relaxed">
            From the raw gemstone bazaars of 1965 to modern bespoke high jewelry,
            every decade has deepened our mastery, sharpened our craft, and
            reaffirmed our dedication to timeless beauty.
          </p>
        </div>

        {/* Quick Nav Timeline Selector */}
        <nav
          className="timeline-quicknav"
          aria-label="Quick jump to timeline eras"
        >
          {MILESTONES.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className="timeline-quicknav__btn"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById(m.id);
                if (target) {
                  target.scrollIntoView({ behavior: "smooth", block: "center" });
                }
              }}
            >
              <span className="timeline-quicknav__dot" aria-hidden="true" />
              <span>{m.navLabel}</span>
            </a>
          ))}
        </nav>

        {/* GSAP Dynamic Tree Structure */}
        <div className="timeline-tree-wrapper">
          {/* Static Guide Track */}
          <div className="timeline-tree-track" aria-hidden="true" />

          {/* GSAP Animated Tree Line */}
          <div
            ref={treeFillRef}
            className="timeline-tree-fill"
            aria-hidden="true"
          />

          {/* Milestones List */}
          <ul className="timeline-list">
            {MILESTONES.map((milestone, index) => {
              const isOdd = index % 2 === 0;
              return (
                <li
                  key={milestone.id}
                  id={milestone.id}
                  className={isOdd ? "timeline-item--odd" : "timeline-item--even"}
                >
                  {/* GSAP Animated Diamond Facet Node */}
                  <div className="timeline-node" aria-hidden="true" />

                  {/* GSAP Animated Connector Branch */}
                  <div className="timeline-connector" aria-hidden="true" />

                  {/* Milestone Card */}
                  <div className="timeline-card">
                    {/* Floating Date Badge */}
                    <time dateTime={milestone.year === "TODAY" ? "2026" : milestone.year}>
                      {milestone.year}
                    </time>

                    {/* Archival Photography Window */}
                    <figure className="timeline-card__visual">
                      <Image
                        src={milestone.image}
                        alt={milestone.alt}
                        fill
                        sizes="(max-width: 860px) 100vw, 480px"
                        className="timeline-card__img"
                      />
                      <figcaption className="timeline-card__visual-stamp">
                        {milestone.stamp}
                      </figcaption>
                    </figure>

                    {/* Chapter & Title */}
                    <span className="timeline-card__chapter">
                      {milestone.chapter}
                    </span>

                    <h3 className="timeline-card__title">
                      {milestone.title}
                    </h3>

                    {/* Narrative Copy */}
                    <p className="timeline-card__desc">
                      {milestone.description}
                    </p>

                    {/* Discovery & Artisan Grid */}
                    <div className="timeline-card__meta">
                      <div className="timeline-card__meta-col">
                        <h4>{milestone.discoveryTitle}</h4>
                        <p>{milestone.discoveryText}</p>
                      </div>
                      <div className="timeline-card__meta-col">
                        <h4>{milestone.artisanTitle}</h4>
                        <p>{milestone.artisanText}</p>
                      </div>
                    </div>

                    {/* Heritage Tags */}
                    <div className="timeline-card__tags">
                      {milestone.tags.map((tag) => (
                        <span key={tag} className="timeline-card__tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
