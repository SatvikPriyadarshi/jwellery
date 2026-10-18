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
      <div className="about-shell">
        <div className="about-copycol">
          <p className="about-eyebrow">
            About Us
          </p>
          <h2 id="about-heading" className="about-title">
            The Art of Jewelry:
            <br />
            <em>Our Journey</em>
          </h2>
          <p className="about-copy">
            Uni Fine Jewelry is a family owned business that specializes in
            hand-crafted fine jewelry that is both timeless and precious. Using
            superior quality materials, our artisans create classic pieces with
            unparalleled artistic and luxury value. Whether it’s gold, emerald,
            or diamond jewelry, we take pride in our delivery of exquisite
            pieces that you will cherish for years to come.
          </p>
          <Link href="/about" className="about-cta">
            View More
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
    </section>
  );
}
