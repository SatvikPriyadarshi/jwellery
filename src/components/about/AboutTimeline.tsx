"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import "./AboutTimeline.css";

type Milestone = {
  id: string;
  year: string;
  navLabel: string;
  chapter: string;
  title: string;
  titleHighlight?: string;
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
    navLabel: "1965 &bull; Origins",
    chapter: "Milestone I &bull; Foundations",
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
    navLabel: "1990 &bull; Zambian Emeralds",
    chapter: "Milestone II &bull; Lapidary Mastery",
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
    navLabel: "2018 &bull; The Atelier",
    chapter: "Milestone III &bull; Haute Joaillerie",
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
    navLabel: "Today &bull; A Legacy",
    chapter: "Milestone IV &bull; Eternal Brilliance",
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLElement>(".timeline-list li");

    // Viewport check matching the user's provided logic
    function isElementInViewport(el: HTMLElement) {
      const rect = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      // Trigger when item is comfortably within view
      return rect.top <= windowHeight * 0.85 && rect.bottom >= windowHeight * 0.12;
    }

    function checkVisibility() {
      items.forEach((item) => {
        if (isElementInViewport(item)) {
          if (!item.classList.contains("in-view")) {
            item.classList.add("in-view");
          }
        }
      });
    }

    // Modern IntersectionObserver with smooth fallbacks
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
            }
          });
        },
        {
          rootMargin: "0px 0px -10% 0px",
          threshold: 0.15,
        },
      );
      items.forEach((item) => observer?.observe(item));
    }

    // Run on initial mount
    checkVisibility();

    // Scroll & resize listeners matching user's specification
    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility);

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="timeline"
      className="timeline-section"
      aria-label="Uni Fine Jewelry Heritage Chronology"
    >
      {/* Decorative ambient textures */}
      <Image
        src="/images/jewellery/footer-botanical.jpg"
        alt=""
        width={540}
        height={540}
        className="timeline-section__wash timeline-section__wash--top"
      />
      <Image
        src="/images/jewellery/footer-botanical.jpg"
        alt=""
        width={540}
        height={540}
        className="timeline-section__wash timeline-section__wash--bottom"
      />

      <div className="timeline-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3">
            <span className="h-[1px] w-8 sm:w-12 bg-[var(--tl-gold)]" />
            <p className="font-sans text-[0.72rem] tracking-[0.28em] uppercase text-[var(--tl-gold)] font-medium">
              Chronology of Craft
            </p>
            <span className="h-[1px] w-8 sm:w-12 bg-[var(--tl-gold)]" />
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[var(--tl-text-light)]">
            Our Journey Through <br />
            <span className="font-display italic text-[var(--tl-gold)]">
              Time &amp; Brilliance
            </span>
          </h2>

          <p className="mt-4 font-sans text-sm sm:text-base text-[var(--tl-text-light)]/75 font-light leading-relaxed">
            From the raw gemstone bazaars of 1965 to modern bespoke high jewelry,
            every decade has deepened our mastery, sharpened our craft, and reaffirmed
            our dedication to timeless beauty.
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
                  target.classList.add("in-view");
                }
              }}
            >
              <span className="timeline-quicknav__dot" aria-hidden="true" />
              <span dangerouslySetInnerHTML={{ __html: m.navLabel }} />
            </a>
          ))}
        </nav>

        {/* Top Finial on Center Line */}
        <div className="timeline-finial" aria-hidden="true" />

        {/* Central Alternating Timeline List */}
        <ul className="timeline-list">
          {MILESTONES.map((milestone) => (
            <li key={milestone.id} id={milestone.id}>
              <div className="timeline-card">
                {/* Connector hairline to central stem */}
                <div
                  className="timeline-card__connector"
                  aria-hidden="true"
                />

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
                    sizes="(max-width: 860px) 90vw, 480px"
                    className="timeline-card__img"
                  />
                  <figcaption className="timeline-card__visual-stamp">
                    {milestone.stamp}
                  </figcaption>
                </figure>

                {/* Chapter & Title */}
                <span
                  className="timeline-card__chapter"
                  dangerouslySetInnerHTML={{ __html: milestone.chapter }}
                />

                <h3 className="timeline-card__title">
                  {milestone.title}
                </h3>

                {/* Narrative Copy from prompt */}
                <p className="timeline-card__desc">
                  {milestone.description}
                </p>

                {/* Discovery & Artisan Grid (Elevated from user's science example) */}
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
          ))}
        </ul>

        {/* Bottom Terminal Finial on Center Line */}
        <div className="timeline-list-end" aria-hidden="true" />
      </div>
    </section>
  );
}
