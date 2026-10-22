"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./AboutStory.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutStory() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const isMobile = window.innerWidth <= 900;

      if (isMobile) {
        const mobEyebrow = root.querySelector(".about-mob-eyebrow");
        const mobTitle = root.querySelector(".about-mob-title");
        const mobCopy = root.querySelector(".about-mob-copy");
        const mobActions = root.querySelector(".about-mob-actions");
        const mobPortal = root.querySelector(".about-mob-portal");
        const mobArrow = root.querySelector(".about-mob-cta__arrow");
        const mobCta = root.querySelector(".about-mob-cta");

        if (reduce) {
          gsap.set(
            [mobEyebrow, mobTitle, mobCopy, mobActions, mobPortal],
            { clearProps: "all" }
          );
          return;
        }

        gsap.set(
          [mobEyebrow, mobTitle, mobCopy, mobActions, mobPortal],
          { autoAlpha: 0, y: 18 }
        );

        const tlMob = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 82%",
            once: true,
          },
        });

        tlMob
          .to(mobEyebrow, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" })
          .to(
            mobTitle,
            { autoAlpha: 1, y: 0, duration: 0.65, ease: "power2.out" },
            "-=0.25"
          )
          .to(
            mobCopy,
            { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" },
            "-=0.35"
          )
          .to(
            mobActions,
            { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out" },
            "-=0.3"
          )
          .to(
            mobPortal,
            { autoAlpha: 1, y: 0, duration: 0.75, ease: "power2.out" },
            "-=0.2"
          );

        if (mobCta && mobArrow) {
          const enter = () => gsap.to(mobArrow, { x: 4, duration: 0.3, ease: "power2.out" });
          const leave = () => gsap.to(mobArrow, { x: 0, duration: 0.3, ease: "power2.out" });
          mobCta.addEventListener("pointerenter", enter);
          mobCta.addEventListener("pointerleave", leave);
        }

        return;
      }

      const eyebrow = root.querySelector(".about-eyebrow");
      const title = root.querySelector(".about-title");
      const copy = root.querySelector(".about-copy");
      const cta = root.querySelector(".about-cta");
      const visual = root.querySelector(".about-visual");
      const photo = root.querySelector(".about-photo__img");
      const arrow = root.querySelector(".about-cta__arrow");

      if (reduce) {
        gsap.set([eyebrow, title, copy, cta, visual], {
          clearProps: "all",
        });
        return;
      }

      gsap.set(eyebrow, { autoAlpha: 0, y: 10 });
      gsap.set(title, { autoAlpha: 0, y: 22 });
      gsap.set(copy, { autoAlpha: 0, y: 16 });
      gsap.set(cta, { autoAlpha: 0, y: 12 });
      gsap.set(visual, { autoAlpha: 0, y: 18 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 78%",
          once: true,
        },
      });

      tl.to(eyebrow, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" })
        .to(
          title,
          { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.25",
        )
        .to(
          copy,
          { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        )
        .to(
          cta,
          { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3",
        )
        .to(
          visual,
          { autoAlpha: 1, y: 0, duration: 0.85, ease: "power2.out" },
          0.15,
        );

      const canHover = window.matchMedia("(hover: hover)").matches;
      if (!canHover) return;

      const onPhotoEnter = () => {
        if (!photo) return;
        gsap.to(photo, {
          scale: 1.03,
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        });
      };
      const onPhotoLeave = () => {
        if (!photo) return;
        gsap.to(photo, {
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        });
      };
      const onCtaEnter = () => {
        if (!arrow) return;
        gsap.to(arrow, {
          x: 4,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
      };
      const onCtaLeave = () => {
        if (!arrow) return;
        gsap.to(arrow, {
          x: 0,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      visual?.addEventListener("pointerenter", onPhotoEnter);
      visual?.addEventListener("pointerleave", onPhotoLeave);
      cta?.addEventListener("pointerenter", onCtaEnter);
      cta?.addEventListener("pointerleave", onCtaLeave);

      return () => {
        visual?.removeEventListener("pointerenter", onPhotoEnter);
        visual?.removeEventListener("pointerleave", onPhotoLeave);
        cta?.removeEventListener("pointerenter", onCtaEnter);
        cta?.removeEventListener("pointerleave", onCtaLeave);
      };
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      id="story"
      className="about-section"
      aria-labelledby="about-heading"
    >
      {/* Desktop Layout (≥ 901px) */}
      <div className="about-shell about-desktop-only">
        <div className="about-copycol">
          <p className="about-eyebrow">
            <span className="about-eyebrow__bar" aria-hidden="true" />
            About Us
          </p>
          <h2 id="about-heading" className="about-title">
            The Art of Jewelry:
            <br />
            <em>Our Journey</em>
          </h2>
          <p className="about-copy">
            Uni Fine Jewelry is a family-owned business that specializes in
            hand-crafted fine jewelry that is both timeless and precious. Using
            superior quality materials, our artisans create classic pieces with
            unparalleled artistic and luxury value. Whether it’s gold, emerald,
            or diamond jewelry, we take pride in our delivery of exquisite
            pieces that you will cherish for years to come.
          </p>
          <Link href="/about" prefetch={false} className="about-cta">
            <span>View More</span>
            <span className="about-cta__arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        <div className="about-visual">
          <div className="about-panel" aria-hidden="true" />
          <svg
            className="about-arc"
            viewBox="0 0 160 160"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M148 8C78 8 18 68 18 148"
              stroke="#C6A15B"
              strokeWidth="1"
            />
          </svg>
          <figure className="about-inset">
            <Image
              src="/images/jewellery/about-emerald-detail.jpg"
              alt="A single emerald-cut green gemstone"
              fill
              sizes="140px"
              className="about-inset__img"
            />
          </figure>
          <figure className="about-photo">
            <Image
              src="/images/jewellery/about-us-editorial.jpg"
              alt="Emerald and diamond earrings, ring, and bracelet worn with deep green velvet"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              className="about-photo__img"
            />
          </figure>
        </div>
      </div>

      {/* Mobile Reference UI Layout (< 901px) */}
      <div className="about-mob-container">
        {/* Upper Hero Stage: Model Editorial Background + Scrim + Text Overlay */}
        <div className="about-mob-hero">
          <div className="about-mob-hero__media">
            <Image
              src="/images/jewellery/about-us-editorial.jpg"
              alt="Model wearing emerald earrings, ring, and bracelet with emerald velvet dress"
              fill
              priority
              sizes="100vw"
              quality={92}
              className="about-mob-hero__img"
            />
            <div className="about-mob-hero__scrim" aria-hidden="true" />
          </div>

          <div className="about-mob-hero__content">
            <p className="about-mob-eyebrow">
              <span className="about-mob-eyebrow__bar" aria-hidden="true" />
              <span>About Us</span>
            </p>

            <h2 className="about-mob-title">
              The Art of
              <br />
              Jewelry:
              <br />
              <em>Our Journey</em>
            </h2>

            <p className="about-mob-copy">
              Uni Fine Jewelry is a family-owned business that specializes in
              hand-crafted fine jewelry that is both timeless and precious.
              Using superior quality materials, our artisans create classic
              pieces with unparalleled artistic and luxury value.
            </p>

            <div className="about-mob-actions">
              <Link
                href="/about"
                prefetch={false}
                className="about-mob-cta"
                aria-label="See more about our journey"
              >
                <span>SEE MORE</span>
                <span className="about-mob-cta__arrow" aria-hidden="true">
                  →
                </span>
              </Link>

              <div
                className="about-mob-chapter"
                aria-label="Chapter 01 of 03: Our Story"
              >
                <div className="about-mob-chapter__badge">
                  <span className="about-mob-chapter__num">01</span>
                  <span
                    className="about-mob-chapter__divider"
                    aria-hidden="true"
                  />
                  <span className="about-mob-chapter__num">03</span>
                </div>
                <span
                  className="about-mob-chapter__line"
                  aria-hidden="true"
                />
                <span className="about-mob-chapter__label">
                  OUR
                  <br />
                  STORY
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Curved Stage: Warm Marble Base + Sweeping Portal framing Glowing Cut Emerald */}
        <div className="about-mob-portal">
          <div className="about-mob-portal__base">
            {/* Left Emblem: Gold 4-Point Diamond Star + Vertical Hairline + TIMELESS CRAFTSMANSHIP */}
            <div className="about-mob-emblem" aria-hidden="true">
              <svg
                className="about-mob-emblem__star"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2L13.8 9.5L21.3 12L13.8 14.5L12 22L10.2 14.5L2.7 12L10.2 9.5L12 2Z"
                  fill="#C6A15B"
                />
              </svg>
              <span className="about-mob-emblem__line" />
              <p className="about-mob-emblem__text">
                <span>TIMELESS</span>
                <span>CRAFTSMANSHIP</span>
              </p>
            </div>

            {/* Sweeping Arched Curved Portal with Glowing Cut Emerald Detail */}
            <div className="about-mob-portal__frame">
              <svg
                viewBox="0 0 472 380"
                className="about-mob-portal__svg"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <clipPath id="about-mob-curve-clip">
                    <path d="M 0 0 C 35 15 56 45 56 95 C 56 145 92 190 140 235 C 195 285 270 325 472 355 L 472 0 Z" />
                  </clipPath>
                  <linearGradient
                    id="about-mob-gold-stroke"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#F6E2B8" />
                    <stop offset="45%" stopColor="#C6A15B" />
                    <stop offset="100%" stopColor="#8E6C2E" />
                  </linearGradient>
                </defs>

                {/* Glowing Faceted Emerald Gemstone on Green Marble */}
                <image
                  href="/images/jewellery/about-emerald-detail.jpg"
                  width="472"
                  height="380"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#about-mob-curve-clip)"
                />

                {/* Deep Emerald Velvet Tint Overlay inside Portal */}
                <path
                  d="M 0 0 C 35 15 56 45 56 95 C 56 145 92 190 140 235 C 195 285 270 325 472 355 L 472 0 Z"
                  fill="rgba(6, 20, 15, 0.16)"
                />

                {/* Gold Boundary Stroke outlining the sweeping curve */}
                <path
                  d="M 0 0 C 35 15 56 45 56 95 C 56 145 92 190 140 235 C 195 285 270 325 472 355"
                  fill="none"
                  stroke="url(#about-mob-gold-stroke)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
