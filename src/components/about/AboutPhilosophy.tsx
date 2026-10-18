import Image from "next/image";

function AdamasCrest() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-16 h-16 sm:w-20 sm:h-20 text-[var(--color-champagne)] mx-auto"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      {/* Faceted Brilliant Octagonal Star */}
      <polygon
        points="50,6 64,22 84,22 84,42 96,50 84,58 84,78 64,78 50,94 36,78 16,78 16,58 4,50 16,42 16,22 36,22"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <polygon
        points="50,22 78,50 50,78 22,50"
        strokeWidth="1"
        strokeLinejoin="round"
        fill="rgba(198,161,91,0.06)"
      />
      <circle cx="50" cy="50" r="8" strokeWidth="1" fill="rgba(18,60,50,0.12)" />
      <circle cx="50" cy="50" r="2" fill="currentColor" />
    </svg>
  );
}

export default function AboutPhilosophy() {
  return (
    <section
      id="legacy"
      className="relative bg-[var(--color-ivory)] py-28 sm:py-36 text-[var(--color-charcoal)] overflow-hidden"
    >
      {/* Decorative Radial Backdrop */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(198,161,91,0.14)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-14">
        {/* Crest & Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <AdamasCrest />

          <div className="mt-6 inline-flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[var(--color-champagne)]" />
            <p className="font-sans text-[0.72rem] tracking-[0.28em] uppercase text-[var(--color-champagne)] font-semibold">
              The Meaning Behind Every Creation
            </p>
            <span className="h-[1px] w-8 bg-[var(--color-champagne)]" />
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-dark-forest)] font-normal leading-[1.12]">
            More Than Jewelry. <br />
            <span className="font-display italic text-[var(--color-champagne)]">
              A Living Legacy.
            </span>
          </h2>

          <p className="mt-6 font-sans text-base sm:text-lg text-[#3d4740] font-light leading-relaxed">
            To us, fine jewelry represents far more than luxury. It is a reflection
            of individuality, a symbol of achievement, and a celebration of life’s
            most meaningful moments.
          </p>
        </div>

        {/* Adamas Callout Banner */}
        <div className="mt-16 relative bg-[#0b211c] text-[var(--color-ivory)] border border-[var(--color-champagne)]/40 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-[#102a31]/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-[var(--color-champagne)] text-xs tracking-[0.28em] uppercase font-sans">
                <span className="w-1.5 h-1.5 rotate-45 bg-[var(--color-champagne)]" />
                <span>Etymology &bull; Adamas (ἀδάμας)</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-tight text-[var(--color-ivory)]">
                &ldquo;Indestructible. Unconquerable. <br className="hidden sm:inline" />
                <span className="italic font-display text-[var(--color-champagne)]">
                  The Spirit of Brilliance.
                </span>&rdquo;
              </h3>
              <p className="font-sans text-sm sm:text-base text-[var(--color-ivory)]/85 font-light leading-relaxed">
                The word <em className="text-[var(--color-champagne)] not-italic font-medium">diamond</em> originates
                from the Greek word <em className="text-[var(--color-champagne)] not-italic font-medium">adamas</em>,
                meaning unconquerable or indestructible. To us, this meaning embodies the spirit of
                the individuals who wear our creations: their strength, resilience, brilliance, and individuality.
              </p>
              <p className="font-sans text-sm sm:text-base text-[var(--color-ivory)]/85 font-light leading-relaxed">
                We believe that every person has a story worth celebrating and a brilliance entirely their own.
                Our jewelry is created to honour that spirit — a reminder of how far you have come,
                what you stand for, and the possibilities that lie ahead.
              </p>
            </div>

            <div className="lg:col-span-4 relative aspect-square max-w-[280px] mx-auto w-full border border-[var(--color-champagne)]/30 overflow-hidden bg-[#071612]">
              <Image
                src="/images/jewellery/double-strand-necklace.jpg"
                alt="Exquisite double strand diamond and gemstone necklace"
                fill
                sizes="(max-width: 1024px) 280px, 320px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b211c]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 inset-x-3 text-center text-[10px] tracking-widest uppercase text-[var(--color-champagne)] font-sans">
                Handcrafted Heirloom
              </div>
            </div>

          </div>
        </div>

        {/* Three Pillars of Legacy */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white/70 backdrop-blur-xs border border-[var(--color-champagne)]/30 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[var(--color-champagne)]">
            <div className="w-10 h-10 flex items-center justify-center border border-[var(--color-champagne)] text-[var(--color-champagne)] mb-6">
              <span className="font-serif text-lg">I</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl text-[var(--color-dark-forest)] font-normal">
              An Act of Trust
            </h4>
            <p className="mt-3 font-sans text-sm text-[#465249] font-light leading-relaxed">
              We understand that purchasing fine jewelry is an act of trust. Behind every creation
              lies a promise of quality, authenticity, and enduring value. Wearing it, in turn, becomes
              a deeply personal expression of who you are and what you stand for.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xs border border-[var(--color-champagne)]/30 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[var(--color-champagne)]">
            <div className="w-10 h-10 flex items-center justify-center border border-[var(--color-champagne)] text-[var(--color-champagne)] mb-6">
              <span className="font-serif text-lg">II</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl text-[var(--color-dark-forest)] font-normal">
              Unconquerable Spirit
            </h4>
            <p className="mt-3 font-sans text-sm text-[#465249] font-light leading-relaxed">
              Like the indestructible diamond, true strength is forged over time. Our creations
              serve as a tangible reminder of personal resilience, triumphant milestones, and
              the unwavering dignity of your own unique journey.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xs border border-[var(--color-champagne)]/30 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[var(--color-champagne)]">
            <div className="w-10 h-10 flex items-center justify-center border border-[var(--color-champagne)] text-[var(--color-champagne)] mb-6">
              <span className="font-serif text-lg">III</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl text-[var(--color-dark-forest)] font-normal">
              Generational Heirlooms
            </h4>
            <p className="mt-3 font-sans text-sm text-[#465249] font-light leading-relaxed">
              It can mark a milestone, preserve a memory, express a feeling, or become an heirloom
              that carries a family&apos;s story into the future. Each design is crafted with longevity
              engineered into every bezel, prong, and clasp.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
