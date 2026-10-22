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

  // Mobile touch swiping
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const touchStartTime = useRef(0);
  const isMobileTransitioning = useRef(false);

  // Jump to specific slide (both desktop scrub and mobile swiper)
  const gotoSlide = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, index));

      if (typeof window !== "undefined" && window.innerWidth >= 768) {
        const st = scrollTriggerRef.current;
        if (st) {
          const totalDistance = st.end - st.start;
          const targetY =
            st.start + (clamped / (slides.length - 1)) * totalDistance;
          window.scrollTo({ top: targetY, behavior: "smooth" });
        }
      } else {
        // Mobile swiper transition
        if (isMobileTransitioning.current || clamped === activeIdx) return;
        isMobileTransitioning.current = true;

        const currentSlide = slidesRef.current[activeIdx];
        const nextSlide = slidesRef.current[clamped];
        const direction = clamped > activeIdx ? 1 : -1;

        if (currentSlide && nextSlide) {
          gsap.to(currentSlide, {
            x: direction * -70,
            autoAlpha: 0,
            duration: 0.38,
            ease: "power2.inOut",
          });

          gsap.fromTo(
            nextSlide,
            { x: direction * 70, autoAlpha: 0 },
            {
              x: 0,
              autoAlpha: 1,
              duration: 0.42,
              ease: "power2.out",
              onComplete: () => {
                setActiveIdx(clamped);
                isMobileTransitioning.current = false;
              },
            }
          );
        } else {
          setActiveIdx(clamped);
          isMobileTransitioning.current = false;
        }
      }
    },
    [activeIdx]
  );

  // Desktop Master Timeline Scrubbing & Mobile Swiper Setup
  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Set initial slide visibility: only Slide 0 is visible
        slidesRef.current.forEach((slide, i) => {
          if (slide) {
            gsap.set(slide, {
              autoAlpha: i === 0 ? 1 : 0,
              scale: i === 0 ? 1 : 0.25,
              y: 0,
              pointerEvents: i === 0 ? "auto" : "none",
            });
          }
        });

        if (reduce) return;

        // Master Timeline tied to vertical scroll with scrub: 1 smoothing
        const tl = gsap.timeline({
          scrollTrigger: {
            id: "collection-scroll-scrub",
            trigger: root,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${Math.round(window.innerHeight * 3.5)}`,
            onUpdate: (self) => {
              const rawProgress = self.progress * (slides.length - 1);
              const computed = Math.min(
                slides.length - 1,
                Math.max(0, Math.round(rawProgress))
              );
              setActiveIdx(computed);
            },
          },
        });

        scrollTriggerRef.current = tl.scrollTrigger || null;

        // Build transitions between the 4 collections
        for (let i = 0; i < slides.length - 1; i++) {
          const current = slidesRef.current[i];
          const next = slidesRef.current[i + 1];

          // 1. Hold pause on current slide
          tl.to({}, { duration: 0.85 });

          // 2. Outgoing slide: scales up (1.85x) + fades out
          tl.to(
            current,
            {
              scale: 1.85,
              autoAlpha: 0,
              duration: 1,
              ease: "power3.out",
              onStart: () => {
                if (current) current.style.pointerEvents = "none";
              },
            },
            `trans-${i}`
          );

          // 3. Incoming slide: scales from 0.25 to 1 + fades in
          tl.fromTo(
            next,
            {
              scale: 0.25,
              autoAlpha: 0,
              y: 50,
            },
            {
              scale: 1,
              autoAlpha: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              onComplete: () => {
                if (next) next.style.pointerEvents = "auto";
              },
            },
            `trans-${i}`
          );

          // Animate letters and copy on the incoming slide
          if (next) {
            const letters = next.querySelectorAll(".cs-letter");
            const copy = next.querySelector(".cs-slide__copy");
            const note = next.querySelector(".cs-slide__note");
            const cta = next.querySelector(".cs-slide__cta");

            if (letters.length > 0) {
              tl.fromTo(
                letters,
                { yPercent: 100 },
                {
                  yPercent: 0,
                  duration: 0.75,
                  stagger: 0.03,
                  ease: "power3.out",
                },
                `trans-${i}+=0.35`
              );
            }

            if (copy && note && cta) {
              tl.fromTo(
                [copy, note, cta],
                { y: 20, autoAlpha: 0 },
                {
                  y: 0,
                  autoAlpha: 1,
                  duration: 0.65,
                  stagger: 0.08,
                  ease: "power3.out",
                },
                `trans-${i}+=0.45`
              );
            }
          }
        }

        // Final hold period for Slide 3 (Necklaces)
        tl.to({}, { duration: 1.1 });
      });

      mm.add("(max-width: 767px)", () => {
        // Mobile swiper: active slide is visible, others hidden
        slidesRef.current.forEach((slide, i) => {
          if (slide) {
            gsap.set(slide, {
              autoAlpha: i === activeIdx ? 1 : 0,
              scale: 1,
              y: 0,
              pointerEvents: i === activeIdx ? "auto" : "none",
            });
          }
        });
      });

      return () => {
        mm.revert();
      };
    },
    { scope: rootRef }
  );

  // Mobile Touch Gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    if (window.innerWidth >= 768) return;
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
    touchStartTime.current = Date.now();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (window.innerWidth >= 768 || isMobileTransitioning.current) return;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaTime = Date.now() - touchStartTime.current;

    // Horizontal swipe (most natural on mobile touch screen)
    if (
      Math.abs(deltaX) > 32 &&
      Math.abs(deltaX) > Math.abs(deltaY) &&
      deltaTime < 700
    ) {
      if (deltaX < 0 && activeIdx < slides.length - 1) {
        // Swipe Left -> Next collection
        gotoSlide(activeIdx + 1);
      } else if (deltaX > 0 && activeIdx > 0) {
        // Swipe Right -> Prev collection
        gotoSlide(activeIdx - 1);
      }
    } else if (
      Math.abs(deltaY) > 42 &&
      Math.abs(deltaY) > Math.abs(deltaX) &&
      deltaTime < 700
    ) {
      // Vertical swipe fallback
      if (deltaY < 0 && activeIdx < slides.length - 1) {
        // Swipe Up -> Next collection
        gotoSlide(activeIdx + 1);
      } else if (deltaY > 0 && activeIdx > 0) {
        // Swipe Down -> Prev collection
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
