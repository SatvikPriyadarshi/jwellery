"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./PopularJewelry.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export interface JewelryProduct {
  name: string;
  category: string;
  href: string;
  image: string;
  priceLabel: string;
  badge?: string;
}

const products: JewelryProduct[] = [
  {
    name: "The Drop Emerald And Diamond",
    category: "Earrings",
    href: "#collection-earrings",
    image: "/images/jewellery/drop-emerald-earrings.jpg",
    priceLabel: "Contact for Pricing",
    badge: "Bestseller",
  },
  {
    name: "Classic Diamond Tennis",
    category: "Bracelet",
    href: "#collection-bracelets",
    image: "/images/jewellery/diamond-tennis-bracelet.jpg",
    priceLabel: "Contact for Pricing",
  },
  {
    name: "Multicolor Tourmaline",
    category: "Necklace",
    href: "#collection-necklaces",
    image: "/images/jewellery/tourmaline-necklace.jpg",
    priceLabel: "Contact for Pricing",
  },
  {
    name: "Elegant Double-Strand",
    category: "Necklace",
    href: "#collection-necklaces",
    image: "/images/jewellery/double-strand-necklace.jpg",
    priceLabel: "Contact for Pricing",
  },
];

export default function PopularJewelry() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const heading = root.querySelector(".pj-heading");
      const cards = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".pj-card"),
      );

      if (reduce) {
        gsap.set([heading, cards], { clearProps: "all" });
        return;
      }

      gsap.set(heading, { autoAlpha: 0, y: 14 });
      gsap.set(cards, { autoAlpha: 0, y: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          once: true,
        },
      });

      tl.to(heading, {
        autoAlpha: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out",
      }).to(
        cards,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.25",
      );

      const canHover = window.matchMedia("(hover: hover)").matches;
      if (!canHover) return;

      const cleanups: Array<() => void> = [];

      cards.forEach((card) => {
        const img = card.querySelector(".pj-card__img");
        const arrow = card.querySelector(".pj-card__arrow-icon");

        const enter = () => {
          if (img) {
            gsap.to(img, {
              scale: 1.04,
              duration: 0.65,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
          if (arrow) {
            gsap.to(arrow, {
              x: 3,
              duration: 0.3,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        };
        const leave = () => {
          if (img) {
            gsap.to(img, {
              scale: 1,
              duration: 0.65,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
          if (arrow) {
            gsap.to(arrow, {
              x: 0,
              duration: 0.3,
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
      id="popular"
      className="pj-section"
      aria-labelledby="popular-heading"
    >
      <header className="pj-heading">
        <div className="pj-heading__left">
          <p className="pj-eyebrow">
            Our Collection
          </p>
          <h2 id="popular-heading" className="pj-title">
            Popular Jewelry
          </h2>
        </div>
        <a href="#collection" className="pj-view-all">
          View All Collections
          <span aria-hidden="true">→</span>
        </a>
      </header>

      <ul className="pj-grid">
        {products.map((product) => (
          <li key={product.name} className="pj-card">
            <a
              href={product.href}
              className="pj-card__link"
              aria-label={`${product.name} — ${product.category}. ${product.priceLabel}`}
            >
              <Image
                src={product.image}
                alt={`${product.name} ${product.category}`}
                fill
                sizes="(max-width: 720px) 80vw, (max-width: 1024px) 46vw, 24vw"
                className="pj-card__img"
              />

              <span className="pj-card__scrim" aria-hidden="true" />

              {product.badge ? (
                <span className="pj-card__badge">{product.badge}</span>
              ) : null}

              <div className="pj-card__overlay">
                <div className="pj-card__info">
                  <h3 className="pj-card__name">{product.name}</h3>
                  <p className="pj-card__category">{product.category}</p>
                  <span className="pj-card__rule" aria-hidden="true" />
                  <p className="pj-card__price">{product.priceLabel}</p>
                </div>

                <span className="pj-card__arrow" aria-hidden="true">
                  <span className="pj-card__arrow-icon">→</span>
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
