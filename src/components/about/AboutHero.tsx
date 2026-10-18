import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b211c] via-[#102a31] to-[#0c241c] pt-36 pb-20 sm:pt-44 sm:pb-28 lg:pt-48 lg:pb-32 text-[var(--color-ivory)]">
      {/* Decorative Botanical & Caustic Background Overlays */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(198,161,91,0.18)_0%,transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -right-24 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(18,60,50,0.5)_0%,transparent_70%)] blur-3xl" />

      <Image
        src="/images/jewellery/footer-botanical.jpg"
        alt=""
        width={600}
        height={600}
        className="pointer-events-none absolute top-0 right-0 w-80 md:w-[480px] opacity-15 mix-blend-screen"
        priority
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-14">
        {/* Eyebrow / Provenance Tag */}
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-8 sm:w-12 bg-[var(--color-champagne)]" />
          <p className="font-sans text-[0.72rem] sm:text-xs tracking-[0.28em] uppercase text-[var(--color-champagne)] font-medium">
            Uni Fine Jewelry &bull; Est. 1965
          </p>
          <span className="h-[1px] w-8 sm:w-12 bg-[var(--color-champagne)]" />
        </div>

        {/* Hero Title & Opening Statement */}
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-[var(--color-ivory)]">
              A Legacy of <br className="hidden sm:inline" />
              <span className="italic font-normal text-[var(--color-champagne)] font-display">
                Craftsmanship
              </span>{" "}
              Since 1965
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-base sm:text-lg text-[var(--color-ivory)]/80 leading-relaxed font-light">
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
              className="inline-flex items-center justify-center gap-3 border border-[var(--color-champagne)] px-7 py-3.5 text-xs tracking-[0.24em] uppercase text-[var(--color-champagne)] transition-all duration-300 hover:bg-[var(--color-champagne)] hover:text-[#0b211c] w-full sm:w-auto"
            >
              <span>Explore The Journey</span>
              <span aria-hidden="true" className="text-sm">↓</span>
            </a>
            <a
              href="#who-we-are"
              className="inline-flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase text-[var(--color-ivory)]/70 hover:text-[var(--color-champagne)] transition-colors py-2 px-2"
            >
              <span>Who We Are</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Heritage Stats Strip */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-[rgba(198,161,91,0.25)] grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="font-serif text-3xl sm:text-4xl text-[var(--color-champagne)]">
              1965
            </div>
            <p className="mt-1 text-xs tracking-wider uppercase text-[var(--color-ivory)]/60 font-sans">
              Founded in Jaipur
            </p>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl text-[var(--color-champagne)]">
              60+ Years
            </div>
            <p className="mt-1 text-xs tracking-wider uppercase text-[var(--color-ivory)]/60 font-sans">
              Gemstone Mastery
            </p>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl text-[var(--color-champagne)]">
              Zambian
            </div>
            <p className="mt-1 text-xs tracking-wider uppercase text-[var(--color-ivory)]/60 font-sans">
              Emerald Specialization
            </p>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl text-[var(--color-champagne)]">
              3 Generations
            </div>
            <p className="mt-1 text-xs tracking-wider uppercase text-[var(--color-ivory)]/60 font-sans">
              Family-Owned Stewardship
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
