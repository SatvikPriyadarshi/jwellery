"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutHero() {
  const rootRef = useRef<HTMLElement>(null);
  const yearCountRef = useRef<HTMLSpanElement>(null);
  const experienceCountRef = useRef<HTMLSpanElement>(null);
  const genCountRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      // Handle reduced motion preference
      if (reduce) {
        if (yearCountRef.current) yearCountRef.current.textContent = "1965";
        if (experienceCountRef.current) experienceCountRef.current.textContent = "60";
        if (genCountRef.current) genCountRef.current.textContent = "3";
        return;
      }

      // Initialize counter starting numbers before animation begins
      if (yearCountRef.current) yearCountRef.current.textContent = "1900";
      if (experienceCountRef.current) experienceCountRef.current.textContent = "0";
      if (genCountRef.current) genCountRef.current.textContent = "0";

      const eyebrow = root.querySelector(".hero-eyebrow");
      const titleLines = root.querySelectorAll(".hero-title-line");
      const copy = root.querySelector(".hero-copy");
      const divider = root.querySelector(".hero-stats-divider");
      const statBlocks = root.querySelectorAll(".hero-stat");
      const statLabels = root.querySelectorAll(".hero-stat-label");
      const statWord = root.querySelector(".hero-stat-word");

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          once: true,
        },
      });

      // 1. Eyebrow: reveals slowly with expanding gold tracking
      tl.fromTo(
        eyebrow,
        { autoAlpha: 0, y: 18, letterSpacing: "0.22em" },
        { autoAlpha: 1, y: 0, letterSpacing: "0.3em", duration: 1.1, delay: 0.1 }
      )
        // 2. Title: Majestic line-by-line editorial reveal
        .fromTo(
          titleLines,
          { autoAlpha: 0, y: 32 },
          { autoAlpha: 1, y: 0, duration: 1.2, stagger: 0.22 },
          "-=0.6"
        )
        // 3. Narrative Copy: Dissolves in gently with calm pacing
        .fromTo(
          copy,
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 1.1 },
          "-=0.7"
        )
        // 4. Stats Divider Bar: Hairline unrolls horizontally from left
        .fromTo(
          divider,
          { scaleX: 0, autoAlpha: 0 },
          { scaleX: 1, autoAlpha: 1, duration: 1.2, ease: "power2.inOut" },
          "-=0.4"
        )
        // 6. Stat blocks: Fade in smoothly
        .fromTo(
          statBlocks,
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 1.0, stagger: 0.14 },
          "-=0.6"
        )
        // 7. Stat Labels: Subtitle text drifts in slowly under the numbers
        .fromTo(
          statLabels,
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: 1.2, stagger: 0.14 },
          "-=0.7"
        );

      // Zambian Word Accent: Subtle typography breathing effect
      if (statWord) {
        tl.fromTo(
          statWord,
          { letterSpacing: "0.01em" },
          { letterSpacing: "0.06em", duration: 1.6, ease: "power2.out" },
          "-=1.2"
        );
      }

      // SLOW, DELIBERATE NUMBER COUNTERS (synchronized with stat block reveal)
      // Year Counter: 1900 -> 1965 rolling steadily over 3.0s
      const yearObj = { val: 1900 };
      tl.to(
        yearObj,
        {
          val: 1965,
          duration: 3.0,
          ease: "power1.out",
          onUpdate: () => {
            if (yearCountRef.current) {
              yearCountRef.current.textContent = Math.round(yearObj.val).toString();
            }
          },
        },
        "<" // Aligns with start of statBlocks reveal
      );

      // Experience Counter: 0 -> 60 counting steadily over 2.8s
      const expObj = { val: 0 };
      tl.to(
        expObj,
        {
          val: 60,
          duration: 2.8,
          ease: "power1.out",
          onUpdate: () => {
            if (experienceCountRef.current) {
              experienceCountRef.current.textContent = Math.round(expObj.val).toString();
            }
          },
        },
        "<0.1"
      );

      // Generations Counter: 0 -> 3 stepping deliberately over 2.4s
      const genObj = { val: 0 };
      tl.to(
        genObj,
        {
          val: 3,
          duration: 2.4,
          ease: "power1.out",
          onUpdate: () => {
            if (genCountRef.current) {
              genCountRef.current.textContent = Math.round(genObj.val).toString();
            }
          },
        },
        "<0.2"
      );
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#184343] via-[#184343] to-[#184343] pt-24 pb-16 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 text-[#c1915e]"
    >
      {/* Caustic Lighting Ambient Glow */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(193,145,94,0.14)_0%,transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-0 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(24,67,67,0.45)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-14">
        {/* Eyebrow - Clean Typographic Badge */}
        <p className="hero-eyebrow font-sans text-xs tracking-[0.3em] uppercase text-[var(--color-champagne)] font-medium">
          Uni Fine Jewelry &bull; Est. 1965
        </p>

        {/* Hero Title & Opening Statement */}
        <div className="mt-6">
            <h1 className="hero-title font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight text-[#c1915e]">
              <span className="hero-title-line block">
                A Legacy of
              </span>
              <span className="hero-title-line block mt-1">
                <span className="italic font-normal text-[var(--color-champagne)]">
                  Craftsmanship
                </span>{" "}
                Since 1965
              </span>
            </h1>
            <p className="hero-copy mt-6 max-w-2xl font-sans text-base sm:text-lg text-[#c1915e]/80 leading-relaxed font-light">
              Built on a foundation of passion, expertise, and an enduring
              reverence for nature’s most extraordinary creations. For three
              generations, we have sourced, cut, and transformed rough gemstones
              into breathtaking fine jewelry designed to become an indelible part
              of your story.
            </p>
        </div>

        {/* Heritage Stats Strip with GSAP Animated Counters */}
        <div className="mt-16 sm:mt-20">
          {/* Animated Gold Hairline Divider */}
          <div className="hero-stats-divider h-px w-full bg-[rgba(193,145,94,0.25)] origin-left mb-10" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="hero-stat">
              <div className="font-serif text-3xl sm:text-4xl text-[var(--color-champagne)] font-light tracking-wide">
                <span ref={yearCountRef} className="hero-stat-number inline-block tabular-nums">1965</span>
              </div>
              <p className="hero-stat-label mt-1 text-xs tracking-wider uppercase text-[#c1915e]/65 font-sans">
                Founded in Jaipur
              </p>
            </div>

            <div className="hero-stat">
              <div className="font-serif text-3xl sm:text-4xl text-[var(--color-champagne)] font-light tracking-wide">
                <span ref={experienceCountRef} className="hero-stat-number inline-block tabular-nums">60</span>
                <span className="hero-stat-suffix">+ Years</span>
              </div>
              <p className="hero-stat-label mt-1 text-xs tracking-wider uppercase text-[#c1915e]/65 font-sans">
                Gemstone Mastery
              </p>
            </div>

            <div className="hero-stat">
              <div className="font-serif text-3xl sm:text-4xl text-[var(--color-champagne)] font-light tracking-wide">
                <span className="hero-stat-word inline-block">Zambian</span>
              </div>
              <p className="hero-stat-label mt-1 text-xs tracking-wider uppercase text-[#c1915e]/65 font-sans">
                Emerald Specialization
              </p>
            </div>

            <div className="hero-stat">
              <div className="font-serif text-3xl sm:text-4xl text-[var(--color-champagne)] font-light tracking-wide">
                <span ref={genCountRef} className="hero-stat-number inline-block tabular-nums">3</span>
                <span className="hero-stat-suffix">&nbsp;Generations</span>
              </div>
              <p className="hero-stat-label mt-1 text-xs tracking-wider uppercase text-[#c1915e]/65 font-sans">
                Family Stewardship
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
