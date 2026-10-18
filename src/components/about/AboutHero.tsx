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
      if (reduce) return;

      const eyebrow = root.querySelector(".hero-eyebrow");
      const title = root.querySelector(".hero-title");
      const copy = root.querySelector(".hero-copy");
      const ctas = root.querySelectorAll(".hero-cta");
      const statBlocks = root.querySelectorAll(".hero-stat");

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        eyebrow,
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.7, delay: 0.15 }
      )
        .fromTo(
          title,
          { autoAlpha: 0, y: 28 },
          { autoAlpha: 1, y: 0, duration: 0.9 },
          "-=0.4"
        )
        .fromTo(
          copy,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ctas,
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.1 },
          "-=0.4"
        )
        .fromTo(
          statBlocks,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.1 },
          "-=0.3"
        );

      // GSAP Number Counters
      const yearObj = { val: 1920 };
      gsap.to(yearObj, {
        val: 1965,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          if (yearCountRef.current) {
            yearCountRef.current.textContent = Math.round(yearObj.val).toString();
          }
        },
      });

      const expObj = { val: 0 };
      gsap.to(expObj, {
        val: 60,
        duration: 1.8,
        delay: 0.2,
        ease: "power2.out",
        onUpdate: () => {
          if (experienceCountRef.current) {
            experienceCountRef.current.textContent = Math.round(expObj.val).toString();
          }
        },
      });

      const genObj = { val: 0 };
      gsap.to(genObj, {
        val: 3,
        duration: 1.5,
        delay: 0.3,
        ease: "power2.out",
        onUpdate: () => {
          if (genCountRef.current) {
            genCountRef.current.textContent = Math.round(genObj.val).toString();
          }
        },
      });
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#0b211c] via-[#102a31] to-[#0c241c] pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 text-[var(--color-ivory)]"
    >
      {/* Caustic Lighting Ambient Glow (NO botanical flower on right) */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(198,161,91,0.14)_0%,transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-0 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(18,60,50,0.45)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-14">
        {/* Eyebrow - Clean Typographic Badge with NO artificial lines */}
        <p className="hero-eyebrow font-sans text-xs tracking-[0.3em] uppercase text-[var(--color-champagne)] font-medium">
          Uni Fine Jewelry &bull; Est. 1965
        </p>

        {/* Hero Title & Opening Statement */}
        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 className="hero-title font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight text-[var(--color-ivory)]">
              A Legacy of <br className="hidden sm:inline" />
              <span className="italic font-normal text-[var(--color-champagne)]">
                Craftsmanship
              </span>{" "}
              Since 1965
            </h1>
            <p className="hero-copy mt-6 max-w-2xl font-sans text-base sm:text-lg text-[var(--color-ivory)]/80 leading-relaxed font-light">
              Built on a foundation of passion, expertise, and an enduring
              reverence for nature’s most extraordinary creations. For three
              generations, we have sourced, cut, and transformed rough gemstones
              into breathtaking fine jewelry designed to become an indelible part
              of your story.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 sm:items-center lg:items-start lg:justify-end">
            <a
              href="#timeline"
              className="hero-cta inline-flex items-center justify-center gap-3 border border-[var(--color-champagne)] px-7 py-3.5 text-xs tracking-[0.24em] uppercase text-[var(--color-champagne)] transition-all duration-300 hover:bg-[var(--color-champagne)] hover:text-[#0b211c] w-full sm:w-auto"
            >
              <span>Explore The Journey</span>
              <span aria-hidden="true" className="text-sm">↓</span>
            </a>
            <a
              href="#who-we-are"
              className="hero-cta inline-flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase text-[var(--color-ivory)]/70 hover:text-[var(--color-champagne)] transition-colors py-2 px-2"
            >
              <span>Who We Are</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Heritage Stats Strip with GSAP Animated Counters */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-[rgba(198,161,91,0.2)] grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="hero-stat">
            <div className="font-serif text-3xl sm:text-4xl text-[var(--color-champagne)] font-light">
              <span ref={yearCountRef}>1965</span>
            </div>
            <p className="mt-1 text-xs tracking-wider uppercase text-[var(--color-ivory)]/60 font-sans">
              Founded in Jaipur
            </p>
          </div>
          <div className="hero-stat">
            <div className="font-serif text-3xl sm:text-4xl text-[var(--color-champagne)] font-light">
              <span ref={experienceCountRef}>60</span>+ Years
            </div>
            <p className="mt-1 text-xs tracking-wider uppercase text-[var(--color-ivory)]/60 font-sans">
              Gemstone Mastery
            </p>
          </div>
          <div className="hero-stat">
            <div className="font-serif text-3xl sm:text-4xl text-[var(--color-champagne)] font-light">
              Zambian
            </div>
            <p className="mt-1 text-xs tracking-wider uppercase text-[var(--color-ivory)]/60 font-sans">
              Emerald Specialization
            </p>
          </div>
          <div className="hero-stat">
            <div className="font-serif text-3xl sm:text-4xl text-[var(--color-champagne)] font-light">
              <span ref={genCountRef}>3</span> Generations
            </div>
            <p className="mt-1 text-xs tracking-wider uppercase text-[var(--color-ivory)]/60 font-sans">
              Family Stewardship
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
