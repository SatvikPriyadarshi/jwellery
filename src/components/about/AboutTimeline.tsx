"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./AboutTimeline.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MILESTONES = [
  {
    id: "era-1965",
    year: "1965",
    title: "The Beginning",
    paragraphs: [
      "Banwari Lal Gupta laid the foundation of the family business in India, beginning with the trading of coloured gemstones and diamonds. This marked the beginning of a legacy built on integrity, industry knowledge and a deep understanding of precious stones.",
    ],
  },
  {
    id: "era-1990",
    year: "1990",
    title: "Expanding Horizons",
    paragraphs: [
      "Taking the business forward, Govind Gupta expanded into the international sourcing and import of rough emeralds from Africa. This marked an important evolution, moving beyond gemstone trading into the processing and manufacturing of finished gemstones, creating greater value through expertise and craftsmanship.",
    ],
  },
  {
    id: "era-2018",
    year: "2018",
    title: "Entering Fine Jewellery Manufacturing",
    paragraphs: [
      "Building on decades of gemstone expertise, the business expanded into fine jewellery manufacturing. With a focus on quality, craftsmanship and attention to detail, this marked a significant milestone in the family’s journey, bringing together gemstone knowledge and jewellery-making capabilities to serve clients across India and international markets.",
    ],
  },
  {
    id: "era-2026",
    year: "2026",
    title: "A Personal Approach to Fine Jewellery",
    paragraphs: [
      "Today, Uni Fine Jewelry continues to build on its six decades of heritage through a more personalised approach to fine jewellery. With a focus on private appointments and bespoke experiences, we serve discerning clients across India, Southeast Asia and the Middle East, offering thoughtfully crafted jewellery backed by generations of expertise.",
      "As we look to the future, our commitment remains the same: honouring our heritage, nurturing relationships and creating fine jewellery that stands the test of time.",
    ],
  },
] as const;

export default function AboutTimeline() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          isDesktop: "(min-width: 801px)",
        },
        (context) => {
          if (!context.conditions?.motion) return;
          const isDesktop = Boolean(context.conditions.isDesktop);

          gsap.fromTo(
            ".vtl-intro > *",
            { autoAlpha: 0, y: 26 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.85,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".vtl-intro",
                start: "top 82%",
                once: true,
              },
            },
          );

          gsap.fromTo(
            ".vtl-line__fill",
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: ".vtl-board",
                start: "top 70%",
                end: "bottom 60%",
                scrub: 0.45,
              },
            },
          );

          gsap.utils.toArray<HTMLElement>(".vtl-stop").forEach((stop) => {
            const copy = stop.querySelector(".vtl-copy");
            const node = stop.querySelector(".vtl-node");
            const fromX =
              isDesktop && stop.classList.contains("vtl-stop--left")
                ? -42
                : isDesktop
                  ? 42
                  : 0;

            if (copy) {
              gsap.fromTo(
                copy,
                { autoAlpha: 0, x: fromX, y: isDesktop ? 0 : 24 },
                {
                  autoAlpha: 1,
                  x: 0,
                  y: 0,
                  duration: 0.9,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: stop,
                    start: "top 80%",
                    once: true,
                    onEnter: () => stop.classList.add("is-lit"),
                  },
                },
              );
            }

            if (node) {
              gsap.fromTo(
                node,
                { autoAlpha: 0, scale: 0.72 },
                {
                  autoAlpha: 1,
                  scale: 1,
                  duration: 0.7,
                  ease: "back.out(1.7)",
                  scrollTrigger: {
                    trigger: stop,
                    start: "top 84%",
                    once: true,
                  },
                },
              );
            }
          });
        },
        sectionRef,
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="vtl-section"
      aria-labelledby="journey-heading"
    >
      <div className="vtl-section__inner">
        <header className="vtl-intro">
          <p className="vtl-eyebrow">Our journey</p>
          <h2 id="journey-heading" className="vtl-title">
            Six Decades of Heritage.{" "}
            <em>A Legacy of Craftsmanship.</em>
          </h2>
          <p className="vtl-lead">
            What began as a passion for gemstones in 1965 has evolved into a
            family-led fine jewellery enterprise with an international presence.
            Across generations, our journey has been shaped by industry
            knowledge, craftsmanship, trusted relationships and an enduring
            commitment to quality.
          </p>
        </header>

        <div className="vtl-board">
          <div className="vtl-line" aria-hidden="true">
            <span className="vtl-line__track" />
            <span className="vtl-line__fill" />
            <span className="vtl-line__cap" />
          </div>

          {MILESTONES.map((milestone, index) => {
            const side = index % 2 === 0 ? "right" : "left";
            return (
              <article
                key={milestone.id}
                id={milestone.id}
                className={`vtl-stop vtl-stop--${side}`}
              >
                <div className="vtl-node">
                  <span>{milestone.year}</span>
                </div>
                <div className="vtl-copy">
                  <h3 className="vtl-copy__title">{milestone.title}</h3>
                  {milestone.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 28)}>{paragraph}</p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
