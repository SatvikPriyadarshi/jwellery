"use client";

import Image from "next/image";
import AcidSquares from "@/components/effects/AcidSquares";

export default function Hero() {
  return (
    <section
      aria-label="Jewellery hero"
      className="relative isolate h-svh w-full overflow-hidden"
    >
      <Image
        src="/images/jewellery-hero.png"
        alt="Model wearing an emerald and diamond collar necklace, matching drop earrings, and a triangular emerald ring"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        quality={95}
      />

      <div className="pointer-events-none absolute inset-0">
        <AcidSquares
          imageSrc="/images/jewellery-hero.png"
          waves={0}
          pulse={0}
          grain={0}
          fade={0}
          intro={false}
          mouseInteraction
          hoverEffect="none"
          pulseOnClick={false}
          detail="low"
        />
      </div>
    </section>
  );
}
