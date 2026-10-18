"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./LoyaltyBenefits.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const services = [
  {
    title: "Cleaning & Polishing",
    description:
      "Keep your treasured pieces looking as radiant as the day you got them.",
    icon: "polish" as const,
  },
  {
    title: "Re-engineering it into a new product",
    description:
      "Turn your existing jewellery into something new and meaningful.",
    icon: "reengineer" as const,
  },
  {
    title: "Obtaining a certificate for your product",
    description:
      "Get authenticity and peace of mind with our certification service.",
    icon: "certificate" as const,
  },
];

function ServiceIcon({ type }: { type: (typeof services)[number]["icon"] }) {
  if (type === "polish") {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M9 21c2.5-1.5 5-1.5 8 0h6a2 2 0 0 0 0-4h-5.5l-2.5-1.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 9l1 2.2 2.2 1-2.2 1-1 2.2-1-2.2-2.2-1 2.2-1L17 9zM23 12l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6.6-1.4z"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "reengineer") {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 6.5l2.2 2.2 3.1-.4.8 3 2.8 1.3-1.3 2.8 1.3 2.8-2.8 1.3-.8 3-3.1-.4L16 24.3l-2.2-2.2-3.1.4-.8-3-2.8-1.3 1.3-2.8-1.3-2.8 2.8-1.3.8-3 3.1.4L16 6.5z"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinejoin="round"
        />
        <text
          x="16"
          y="17.5"
          textAnchor="middle"
          fill="currentColor"
          fontSize="5.2"
          fontWeight="600"
          letterSpacing="0.5"
        >
          NEW
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect
        x="7"
        y="8"
        width="18"
        height="15"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M10.5 12.5h6M10.5 16h5M10.5 19.5h4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="20.5" cy="15.5" r="2.3" stroke="currentColor" strokeWidth="1.15" />
      <path
        d="M19.3 17.5l-.6 3.5 1.8-1 1.8 1-.6-3.5"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function LoyaltyBenefits() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const intro = root.querySelector(".lb-intro");
      const cards = root.querySelectorAll(".lb-card");

      if (reduce) {
        gsap.set([intro, cards], { clearProps: "all" });
        return;
      }

      gsap.set([intro, cards], { autoAlpha: 0, y: 18 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 82%",
          once: true,
        },
      });

      tl.to(intro, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }).to(
        cards,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.35",
      );

      const canHover = window.matchMedia("(hover: hover)").matches;
      if (!canHover) return;

      const cleanups: Array<() => void> = [];

      cards.forEach((card) => {
        const arrow = card.querySelector(".lb-card__arrow");
        const enter = () => {
          gsap.to(card, {
            y: -4,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
          });
          if (arrow) {
            gsap.to(arrow, {
              x: 4,
              duration: 0.35,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        };
        const leave = () => {
          gsap.to(card, {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto",
          });
          if (arrow) {
            gsap.to(arrow, {
              x: 0,
              duration: 0.4,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        };
        card.addEventListener("pointerenter", enter);
        card.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          card.removeEventListener("pointerenter", enter);
          card.removeEventListener("pointerleave", leave);
        });
      });

      return () => {
        cleanups.forEach((fn) => fn());
      };
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      id="care"
      className="lb-section"
      aria-labelledby="care-heading"
    >
      <div className="lb-backdrop" aria-hidden="true">
        <Image
          src="/images/jewellery/loyalty-atelier.jpg"
          alt=""
          fill
          sizes="35vw"
          className="lb-backdrop__img"
        />
      </div>

      <div className="lb-row">
        <header className="lb-intro">
          <p className="lb-eyebrow">
            More Than Just Jewellery
            <span className="lb-eyebrow__rule" aria-hidden="true" />
          </p>
          <h2 id="care-heading" className="lb-title">
            Your Loyalty Deserves
            <br />
            Our Extra Care
          </h2>
          <p className="lb-lede">
            Exclusive benefits, personalised service and a more rewarding
            experience — only for you.
          </p>
        </header>

        <ul className="lb-cards">
          {services.map((service) => (
            <li key={service.title} className="lb-card">
              <span className="lb-card__icon" aria-hidden="true">
                <ServiceIcon type={service.icon} />
              </span>
              <h3 className="lb-card__title">{service.title}</h3>
              <p className="lb-card__copy">{service.description}</p>
              <a href="#contact" className="lb-card__cta">
                Contact Us
                <span className="lb-card__arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
