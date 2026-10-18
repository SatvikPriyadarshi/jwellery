"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AcidSquares from "@/components/effects/AcidSquares";

export default function Hero() {
  const [enableEffect, setEnableEffect] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const sync = () => setEnableEffect(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

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
        quality={90}
      />

      {enableEffect ? (
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
      ) : null}
    </section>
  );
}
