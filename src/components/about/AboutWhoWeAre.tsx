import Image from "next/image";

export default function AboutWhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="relative bg-[var(--color-ivory)] py-24 sm:py-32 text-[var(--color-charcoal)] overflow-hidden"
    >
      {/* Subtle background flourishes */}
      <div className="pointer-events-none absolute top-12 right-0 -mr-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(198,161,91,0.12)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-14">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="font-sans text-xs tracking-[0.28em] uppercase text-[var(--color-champagne)] font-semibold">
                Who We Are
              </span>
              <span className="h-[1px] w-12 bg-[var(--color-champagne)]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.12] text-[var(--color-dark-forest)] font-normal">
              A Family Devotion to Nature’s <br />
              <span className="font-display italic text-[var(--color-champagne)]">
                Rarest Treasures
              </span>
            </h2>

            <p className="font-sans text-lg sm:text-xl font-light text-[var(--color-emerald)] leading-relaxed italic font-display">
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
            <div className="pt-6 border-t border-[var(--color-champagne)]/30 flex items-center justify-between">
              <div>
                <p className="font-display italic text-lg text-[var(--color-emerald)]">
                  The Uni Fine Jewelry Family
                </p>
                <p className="text-xs tracking-wider uppercase text-[#738078] mt-0.5">
                  Jaipur &bull; Kuala Lumpur
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[var(--color-champagne)] font-medium">
                <span className="w-2 h-2 rotate-45 border border-[var(--color-champagne)] bg-[var(--color-champagne)]/20" />
                <span>Handcrafted Heirlooms</span>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backing Architectural Border */}
              <div className="absolute -inset-4 sm:-inset-6 border border-[var(--color-champagne)]/40 pointer-events-none" />
              
              {/* Main Editorial Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0c241c] shadow-2xl shadow-[#102a31]/20">
                <Image
                  src="/images/jewellery/about-us-editorial.jpg"
                  alt="Fine jewelry emerald and diamond creation worn with dark velvet"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c241c]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Inset Macro Detail Image */}
              <div className="absolute -bottom-8 -left-6 sm:-bottom-10 sm:-left-10 w-36 sm:w-48 aspect-square border-2 border-[var(--color-champagne)] bg-[#0b1914] shadow-2xl overflow-hidden hidden sm:block">
                <Image
                  src="/images/jewellery/about-emerald-detail.jpg"
                  alt="Emerald cut gemstone detail with vivid green saturation"
                  fill
                  sizes="192px"
                  className="object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-[#0b211c]/80 backdrop-blur-xs py-1 px-2 text-[10px] tracking-widest uppercase text-[var(--color-champagne)] text-center font-sans">
                  Zambian Emerald
                </div>
              </div>

              {/* Provenance Badge */}
              <div className="absolute -top-6 -right-4 sm:-right-8 bg-[#0b211c] border border-[var(--color-champagne)] p-4 text-[var(--color-ivory)] shadow-xl max-w-[200px]">
                <div className="flex items-center gap-1.5 text-[var(--color-champagne)] text-[11px] tracking-widest uppercase font-medium">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[var(--color-champagne)]" />
                  <span>Provenance</span>
                </div>
                <p className="mt-1 text-xs text-[var(--color-ivory)]/80 font-light leading-snug">
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
