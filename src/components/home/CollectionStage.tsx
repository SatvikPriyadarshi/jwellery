"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./CollectionStage.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface CollectionSlide {
  name: string;
  href: string;
  image: string;
  squarePosition: string;
  circlePosition: string;
  bgColor: string;
  accentColor: string;
  surfaceColor: string;
  copy: string;
  note: string;
  cta: string;
}

const slides: CollectionSlide[] = [
  {
    name: "Rings",
    href: "#collection-rings",
    image: "/images/collection-rings.jpg",
    squarePosition: "50% 54%",
    circlePosition: "54% 48%",
    bgColor: "#0E2118",
    accentColor: "#C6A15B",
    surfaceColor: "#142D21",
    copy: "Emerald cut for the hand. Gold that warms as you wear it.",
    note: "Emerald · 18k gold",
    cta: "Ask about rings",
  },
  {
    name: "Earrings",
    href: "#collection-earrings",
    image: "/images/collection-earrings.jpg",
    squarePosition: "52% 48%",
    circlePosition: "58% 52%",
    bgColor: "#1C140E",
    accentColor: "#D8B06A",
    surfaceColor: "#271C14",
    copy: "Pear drops that catch the light when you turn.",
    note: "Pear emerald · Diamond",
    cta: "Ask about earrings",
  },
  {
    name: "Bracelets",
    href: "#collection-bracelets",
    image: "/images/collection-bracelets.jpg",
    squarePosition: "50% 50%",
    circlePosition: "48% 58%",
    bgColor: "#221117",
    accentColor: "#CFA763",
    surfaceColor: "#2E171F",
    copy: "Links that follow the wrist. Soft. Exact. Nothing forced.",
    note: "Flexible links · Custom size",
    cta: "Ask about bracelets",
  },
  {
    name: "Necklaces",
    href: "#collection-necklaces",
    image: "/images/collection-necklaces.jpg",
    squarePosition: "52% 46%",
    circlePosition: "52% 62%",
    bgColor: "#0D1D24",
    accentColor: "#C6A15B",
    surfaceColor: "#142932",
    copy: "A collar that sits where it should. Quiet, balanced, kept.",
    note: "Graduated emerald · 18k gold",
    cta: "Ask about necklaces",
  },
];

function LetterTitle({ text }: { text: string }) {
  return (
    <span className="cs-letters" aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={`${text}-${i}`}
          className="cs-letter-mask"
          aria-hidden="true"
        >
          <span className="cs-letter">{char === " " ? "\u00A0" : char}</span>
        </span>
      ))}
    </span>
  );
}

export default function CollectionStage() {
  const rootRef = useRef<HTMLElement>(null);
  const slidesRef = useRef<(HTMLElement | null)[]>([]);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const [activeIdx, setActiveIdx] = useState(0);

  // Mobile horizontal swipe gestures
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);

  // Jump to specific collection slide (by scrolling to its hold position)
  const gotoSlide = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(slides.length - 1, index));
    const st = scrollTriggerRef.current;
    if (st) {
      const totalDistance = st.end - st.start;
      // Midpoints across the 4 slides
      const slideFractions = [0, 0.33, 0.67, 1.0];
      const fraction =
        slideFractions[clamped] ?? clamped / (slides.length - 1);
      const targetY = st.start + fraction * totalDistance;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    } else if (rootRef.current) {
      rootRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Universal Window-Locking Scrubbed Storytelling Master Timeline (Desktop & Phone)
  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Set initial slide visibility: Slide 0 is visible, other slides staged closely
      slidesRef.current.forEach((slide, i) => {
        if (slide) {
          gsap.set(slide, {
            autoAlpha: i === 0 ? 1 : 0,
            scale: i === 0 ? 1 : 0.88,
            y: 0,
            pointerEvents: i === 0 ? "auto" : "none",
          });
        }
      });

      if (reduce) return;

      const isMobile = window.innerWidth < 768;
      // Natural responsive scrub: quick and natural tracking without dragging lag
      const scrubSpeed = isMobile ? 0.7 : 0.9;
      // Normal scroll distance: 3.0x desktop / 2.2x mobile keeps scroll fast & fluid
      const scrollDistance = isMobile
        ? Math.round(window.innerHeight * 2.2)
        : Math.round(window.innerHeight * 3.0);

      // Master Timeline tied to vertical scroll with smooth, continuous transitions (no sudden snaps)
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "collection-scroll-scrub",
          trigger: root,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          scrub: scrubSpeed,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          onUpdate: (self) => {
            const p = self.progress;
            let computed = 0;
            if (p < 0.22) computed = 0;
            else if (p < 0.52) computed = 1;
            else if (p < 0.78) computed = 2;
            else computed = 3;
            setActiveIdx(computed);
          },
        },
      });

      scrollTriggerRef.current = tl.scrollTrigger || null;

      // Generous transition window and gentle holds for silky-smooth dissolve
      const holdDuration = 0.5;
      const transDuration = 1.9;

      // Build transitions between the 4 collections
      for (let i = 0; i < slides.length - 1; i++) {
        const current = slidesRef.current[i];
        const next = slidesRef.current[i + 1];

        // 1. Brief hold pause on current slide
        tl.to({}, { duration: holdDuration });

        // 2. Outgoing slide: gentle scale (1.12x) + soft crossfade out
        tl.to(
          current,
          {
            scale: 1.12,
            autoAlpha: 0,
            duration: transDuration,
            ease: "power1.inOut",
          },
          `trans-${i}`
        );

        // 3. Incoming slide: gentle zoom in (0.88 -> 1) + soft crossfade in
        tl.fromTo(
          next,
          {
            scale: 0.88,
            autoAlpha: 0,
            y: isMobile ? 20 : 30,
          },
          {
            scale: 1,
            autoAlpha: 1,
            y: 0,
            duration: transDuration,
            ease: "power1.inOut",
          },
          `trans-${i}`
        );

        // Toggle pointer events at transition midpoint
        if (current && next) {
          tl.set(next, { pointerEvents: "auto" }, `trans-${i}+=0.95`);
          tl.set(current, { pointerEvents: "none" }, `trans-${i}+=0.95`);
        }

        // Animate letters and copy on the incoming slide smoothly
        if (next) {
          const letters = next.querySelectorAll(".cs-letter");
          const copy = next.querySelector(".cs-slide__copy");
          const note = next.querySelector(".cs-slide__note");
          const cta = next.querySelector(".cs-slide__cta");

          if (letters.length > 0) {
            tl.fromTo(
              letters,
              { yPercent: 125 },
              {
                yPercent: 0,
                duration: 1.0,
                stagger: 0.03,
                ease: "power2.out",
              },
              `trans-${i}+=0.4`
            );
          }

          if (copy && note && cta) {
            tl.fromTo(
              [copy, note, cta],
              { y: 18, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.85,
                stagger: 0.1,
                ease: "power2.out",
              },
              `trans-${i}+=0.6`
            );
          }
        }
      }

      // Final hold period for Slide 3 (Necklaces)
      tl.to({}, { duration: holdDuration });

      return () => {
        tl.kill();
        if (scrollTriggerRef.current) {
          scrollTriggerRef.current.kill();
        }
      };
    },
    { scope: rootRef }
  );

  // Mobile Horizontal Touch Swipe Gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchStartTime.current = Date.now();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    const deltaTime = Date.now() - touchStartTime.current;

    // Horizontal swipe gesture to step through collections
    if (
      Math.abs(deltaX) > 42 &&
      Math.abs(deltaX) > Math.abs(deltaY) * 1.3 &&
      deltaTime < 600
    ) {
      if (deltaX < 0 && activeIdx < slides.length - 1) {
        // Swipe Left -> Next collection
        gotoSlide(activeIdx + 1);
      } else if (deltaX > 0 && activeIdx > 0) {
        // Swipe Right -> Prev collection
        gotoSlide(activeIdx - 1);
      }
    }
  };

  return (
    <section
      ref={rootRef}
      id="collection"
      className="cs-stage"
      aria-labelledby="collection-heading"
      style={{ backgroundColor: slides[activeIdx].bgColor }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar: Brand Wordmark & Collection Category Nav */}
      <div className="cs-topbar">
        <div className="cs-topbar__brand">
          <span className="cs-topbar__eyebrow">Collection</span>
          <h2 id="collection-heading" className="cs-topbar__title">
            Made <em>for you</em>
          </h2>
        </div>

        <nav className="cs-nav" aria-label="Collection categories">
          {slides.map((slide, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={slide.name}
                type="button"
                onClick={() => gotoSlide(idx)}
                className={`cs-nav__item ${
                  isActive ? "cs-nav__item--active" : ""
                }`}
              >
                <span className="cs-nav__diamond" aria-hidden="true" />
                <span className="cs-nav__label">{slide.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* The 4 Curated Slides Stacked with 3D Perspective Scaling */}
      {slides.map((slide, idx) => (
        <article
          key={slide.name}
          ref={(el) => {
            slidesRef.current[idx] = el;
          }}
          id={slide.href.slice(1)}
          className="cs-slide"
          aria-hidden={activeIdx !== idx}
        >
          <div className="cs-slide__outer">
            <div
              className="cs-slide__inner"
              style={{ backgroundColor: slide.bgColor }}
            >
              <div className="cs-slide__layout">
                {/* Left: Text & Typography Column */}
                <div className="cs-slide__text">
                  <h3 className="cs-slide__category">
                    <LetterTitle text={slide.name} />
                  </h3>

                  <p className="cs-slide__copy">{slide.copy}</p>
                  <p className="cs-slide__note">{slide.note}</p>
                  <a href="#contact" className="cs-slide__cta">
                    {slide.cta} &rarr;
                  </a>
                </div>

                {/* Right: Media Presentation (Square + Macro Detail Circle) */}
                <div className="cs-slide__visual">
                  <div className="cs-media-pair">
                    <figure className="cs-media-square">
                      <div className="cs-media-square__inner">
                        <Image
                          src={slide.image}
                          alt={slide.name}
                          fill
                          priority={idx === 0}
                          sizes="(max-width: 960px) 100vw, 38vw"
                          quality={92}
                          className="cs-media-square__img"
                          style={{ objectPosition: slide.squarePosition }}
                        />
                      </div>
                    </figure>

                    <figure className="cs-media-circle" aria-hidden="true">
                      <div className="cs-media-circle__inner">
                        <Image
                          src={slide.image}
                          alt=""
                          fill
                          sizes="(max-width: 960px) 42vw, 20vw"
                          quality={90}
                          className="cs-media-circle__img"
                          style={{ objectPosition: slide.circlePosition }}
                        />
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}

      {/* Bottom Bar: Indicators & Navigation Controls */}
      <div className="cs-bottombar">
        <div className="cs-bottombar__controls">
          <button
            type="button"
            onClick={() => gotoSlide(activeIdx - 1)}
            disabled={activeIdx === 0}
            className="cs-bottombar__arrow"
            aria-label="Previous collection"
          >
            ‹
          </button>

          <div className="cs-bottombar__track" role="tablist" aria-label="Collections">
            {slides.map((slide, idx) => (
              <button
                key={slide.name}
                type="button"
                onClick={() => gotoSlide(idx)}
                className={`cs-bottombar__tick ${
                  activeIdx === idx ? "cs-bottombar__tick--active" : ""
                }`}
                aria-label={`Go to ${slide.name}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => gotoSlide(activeIdx + 1)}
            disabled={activeIdx === slides.length - 1}
            className="cs-bottombar__arrow"
            aria-label="Next collection"
          >
            ›
          </button>
        </div>
        <span className="cs-bottombar__hint">Scroll to explore</span>
      </div>
    </section>
  );
}
