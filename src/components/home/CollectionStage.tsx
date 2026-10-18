"use client";

import Image from "next/image";
import { useRef, useState } from "react";
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
        <span key={`${text}-${i}`} className="cs-letter-mask" aria-hidden="true">
          <span className="cs-letter">{char === " " ? "\u00A0" : char}</span>
        </span>
      ))}
    </span>
  );
}

export default function CollectionStage() {
  const rootRef = useRef<HTMLElement>(null);
  const gotoRef = useRef<((index: number, direction?: number) => void) | null>(
    null,
  );
  const [activeIdx, setActiveIdx] = useState(0);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const sections = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".cs-slide"),
      );
      const outerWrappers = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".cs-slide__outer"),
      );
      const innerWrappers = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".cs-slide__inner"),
      );
      const squareBoxes = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".cs-media-square"),
      );
      const squareImages = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".cs-media-square__img"),
      );
      const circleBoxes = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".cs-media-circle"),
      );
      const circleImages = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".cs-media-circle__img"),
      );
      const headings = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".cs-slide__category"),
      );
      const copies = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".cs-slide__copy"),
      );
      const notes = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".cs-slide__note"),
      );
      const ctas = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".cs-slide__cta"),
      );
      const topbar = root.querySelector(".cs-topbar") as HTMLElement | null;

      const slideCount = sections.length;
      const textBlocks = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".cs-slide__text"),
      );

      let animating = false;
      let currentIndex = 0;
      let pendingIndex: number | null = null;
      let activeTimeline: gsap.core.Timeline | null = null;
      let pinTrigger: ScrollTrigger;
      let enteredOnce = false;

      const lettersOf = (heading: HTMLElement) =>
        gsap.utils.toArray<HTMLElement>(heading.querySelectorAll(".cs-letter"));

      const indexFromProgress = (progress: number) =>
        Math.min(
          slideCount - 1,
          Math.max(0, Math.round(progress * (slideCount - 1))),
        );

      const scrollToIndex = (index: number, smooth = true) => {
        if (!pinTrigger) return;
        const clamped = Math.min(slideCount - 1, Math.max(0, index));
        const progress =
          slideCount <= 1 ? 0 : clamped / (slideCount - 1);
        const y =
          pinTrigger.start +
          (pinTrigger.end - pinTrigger.start) * progress;
        window.scrollTo({
          top: y,
          behavior: smooth ? "smooth" : ("instant" as ScrollBehavior),
        });
      };

      const applyTheme = (index: number, immediate = false) => {
        const slide = slides[index];
        root.style.setProperty("--cs-accent", slide.accentColor);
        root.style.setProperty("--cs-surface", slide.surfaceColor);
        if (immediate) {
          gsap.set(root, { backgroundColor: slide.bgColor });
        } else {
          gsap.to(root, {
            backgroundColor: slide.bgColor,
            duration: reduce ? 0.01 : 0.7,
            ease: "power2.inOut",
          });
        }
      };

      const resetText = (index: number) => {
        const letters = lettersOf(headings[index]);
        gsap.set(letters, { yPercent: 0 });
        gsap.set([copies[index], notes[index], ctas[index]], {
          y: 0,
          autoAlpha: 1,
        });
        gsap.set(textBlocks[index], { autoAlpha: 1 });
      };

      const syncSlide = (index: number) => {
        if (activeTimeline) {
          activeTimeline.kill();
          activeTimeline = null;
        }
        animating = false;
        pendingIndex = null;
        currentIndex = index;
        setActiveIdx(index);
        gsap.set(outerWrappers, { xPercent: 100 });
        gsap.set(innerWrappers, { xPercent: -100 });
        gsap.set(outerWrappers[index], { xPercent: 0 });
        gsap.set(innerWrappers[index], { xPercent: 0 });
        gsap.set(sections, { autoAlpha: 0, zIndex: 0 });
        gsap.set(sections[index], {
          autoAlpha: 1,
          zIndex: 2,
          visibility: "visible",
        });
        gsap.set(squareBoxes, { xPercent: 0, scale: 1 });
        gsap.set(squareImages, { scale: 1 });
        gsap.set(circleBoxes, { yPercent: 0, scale: 1, autoAlpha: 1 });
        gsap.set(circleImages, { scale: 1.35, rotation: 0 });
        gsap.set(textBlocks, { autoAlpha: 1 });
        headings.forEach((_, i) => resetText(i));
        applyTheme(index, true);
      };

      syncSlide(0);

      if (topbar && !reduce) {
        gsap.fromTo(
          topbar,
          { y: -28, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.9, ease: "power3.out", delay: 0.05 },
        );
      }

      const animateTo = (index: number, direction: number) => {
        if (index === currentIndex) return;

        if (activeTimeline) {
          activeTimeline.kill();
          activeTimeline = null;
          animating = false;
          gsap.set(sections, { autoAlpha: 0, zIndex: 0 });
          gsap.set(textBlocks, { autoAlpha: 1 });
          headings.forEach((_, i) => resetText(i));
        }

        animating = true;
        const prevIndex = currentIndex;
        currentIndex = index;
        setActiveIdx(index);
        applyTheme(index, false);

        const nextLetters = lettersOf(headings[index]);
        const prevLetters = lettersOf(headings[prevIndex]);
        const prevText = textBlocks[prevIndex];
        const nextText = textBlocks[index];
        const fast = reduce || Math.abs(index - prevIndex) > 1;
        const dur = fast ? (reduce ? 0.01 : 0.4) : 0.65;

        gsap.set(nextText, { autoAlpha: 0 });
        gsap.set(nextLetters, { yPercent: 110 * direction });
        gsap.set([copies[index], notes[index], ctas[index]], {
          y: 18 * direction,
          autoAlpha: 0,
        });

        gsap.set(sections, { zIndex: 0 });
        gsap.set(sections[prevIndex], { zIndex: 1, autoAlpha: 1 });
        gsap.set(sections[index], {
          zIndex: 2,
          autoAlpha: 1,
          visibility: "visible",
        });

        const tl = gsap.timeline({
          defaults: { duration: dur, ease: "expo.inOut" },
          onComplete: () => {
            gsap.set(sections[prevIndex], { autoAlpha: 0, zIndex: 0 });
            gsap.set(prevText, { autoAlpha: 1 });
            gsap.set(prevLetters, { yPercent: 0 });
            gsap.set([copies[prevIndex], notes[prevIndex], ctas[prevIndex]], {
              y: 0,
              autoAlpha: 1,
            });
            activeTimeline = null;
            animating = false;
            if (pendingIndex !== null && pendingIndex !== currentIndex) {
              const next = pendingIndex;
              pendingIndex = null;
              requestSlide(next);
            }
          },
        });
        activeTimeline = tl;

        tl.to(
          prevLetters,
          {
            yPercent: -105 * direction,
            duration: reduce ? 0.01 : dur * 0.4,
            stagger: reduce || fast ? 0 : 0.01,
            ease: "power2.in",
          },
          0,
        )
          .to(
            [copies[prevIndex], notes[prevIndex], ctas[prevIndex]],
            {
              y: -12 * direction,
              autoAlpha: 0,
              duration: reduce ? 0.01 : dur * 0.32,
              ease: "power2.in",
            },
            0,
          )
          .to(
            prevText,
            {
              autoAlpha: 0,
              duration: reduce ? 0.01 : dur * 0.22,
              ease: "power1.in",
            },
            dur * 0.15,
          )
          .fromTo(
            outerWrappers[index],
            { xPercent: 100 * direction },
            { xPercent: 0 },
            0,
          )
          .fromTo(
            innerWrappers[index],
            { xPercent: -100 * direction },
            { xPercent: 0 },
            0,
          )
          .fromTo(
            squareBoxes[index],
            { xPercent: 12 * direction, scale: 0.96 },
            { xPercent: 0, scale: 1 },
            0,
          )
          .fromTo(
            squareImages[index],
            { scale: 1.14 },
            { scale: 1, duration: reduce ? 0.01 : dur * 1.1 },
            0,
          )
          .fromTo(
            circleBoxes[index],
            { yPercent: 24 * direction, scale: 0.82, autoAlpha: 0 },
            {
              yPercent: 0,
              scale: 1,
              autoAlpha: 1,
              duration: reduce ? 0.01 : dur,
            },
            0.06,
          )
          .fromTo(
            circleImages[index],
            { scale: 1.55, rotation: 5 * direction },
            {
              scale: 1.35,
              rotation: 0,
              duration: reduce ? 0.01 : dur * 1.1,
            },
            0.04,
          )
          .set(nextText, { autoAlpha: 1 }, reduce ? 0 : dur * 0.42)
          .to(
            nextLetters,
            {
              yPercent: 0,
              duration: reduce ? 0.01 : dur * 0.85,
              stagger: reduce || fast ? 0 : 0.022,
              ease: "power3.out",
            },
            reduce ? 0 : dur * 0.44,
          )
          .to(
            [copies[index], notes[index], ctas[index]],
            {
              y: 0,
              autoAlpha: 1,
              duration: reduce ? 0.01 : dur * 0.75,
              stagger: reduce || fast ? 0 : 0.05,
              ease: "power3.out",
            },
            reduce ? 0 : dur * 0.55,
          );
      };

      const requestSlide = (index: number) => {
        const clamped = Math.min(slideCount - 1, Math.max(0, index));
        if (clamped === currentIndex && !animating) return;

        if (animating) {
          pendingIndex = clamped;
          /* Fast scroll: cut the current transition and jump to the latest slide */
          if (Math.abs(clamped - currentIndex) >= 1 && activeTimeline) {
            const dir = clamped > currentIndex ? 1 : -1;
            pendingIndex = null;
            animateTo(clamped, dir);
          }
          return;
        }

        animateTo(clamped, clamped > currentIndex ? 1 : -1);
      };

      /* Nav / keyboard: scroll the pin progress to that slide */
      gotoRef.current = (index: number) => {
        scrollToIndex(index, true);
      };

      pinTrigger = ScrollTrigger.create({
        trigger: root,
        start: "top top",
        /* One viewport of scroll distance per slide — must scroll through all */
        end: () => `+=${Math.round(window.innerHeight * slideCount)}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        ...(reduce
          ? {}
          : {
              snap: {
                snapTo: (value: number) => {
                  if (slideCount <= 1) return 0;
                  const i = Math.round(value * (slideCount - 1));
                  return i / (slideCount - 1);
                },
                duration: { min: 0.1, max: 0.3 },
                delay: 0,
                ease: "power1.inOut",
              },
            }),
        onUpdate: (self) => {
          requestSlide(indexFromProgress(self.progress));
        },
        onEnter: () => {
          if (!enteredOnce) {
            enteredOnce = true;
            if (!reduce) {
              const letters = lettersOf(headings[0]);
              gsap.fromTo(
                letters,
                { yPercent: 110 },
                {
                  yPercent: 0,
                  duration: 0.75,
                  stagger: 0.03,
                  ease: "power3.out",
                },
              );
              gsap.fromTo(
                [copies[0], notes[0], ctas[0]],
                { y: 20, autoAlpha: 0 },
                {
                  y: 0,
                  autoAlpha: 1,
                  duration: 0.65,
                  stagger: 0.08,
                  ease: "power3.out",
                  delay: 0.15,
                },
              );
            }
          }
        },
        onEnterBack: () => {
          requestSlide(slideCount - 1);
        },
        onLeaveBack: () => {
          syncSlide(0);
        },
      });

      const onKey = (event: KeyboardEvent) => {
        const inPin =
          pinTrigger.isActive ||
          (window.scrollY >= pinTrigger.start - 2 &&
            window.scrollY <= pinTrigger.end + 2);
        if (!inPin) return;

        if (event.code === "ArrowUp" || event.code === "ArrowLeft") {
          event.preventDefault();
          scrollToIndex(currentIndex - 1, true);
        }
        if (
          event.code === "ArrowDown" ||
          event.code === "ArrowRight" ||
          event.code === "Space"
        ) {
          event.preventDefault();
          scrollToIndex(currentIndex + 1, true);
        }
      };

      window.addEventListener("keydown", onKey);

      return () => {
        gotoRef.current = null;
        if (activeTimeline) activeTimeline.kill();
        pinTrigger.kill();
        window.removeEventListener("keydown", onKey);
      };
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      id="collection"
      className="cs-stage"
      aria-labelledby="collection-heading"
    >
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
                onClick={() => gotoRef.current?.(idx)}
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

      {slides.map((slide) => (
        <article
          key={slide.name}
          id={slide.href.slice(1)}
          className="cs-slide"
        >
          <div className="cs-slide__outer">
            <div
              className="cs-slide__inner"
              style={{ backgroundColor: slide.bgColor }}
            >
              <div className="cs-slide__layout">
                <div className="cs-slide__text">
                  <h3 className="cs-slide__category">
                    <LetterTitle text={slide.name} />
                  </h3>

                  <p className="cs-slide__copy">{slide.copy}</p>
                  <p className="cs-slide__note">{slide.note}</p>
                  <a href="#contact" className="cs-slide__cta">
                    {slide.cta}
                  </a>
                </div>

                <div className="cs-slide__visual">
                  <div className="cs-media-pair">
                    <figure className="cs-media-square">
                      <div className="cs-media-square__inner">
                        <Image
                          src={slide.image}
                          alt={slide.name}
                          fill
                          priority={slide.name === "Rings"}
                          sizes="(max-width: 960px) 84vw, 38vw"
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

      <div className="cs-bottombar" aria-hidden="true">
        <div className="cs-bottombar__track">
          {slides.map((slide, idx) => (
            <span
              key={slide.name}
              className={`cs-bottombar__tick ${
                activeIdx === idx ? "cs-bottombar__tick--active" : ""
              }`}
            />
          ))}
        </div>
        <span className="cs-bottombar__hint">Scroll</span>
      </div>
    </section>
  );
}
