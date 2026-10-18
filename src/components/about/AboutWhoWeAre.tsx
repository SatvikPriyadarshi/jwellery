"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutWhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      const textCol = section.querySelector(".who-text-col");
      const visualCol = section.querySelector(".who-visual-col");

      gsap.fromTo(
        textCol,
        { autoAlpha: 0, y: 35 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textCol,
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        visualCol,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: {
            trigger: visualCol,
            start: "top 78%",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="who-we-are"
      className="relative bg-[var(--color-ivory)] py-24 sm:py-32 text-[var(--color-charcoal)] overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-14">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          
          {/* Narrative Column */}
          <div className="who-text-col lg:col-span-6 space-y-6">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-[var(--color-champagne)] font-medium">
              Who We Are
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.12] text-[var(--color-dark-forest)] font-light">
              A Family Devotion to Nature’s <br />
              <span className="italic font-normal text-[var(--color-champagne)]">
                Rarest Treasures
              </span>
            </h2>

            <p className="font-serif text-lg sm:text-xl font-normal text-[var(--color-emerald)] leading-relaxed italic">
              &ldquo;Uni Fine Jewelry is a family-owned business built on a legacy of passion, expertise, and an enduring appreciation for the beauty of fine gemstones.&rdquo;
            </p>

            <div className="space-y-4 text-sm sm:text-base font-sans font-light leading-relaxed text-[#3d4740]">
              <p>
                With roots in the gemstone industry dating back to 1965, our journey
                spans generations of dedication to sourcing, understanding, and
                transforming some of nature’s most extraordinary treasures into
                timeless creations.
              </p>
              <p>
                Our story began with the trading of coloured gemstones and diamonds,
                an endeavour that established our foundation in gemstone knowledge,
                quality, and craftsmanship. By 1990, we had expanded into the
                manufacturing of coloured gemstones, developing particular expertise
                in Zambian emeralds. This chapter of our journey continued until
                2018, deepening our understanding of gemstones from their natural
                origins to their finest finished forms.
              </p>
              <p>
                Building upon decades of experience, we entered the world of fine
                jewelry manufacturing, bringing together our gemstone heritage and
                the artistry of skilled craftsmen. Today, Uni Fine Jewelry combines
                generations of knowledge with meticulous attention to detail to
                create exquisite jewelry that celebrates the enduring beauty of gold,
                diamonds, emeralds, and other precious coloured gemstones.
              </p>
              <p>
                Every piece reflects our commitment to superior materials,
                thoughtful craftsmanship, and timeless design. From classic creations
                to distinctive statement pieces, our jewelry is made to be treasured,
                cherished, and passed down through generations.
              </p>
            </div>

            {/* Signature & Seal */}
            <div className="pt-6 border-t border-[var(--color-champagne)]/25 flex items-center justify-between">
              <div>
                <p className="font-serif italic text-lg text-[var(--color-emerald)]">
                  The Uni Fine Jewelry Family
                </p>
                <p className="text-xs tracking-wider uppercase text-[#738078] mt-0.5 font-sans">
                  Jaipur &bull; Kuala Lumpur
                </p>
              </div>
              <div className="text-xs tracking-widest uppercase text-[var(--color-champagne)] font-medium font-sans">
                Handcrafted Heirlooms
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="who-visual-col lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backing Border */}
              <div className="absolute -inset-4 sm:-inset-6 border border-[var(--color-champagne)]/30 pointer-events-none" />
              
              {/* Main Editorial Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0c241c] shadow-2xl shadow-[#102a31]/20">
                <Image
                  src="/images/jewellery/about-us-editorial.jpg"
                  alt="Fine jewelry emerald and diamond creation worn with dark velvet"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c241c]/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Inset Macro Detail Image */}
              <div className="absolute -bottom-8 -left-6 sm:-bottom-10 sm:-left-10 w-36 sm:w-48 aspect-square border border-[var(--color-champagne)] bg-[#0b1914] shadow-2xl overflow-hidden hidden sm:block">
                <Image
                  src="/images/jewellery/about-emerald-detail.jpg"
                  alt="Emerald cut gemstone detail with vivid green saturation"
                  fill
                  sizes="192px"
                  className="object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-[#0b211c]/85 py-1 px-2 text-[10px] tracking-widest uppercase text-[var(--color-champagne)] text-center font-sans">
                  Zambian Emerald
                </div>
              </div>

              {/* Provenance Badge */}
              <div className="absolute -top-6 -right-4 sm:-right-8 bg-[#0b211c] border border-[var(--color-champagne)]/50 p-4 text-[var(--color-ivory)] shadow-xl max-w-[200px]">
                <p className="text-[var(--color-champagne)] text-[11px] tracking-widest uppercase font-medium font-sans">
                  Provenance
                </p>
                <p className="mt-1 text-xs text-[var(--color-ivory)]/80 font-light leading-snug font-sans">
                  Responsibly sourced, cut by master lapidaries, set in 18K gold.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
