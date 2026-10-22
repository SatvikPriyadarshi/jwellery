"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./CollectionStage.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ChapterData {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string[];
  artists: string[];
  where: string;
  when: string;
  youtubeUrl: string;
  image: string;
  videoUrl?: string;
}

const CHAPTERS: ChapterData[] = [
  {
    id: "under-the-sea",
    number: "01",
    name: "Under The Sea",
    subtitle: "DEEP AQUATIC GROOVES & SUBMERGED SOUNDSCAPES",
    description: [
      "A subterranean auditory plunge through sub-bass pulses, ambient marine textures, and hypnotic four-on-the-floor rhythms. Curated inside an industrial warehouse re-imagined as an oceanic abyss.",
      "Bespoke laser diffusion casting caustic ripple projections across the dancefloor, synchronized with analog synth modular sets.",
    ],
    artists: ["Bicep", "Four Tet", "Floating Points"],
    where: "Warehouse 04, The Docks",
    when: "22 / Sep / 2024",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "/images/collection-necklaces.jpg",
  },
  {
    id: "auro",
    number: "02",
    name: "AURO",
    subtitle: "ROOFTOP SONICS & INTIMATE BALCONY DISCO",
    description: [
      "Sweat-drenched summer frequencies drifting above the urban skyline. Analog synths meet live African and Latin percussion as the golden hour bleeds into dusk.",
      "Surrounded by raw brutalist concrete and warm amber neon, an intimate high-energy session celebrating soulful house classics.",
    ],
    artists: ["Mall Grab", "Peggy Gou", "Salute"],
    where: "Auro Rooftop, Hauz Khas",
    when: "05 / Oct / 2024",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "/images/jewellery/lookbook-scene.jpg",
  },
  {
    id: "radiant-outpost",
    number: "03",
    name: "Radiant Outpost",
    subtitle: "OPEN-AIR DESERT GATHERING & CELESTIAL TECHNO",
    description: [
      "Deep in the sandstone badlands beneath star-strewn desert skies. Heavy basslines vibrating through dunes, framed by bespoke monolithic lighting rigs and ceremonial incense.",
      "A nocturnal tribal odyssey where hypnotic melodic techno sustains the dancers until the dawn horizon turns crimson.",
    ],
    artists: ["Stephan Bodzin", "Mind Against", "Recondite"],
    where: "The Desert Outpost, Jaisalmer",
    when: "19 / Oct / 2024",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "/images/jewellery/about-1990-emeralds.jpg",
  },
  {
    id: "all-white-sundowner",
    number: "04",
    name: "All White Sundowner",
    subtitle: "DAY-INTO-NIGHT MINIMAL VIBES & MONOCHROME CODES",
    description: [
      "Crisp linen, bleached architectural terraces, and warm low-slung French house grooves. An open-air day gathering celebrating the equinox with chilled organic champagne.",
      "Uninterrupted panoramic ocean views blending seamlessly into deep sunset disco cuts as the tides turn.",
    ],
    artists: ["Folamour", "Chaos In The CBD", "Dam Swindle"],
    where: "The Cliffside Villa, Goa",
    when: "02 / Nov / 2024",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "/images/jewellery/lookbook-portrait.jpg",
  },
  {
    id: "litmas",
    number: "05",
    name: "Litmas",
    subtitle: "WINTER SOLSTICE TECH HOUSE & GLOW DISTORTION",
    description: [
      "Dark festive energy fueled by heavy rolling 808s and strobing crimson neon. An annual underground gathering turning freezing midnight temperatures into a feverish warehouse dancefloor.",
      "Fog-shrouded arches, sub-zero basslines, and unreleased peak-time dubplates till 6 AM.",
    ],
    artists: ["Fisher", "Chris Lake", "Cloonee"],
    where: "Bunker 12, South District",
    when: "24 / Dec / 2024",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "/images/collection-rings.jpg",
  },
  {
    id: "sit-down-listening",
    number: "06",
    name: "Sit Down Listening",
    subtitle: "AUDIOPHILE SOUNDSYSTEM & AMBIENT EXPERIMENTATION",
    description: [
      "Shoes off, senses heightened. A bespoke custom Klipschorn horn-loaded sound system delivering uncompressed pure analog vinyl warmth.",
      "Zero chatter, warm carpeted risers, low amber lamps, and mind-expanding downtempo excursions for true music heads.",
    ],
    artists: ["Jon Hopkins", "Max Cooper", "Nils Frahm"],
    where: "The Listening Room, Bandra",
    when: "11 / Jan / 2025",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "/images/jewellery/about-emerald-detail.jpg",
  },
  {
    id: "the-party-bus",
    number: "07",
    name: "The Party Bus",
    subtitle: "MOBILE SOUND CLASH & MIDNIGHT HIGHWAY SESSIONS",
    description: [
      "A custom retrofitted sleeper coach packed with Funktion-One monitors, smoke generators, and 40 disciples of bass racing down coastal highways from midnight until sunrise.",
      "Unannounced secret guest sets, flashing motorway lights, and basslines that rattle the asphalt.",
    ],
    artists: ["Skream", "Denis Sulta", "Joy Orbison"],
    where: "Highway 66 Transit Route",
    when: "25 / Jan / 2025",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "/images/jewellery/about-2018-atelier.jpg",
  },
  {
    id: "tiki-on-the-rocks",
    number: "08",
    name: "Tiki On The Rocks",
    subtitle: "TROPICAL PSYCHEDELIA & CRASHING WAVE BASS",
    description: [
      "Carved tiki totems, flaming rum bowls, and psychedelic disco riffs echoing against black volcanic rocks as the Arabian Sea crashes just feet from the mixer.",
      "An untamed outdoor session beneath swaying palm fronds, illuminated by torches and starlight.",
    ],
    artists: ["Todd Terje", "Hunee", "Palms Trax"],
    where: "Rocky Bay, Anjuna",
    when: "08 / Feb / 2025",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "/images/collection-earrings.jpg",
  },
  {
    id: "werkshop",
    number: "09",
    name: "Werkshop",
    subtitle: "RAW MODULAR HARDWARE & INDUSTRIAL TECHNO CATHARSIS",
    description: [
      "No cameras, no VIP tables. Stripped back to bare metal, patch cables, and uncompromising 140 BPM hypnotic techno inside an abandoned textile workshop.",
      "Pure analog synthesis, synchronized stroboscopic pulses, and unrelenting forward kinetic momentum.",
    ],
    artists: ["DVS1", "Rødhåd", "Paula Temple"],
    where: "Old Foundry, Industrial Area",
    when: "22 / Feb / 2025",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "/images/jewellery/about-today-jewelry.jpg",
  },
];

interface CarouselEvent {
  id: string;
  name: string;
  location: string;
  date: string;
  image: string;
}

const CAROUSEL_EVENTS: CarouselEvent[] = [
  {
    id: "car-1",
    name: "Sub Zero Sound",
    location: "Goa Coast",
    date: "12 / Mar / 2025",
    image: "/images/jewellery/who-model.jpg",
  },
  {
    id: "car-2",
    name: "Velvet Warehouse",
    location: "Mumbai Mills",
    date: "28 / Mar / 2025",
    image: "/images/collection-bracelets.jpg",
  },
  {
    id: "car-3",
    name: "Boiler Room Secret",
    location: "Delhi Rooftop",
    date: "05 / Apr / 2025",
    image: "/images/jewellery/tourmaline-necklace.jpg",
  },
  {
    id: "car-4",
    name: "Eclipse Gathering",
    location: "Pushkar Dunes",
    date: "18 / Apr / 2025",
    image: "/images/jewellery/double-strand-necklace.jpg",
  },
  {
    id: "car-5",
    name: "Neon Temple",
    location: "Bengaluru Loft",
    date: "02 / May / 2025",
    image: "/images/jewellery/drop-emerald-earrings.jpg",
  },
  {
    id: "car-6",
    name: "Analog Dreams",
    location: "Jaipur Courtyard",
    date: "15 / May / 2025",
    image: "/images/jewellery/loyalty-atelier.jpg",
  },
  {
    id: "car-7",
    name: "Sunset Resonance",
    location: "Vagator Cliffs",
    date: "01 / Jun / 2025",
    image: "/images/jewellery/diamond-tennis-bracelet.jpg",
  },
  {
    id: "car-8",
    name: "The Red Room",
    location: "Secret Bunker",
    date: "22 / Jun / 2025",
    image: "/images/jewellery/about-1965-trading.jpg",
  },
];

export default function CollectionStage() {
  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const [activeIdx, setActiveIdx] = useState(0);
  const [mobileExpanded, setMobileExpanded] = useState<Record<number, boolean>>({});
  const [carouselOffset, setCarouselOffset] = useState(0);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

  // Total chapters = 9 event chapters + 1 finale explore chapter
  const totalChapters = CHAPTERS.length + 1; // 10

  // Touch swipe handling for mobile
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const touchStartTime = useRef(0);
  const isMobileAnimating = useRef(false);

  // Jump to specific chapter
  const jumpToChapter = useCallback(
    (idx: number) => {
      const clampedIdx = Math.max(0, Math.min(totalChapters - 1, idx));
      if (typeof window !== "undefined" && window.innerWidth >= 768) {
        const st = scrollTriggerRef.current;
        if (st) {
          const totalDistance = st.end - st.start;
          const targetY = st.start + (clampedIdx / (totalChapters - 1)) * totalDistance;
          window.scrollTo({ top: targetY, behavior: "smooth" });
        }
      } else {
        // Mobile swiper transition
        if (isMobileAnimating.current || clampedIdx === activeIdx) return;
        isMobileAnimating.current = true;

        const currentPanel = panelsRef.current[activeIdx];
        const nextPanel = panelsRef.current[clampedIdx];
        const direction = clampedIdx > activeIdx ? 1 : -1;

        if (currentPanel && nextPanel) {
          gsap.to(currentPanel, {
            y: direction * -50,
            autoAlpha: 0,
            duration: 0.38,
            ease: "power2.inOut",
          });

          gsap.fromTo(
            nextPanel,
            { y: direction * 70, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.42,
              ease: "power2.out",
              onComplete: () => {
                setActiveIdx(clampedIdx);
                isMobileAnimating.current = false;
              },
            }
          );
        } else {
          setActiveIdx(clampedIdx);
          isMobileAnimating.current = false;
        }
      }
    },
    [activeIdx, totalChapters]
  );

  // Desktop Master Timeline Scrub with GSAP ScrollTrigger
  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Set initial states: only chapter 0 is visible
        panelsRef.current.forEach((panel, i) => {
          if (panel) {
            gsap.set(panel, {
              autoAlpha: i === 0 ? 1 : 0,
              scale: i === 0 ? 1 : 0.8,
              y: 0,
              pointerEvents: i === 0 ? "auto" : "none",
            });
          }
        });

        // Master timeline pinned to root
        const tl = gsap.timeline({
          scrollTrigger: {
            id: "collection-curations-trigger",
            trigger: root,
            pin: true,
            scrub: 1,
            start: "top top",
            end: `+=${totalChapters * 115}%`,
            onUpdate: (self) => {
              const rawProgress = self.progress * (totalChapters - 1);
              const computedIdx = Math.min(
                totalChapters - 1,
                Math.max(0, Math.round(rawProgress))
              );
              setActiveIdx(computedIdx);
            },
          },
        });

        scrollTriggerRef.current = tl.scrollTrigger || null;

        // Sequence transitions between chapters
        for (let i = 0; i < totalChapters - 1; i++) {
          const current = panelsRef.current[i];
          const next = panelsRef.current[i + 1];

          // 1. Hold period at current chapter
          tl.to({}, { duration: 0.85 });

          // 2. Outgoing panel scales up (2x) + fades out
          tl.to(
            current,
            {
              scale: 1.85,
              autoAlpha: 0,
              duration: 1,
              ease: "power3.out",
              onStart: () => {
                if (current) current.style.pointerEvents = "none";
              },
            },
            `trans-${i}`
          );

          // 3. Incoming panel scales in from 0.2 + fades in
          tl.fromTo(
            next,
            {
              scale: 0.25,
              autoAlpha: 0,
              y: 50,
            },
            {
              scale: 1,
              autoAlpha: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              onComplete: () => {
                if (next) next.style.pointerEvents = "auto";
              },
            },
            `trans-${i}`
          );
        }

        // Final hold period for Explore More
        tl.to({}, { duration: 1.1 });
      });

      mm.add("(max-width: 767px)", () => {
        // On mobile: bypass ScrollTrigger pin, initialize active panel
        panelsRef.current.forEach((panel, i) => {
          if (panel) {
            gsap.set(panel, {
              autoAlpha: i === activeIdx ? 1 : 0,
              scale: 1,
              y: 0,
              pointerEvents: i === activeIdx ? "auto" : "none",
            });
          }
        });
      });

      return () => {
        mm.revert();
      };
    },
    { scope: rootRef }
  );

  // Mobile Touch Gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    if (window.innerWidth >= 768) return;
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
    touchStartTime.current = Date.now();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (window.innerWidth >= 768 || isMobileAnimating.current) return;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaTime = Date.now() - touchStartTime.current;

    // Require vertical swipe > horizontal swipe and > 48px threshold
    if (Math.abs(deltaY) > 48 && Math.abs(deltaY) > Math.abs(deltaX) && deltaTime < 650) {
      if (deltaY < 0 && activeIdx < totalChapters - 1) {
        // Swipe Up -> Next Chapter
        jumpToChapter(activeIdx + 1);
      } else if (deltaY > 0 && activeIdx > 0) {
        // Swipe Down -> Prev Chapter
        jumpToChapter(activeIdx - 1);
      }
    }
  };

  // Carousel manual controls
  const handleCarouselStep = (direction: number) => {
    setIsMarqueePaused(true);
    setCarouselOffset((prev) => prev + direction * 260);

    // Resume auto-scroll after 2.5s
    setTimeout(() => {
      setIsMarqueePaused(false);
    }, 2500);
  };

  const toggleMobileExpand = (idx: number) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section
      ref={rootRef}
      id="collection"
      className="curations-stage"
      aria-labelledby="curations-heading"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h1 id="curations-heading" className="sr-only">
        Events &amp; Experiences — Curated Nightlife Lookbook
      </h1>

      {/* Main Viewport Stage */}
      <div ref={stageRef} className="curations-viewport">
        <div className="curations-ambient-glow" aria-hidden="true" />

        {/* Chapters 1 to 9 */}
        {CHAPTERS.map((chapter, idx) => {
          const isExpanded = !!mobileExpanded[idx];
          return (
            <div
              key={chapter.id}
              ref={(el) => {
                panelsRef.current[idx] = el;
              }}
              className="curations-chapter"
              aria-hidden={activeIdx !== idx}
            >
              {/* Desktop Layout (>= 768px) */}
              <div className="hidden md:flex items-center justify-between w-full max-w-6xl mx-auto px-6 lg:px-12 gap-10 h-full relative z-10">
                {/* Left Column: Glass Card with Editorial Content */}
                <div className="w-1/2 curations-glass-card rounded-2xl p-8 lg:p-10 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-widest text-red-400 uppercase">
                      CHAPTER {chapter.number} // {chapter.name}
                    </span>
                    <span className="curations-artist-chip">CURATED VIBE</span>
                  </div>

                  <div>
                    <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-widest text-white leading-tight font-sans">
                      {chapter.name}
                    </h2>
                    <p className="font-mono text-xs text-zinc-400 tracking-wider uppercase mt-1">
                      {chapter.subtitle}
                    </p>
                  </div>

                  <div className="font-mono text-xs lg:text-sm text-zinc-200 leading-relaxed space-y-2.5">
                    {chapter.description.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  {/* Artists Lineup Chips */}
                  {chapter.artists.length > 0 && (
                    <div className="pt-1">
                      <p className="font-mono text-[10px] uppercase text-zinc-400 tracking-widest mb-1.5 font-bold">
                        FEATURED ARTISTS
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {chapter.artists.map((artist) => (
                          <span key={artist} className="curations-artist-chip">
                            {artist}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Meta Divider & Information */}
                  <div className="border-t border-white/10 pt-4 grid grid-cols-2 gap-4">
                    <div>
                      <span className="block font-mono text-[11px] font-semibold text-zinc-400 uppercase tracking-widest">
                        WHERE
                      </span>
                      <span className="block font-mono text-xs lg:text-sm font-medium text-white mt-0.5">
                        {chapter.where}
                      </span>
                    </div>
                    <div>
                      <span className="block font-mono text-[11px] font-semibold text-zinc-400 uppercase tracking-widest">
                        WHEN
                      </span>
                      <span className="block font-mono text-xs lg:text-sm font-medium text-white mt-0.5">
                        {chapter.when}
                      </span>
                    </div>
                  </div>

                  {/* Primary YouTube CTA Button */}
                  <div className="pt-2">
                    <a
                      href={chapter.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="curations-cta-btn"
                      aria-label={`Watch ${chapter.name} experience on YouTube`}
                    >
                      <svg
                        className="curations-play-icon"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      WATCH EXPERIENCE
                    </a>
                  </div>
                </div>

                {/* Right Column: Aspect-Video Media Frame */}
                <div className="w-1/2 flex items-center justify-center">
                  <div className="curations-media-frame">
                    <Image
                      src={chapter.image}
                      alt={chapter.name}
                      fill
                      sizes="(max-width: 1200px) 50vw, 580px"
                      priority={idx === 0}
                      quality={90}
                    />
                    <div className="curations-media-scrim" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Mobile Layout (< 768px) */}
              <div className="flex md:hidden flex-col items-center justify-center w-full max-w-md mx-auto px-4 pt-16 pb-24 h-full relative z-10 overflow-y-auto">
                {/* Media Block on Top */}
                <div className="curations-media-frame w-full max-h-[190px] mb-3">
                  <Image
                    src={chapter.image}
                    alt={chapter.name}
                    fill
                    sizes="100vw"
                    priority={idx === 0}
                    quality={88}
                  />
                  <div className="curations-media-scrim" aria-hidden="true" />
                </div>

                {/* Glass Info Card Below */}
                <div className="curations-glass-card rounded-2xl p-4 w-full space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold tracking-widest text-red-400 uppercase">
                      CH. {chapter.number}
                    </span>
                    <span className="curations-artist-chip text-[9px] px-2 py-0.5">
                      LIVE CLIP
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl font-black uppercase tracking-wider text-white leading-tight font-sans">
                      {chapter.name}
                    </h2>
                    <p className="font-mono text-[10px] text-zinc-400 tracking-wider uppercase mt-0.5">
                      {chapter.subtitle}
                    </p>
                  </div>

                  {/* Expandable Description */}
                  <div className="font-mono text-xs text-zinc-200 leading-relaxed">
                    <p>{chapter.description[0]}</p>
                    {isExpanded && chapter.description[1] && (
                      <p className="mt-2 text-zinc-300">{chapter.description[1]}</p>
                    )}
                    {chapter.description.length > 1 && (
                      <button
                        type="button"
                        onClick={() => toggleMobileExpand(idx)}
                        className="text-red-400 font-mono text-[10px] uppercase font-bold tracking-wider mt-1.5 flex items-center gap-1 hover:text-red-300"
                      >
                        {isExpanded ? "Show less ▴" : "Tap to read more ▾"}
                      </button>
                    )}
                  </div>

                  {/* Lineup Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {chapter.artists.map((artist) => (
                      <span
                        key={artist}
                        className="curations-artist-chip text-[9px] px-2 py-0.5"
                      >
                        {artist}
                      </span>
                    ))}
                  </div>

                  {/* Divider & Metadata */}
                  <div className="border-t border-white/10 pt-2.5 flex items-center justify-between text-xs font-mono">
                    <div>
                      <span className="block text-[10px] font-semibold text-zinc-400 uppercase">
                        WHERE
                      </span>
                      <span className="block text-white font-medium text-xs truncate max-w-[140px]">
                        {chapter.where}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] font-semibold text-zinc-400 uppercase">
                        WHEN
                      </span>
                      <span className="block text-white font-medium text-xs">
                        {chapter.when}
                      </span>
                    </div>
                  </div>

                  {/* Mobile YouTube Button */}
                  <div className="pt-1">
                    <a
                      href={chapter.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="curations-cta-btn w-full text-center"
                    >
                      <svg
                        className="curations-play-icon"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      WATCH
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Chapter 10: "Explore More" Final Carousel Stage */}
        <div
          ref={(el) => {
            panelsRef.current[CHAPTERS.length] = el;
          }}
          className="curations-chapter"
          aria-hidden={activeIdx !== CHAPTERS.length}
        >
          <div className="curations-carousel-wrap relative z-10 w-full px-4 md:px-8">
            {/* Header */}
            <div className="text-center space-y-1.5 mb-5 md:mb-8">
              <span className="font-mono text-xs font-bold tracking-widest text-red-400 uppercase block">
                CHAPTER 10 // FINALE
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-white font-sans">
                EXPLORE MORE
              </h2>
              <p className="font-mono text-xs md:text-sm text-zinc-400 tracking-wider uppercase max-w-xl mx-auto">
                Upcoming underground sessions, secret gatherings &amp; sound journeys
              </p>
            </div>

            {/* Infinite Horizontal Marquee Carousel */}
            <div className="curations-carousel-track-container w-full">
              <div
                className={`curations-marquee-track ${
                  isMarqueePaused ? "is-paused" : ""
                }`}
                style={{
                  transform: carouselOffset ? `translateX(${carouselOffset}px)` : undefined,
                }}
              >
                {/* Render Duplicated Cards for Seamless Marquee Loop */}
                {[...CAROUSEL_EVENTS, ...CAROUSEL_EVENTS].map((event, cIdx) => (
                  <a
                    key={`${event.id}-${cIdx}`}
                    href="#contact"
                    className="curations-card"
                    aria-label={`${event.name} in ${event.location} on ${event.date}`}
                  >
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      sizes="(max-width: 768px) 170px, 240px"
                      className="curations-card__img"
                      quality={85}
                    />
                    <div className="curations-card__scrim" aria-hidden="true" />
                    <span className="curations-card__badge">UPCOMING</span>

                    <div className="curations-card__info">
                      <h3 className="curations-card__title">{event.name}</h3>
                      <p className="curations-card__meta">
                        {event.location} &bull; {event.date}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="curations-carousel-ctrls">
              <button
                type="button"
                onClick={() => handleCarouselStep(1)}
                className="curations-ctrl-btn"
                aria-label="Scroll carousel backward"
              >
                &larr;
              </button>
              <span className="font-mono text-xs text-zinc-400 tracking-widest uppercase">
                SCROLL OR HOVER TO PAUSE
              </span>
              <button
                type="button"
                onClick={() => handleCarouselStep(-1)}
                className="curations-ctrl-btn"
                aria-label="Scroll carousel forward"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Fixed Bottom Navigation Pill */}
        <nav
          className="curations-nav-desktop"
          aria-label="Event Chapters Navigation"
        >
          {CHAPTERS.map((ch, idx) => (
            <button
              key={ch.id}
              type="button"
              onClick={() => jumpToChapter(idx)}
              className={`curations-nav-chip ${
                activeIdx === idx ? "curations-nav-chip--active" : ""
              }`}
            >
              {ch.name}
            </button>
          ))}
          <button
            type="button"
            onClick={() => jumpToChapter(CHAPTERS.length)}
            className={`curations-nav-chip ${
              activeIdx === CHAPTERS.length ? "curations-nav-chip--active" : ""
            }`}
          >
            Explore More
          </button>
        </nav>

        {/* Mobile Fixed Bottom Navigation Pill */}
        <nav
          className="curations-nav-mobile"
          aria-label="Mobile Event Navigation"
        >
          <div className="curations-nav-mobile__row">
            <button
              type="button"
              onClick={() => jumpToChapter(activeIdx - 1)}
              disabled={activeIdx === 0}
              className="curations-nav-arrow"
              aria-label="Previous event"
            >
              &larr;
            </button>
            <span className="curations-nav-title">
              {activeIdx < CHAPTERS.length
                ? CHAPTERS[activeIdx].name
                : "Explore More"}
            </span>
            <button
              type="button"
              onClick={() => jumpToChapter(activeIdx + 1)}
              disabled={activeIdx === totalChapters - 1}
              className="curations-nav-arrow"
              aria-label="Next event"
            >
              &rarr;
            </button>
          </div>

          <div className="curations-nav-dots" aria-hidden="true">
            {Array.from({ length: totalChapters }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => jumpToChapter(dotIdx)}
                className={`curations-nav-dot ${
                  activeIdx === dotIdx ? "curations-nav-dot--active" : ""
                }`}
                aria-label={`Jump to chapter ${dotIdx + 1}`}
              />
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}
