"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import "./Lookbook.css";

const PHOTO = "/images/jewellery-hero.jpg";

type Face =
  | {
      kind: "cover";
      folio: string;
      title: string;
      note?: string;
      logo?: boolean;
    }
  | { kind: "photo"; src: string; position: string; alt: string; title?: string }
  | {
      kind: "story";
      title: string;
      copy: string;
      position: string;
    }
  | { kind: "quote"; quote: string; name: string; position: string; alt: string }
  | {
      kind: "columns";
      folio: string;
      items: { title: string; copy: string }[];
    };

const spreads: { left: Face; right: Face }[] = [
  {
    left: {
      kind: "cover",
      folio: "1 2",
      title: "The latest in emerald and diamond",
      logo: true,
    },
    right: {
      kind: "photo",
      src: "/images/jewellery/lookbook-portrait.jpg",
      position: "center 30%",
      alt: "Emerald necklace, earrings, and ring",
      title: "Custom-made especially for you",
    },
  },
  {
    left: {
      kind: "story",
      title: "Look at this emerald suite",
      copy: "A collar of emeralds and diamonds, made to sit close to the skin and catch the light with every turn.",
      position: "62% 18%",
    },
    right: {
      kind: "photo",
      src: "/images/collection-necklaces.jpg",
      position: "center 40%",
      alt: "Emerald collar necklace",
      title: "A collar, made to be kept",
    },
  },
  {
    left: {
      kind: "cover",
      folio: "4 5",
      title: "Pieces made to be kept",
      note: "Gold, emerald, and diamond",
    },
    right: {
      kind: "photo",
      src: "/images/collection-rings.jpg",
      position: "center 45%",
      alt: "Emerald ring",
      title: "Set close to the hand",
    },
  },
  {
    left: {
      kind: "columns",
      folio: "6 7",
      items: [
        {
          title: "Timeless",
          copy: "Classic stones, set to be worn long after the season.",
        },
        {
          title: "Ingenious",
          copy: "Settings shaped by hand, balanced for light and wear.",
        },
        {
          title: "Precious",
          copy: "Emerald, diamond, and gold finished as heirlooms.",
        },
      ],
    },
    right: {
      kind: "photo",
      src: "/images/collection-earrings.jpg",
      position: "center 40%",
      alt: "Emerald drop earring",
      title: "Earrings that catch the light",
    },
  },
  {
    left: {
      kind: "story",
      title: "Cut in Jaipur",
      copy: "Each stone is chosen, set, and finished in the workshop, then checked by hand before it leaves.",
      position: "80% 70%",
    },
    right: {
      kind: "photo",
      src: "/images/collection-bracelets.jpg",
      position: "center 50%",
      alt: "Emerald bracelet",
      title: "Links that follow the wrist",
    },
  },
  {
    left: {
      kind: "columns",
      folio: "10 11",
      items: [
        { title: "Emerald", copy: "Deep green, cut to hold colour in daylight." },
        { title: "Diamond", copy: "Small stones set to outline every emerald." },
        { title: "Gold", copy: "A warm setting, finished smooth against the skin." },
      ],
    },
    right: {
      kind: "photo",
      src: "/images/jewellery/about-us-editorial.jpg",
      position: "center 35%",
      alt: "Emerald jewellery worn at the neck",
      title: "Made to be worn",
    },
  },
  {
    left: {
      kind: "story",
      title: "The house of Uni",
      copy: "A family workshop for custom pieces, care, and certificates, from Jaipur and Kuala Lumpur.",
      position: "30% 55%",
    },
    right: {
      kind: "photo",
      src: "/images/jewellery/lookbook-portrait.jpg",
      position: "center 28%",
      alt: "Emerald suite worn together",
      title: "Worn for a lifetime",
    },
  },
  {
    left: {
      kind: "cover",
      folio: "14 15",
      title: "Turn the page, then the next",
      note: "Eight spreads in this book",
    },
    right: {
      kind: "photo",
      src: "/images/collection-necklaces.jpg",
      position: "center 42%",
      alt: "Emerald earrings and collar necklace",
      title: "The last page",
    },
  },
];

const chapters = [
  { page: 0, title: "Cover & Inscription", subtitle: "Hardcover Edition" },
  { page: 1, title: "I. The Emerald Suite", subtitle: "High Jewellery (P. 1–2)" },
  { page: 3, title: "II. Emerald Collar", subtitle: "Crafted to be Kept (P. 3–4)" },
  { page: 5, title: "III. Rings & Stones", subtitle: "Set Close to the Hand (P. 5–6)" },
  { page: 7, title: "IV. Drop Earrings & Craft", subtitle: "Three Pillars of Mastery (P. 7–8)" },
  { page: 9, title: "V. Cut in Jaipur", subtitle: "Lapidary Precision (P. 9–10)" },
  { page: 11, title: "VI. Precious Materials", subtitle: "Emerald, Diamond, Gold (P. 11–12)" },
  { page: 13, title: "VII. House of Uni", subtitle: "Atelier Heritage (P. 13–14)" },
  { page: 15, title: "VIII. The Cherished Heirloom", subtitle: "Catalogue Raisonné (P. 15–16)" },
];

/* -------------------------------------------------------------
   Web Audio API Realistic Page-Turn Sound Synthesizer
   ------------------------------------------------------------- */
class PageTurnAudioEngine {
  private ctx: AudioContext | null = null;
  public enabled = true;

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
  }

  play(isCover = false) {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const sampleRate = this.ctx.sampleRate;
      const duration = isCover ? 0.5 : 0.38;
      const bufferSize = Math.floor(sampleRate * duration);
      const buffer = this.ctx.createBuffer(1, bufferSize, sampleRate);
      const data = buffer.getChannelData(0);

      // Organic paper fiber noise
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555;
        b1 = 0.99332 * b1 + white * 0.075;
        b2 = 0.969 * b2 + white * 0.153;
        const pink = b0 + b1 + b2 + white * 0.536;
        data[i] = pink * (isCover ? 0.14 : 0.095);
      }

      const noiseSource = this.ctx.createBufferSource();
      noiseSource.buffer = buffer;

      // Bandpass filter swept down to simulate the tactile friction curve
      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      const startFreq = isCover ? 1200 : 1550 + Math.random() * 250;
      const endFreq = isCover ? 280 : 360;
      filter.frequency.setValueAtTime(startFreq, now);
      filter.frequency.exponentialRampToValueAtTime(endFreq, now + duration);
      filter.Q.setValueAtTime(isCover ? 2.2 : 1.7, now);

      // Lowpass filter to ensure soft, warm luxury acoustic quality
      const lowpass = this.ctx.createBiquadFilter();
      lowpass.type = "lowpass";
      lowpass.frequency.setValueAtTime(isCover ? 1900 : 2500, now);

      // Natural amplitude envelope: quick attack, friction peak, silky decay
      const gainNode = this.ctx.createGain();
      gainNode.gain.setValueAtTime(0.001, now);
      gainNode.gain.linearRampToValueAtTime(isCover ? 0.35 : 0.28, now + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);

      noiseSource.connect(filter);
      filter.connect(lowpass);
      lowpass.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      noiseSource.start(now);
      noiseSource.stop(now + duration);
    } catch {
      // Audio not permitted or supported
    }
  }
}

function Photo({
  src,
  position,
  alt,
}: {
  src: string;
  position: string;
  alt: string;
}) {
  return (
    <div className="lookbook-photo">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 640px"
        style={{ objectFit: "cover", objectPosition: position }}
      />
    </div>
  );
}

function FaceView({
  face,
  page,
  pages,
}: {
  face: Face;
  page: number;
  pages: number;
}) {
  if (face.kind === "cover") {
    return (
      <>
        {face.logo ? (
          <div className="lookbook-logo">
            <Image
              src="/images/Logo.webp"
              alt="Uni Fine Jewelry"
              width={220}
              height={88}
              priority
              className="lookbook-logo__img"
            />
          </div>
        ) : (
          <p className="lookbook-mark">Uni</p>
        )}
        <div className="lookbook-gutter lookbook-gutter-left">
          <h2>{face.title}</h2>
          {face.note ? <p>{face.note}</p> : null}
        </div>
        <span className="lookbook-page">
          {page} / {pages}
        </span>
      </>
    );
  }

  if (face.kind === "photo") {
    return (
      <>
        <Photo src={face.src} position={face.position} alt={face.alt} />
        {face.title ? (
          <div className="lookbook-gutter lookbook-gutter-right">
            <h2>{face.title}</h2>
          </div>
        ) : null}
        <span className="lookbook-page lookbook-page--right">
          {page} / {pages}
        </span>
      </>
    );
  }

  if (face.kind === "story") {
    return (
      <>
        <h2 className="lookbook-headline">{face.title}</h2>
        <div className="lookbook-inset">
          <Image
            src={PHOTO}
            alt=""
            fill
            sizes="180px"
            style={{ objectFit: "cover", objectPosition: face.position }}
          />
        </div>
        <p className="lookbook-copy">{face.copy}</p>
        <span className="lookbook-page">
          {page} / {pages}
        </span>
      </>
    );
  }

  if (face.kind === "quote") {
    return (
      <>
        <Photo src={PHOTO} position={face.position} alt={face.alt} />
        <figure className="lookbook-quote">
          <blockquote>{face.quote}</blockquote>
          <figcaption>{face.name}</figcaption>
        </figure>
        <span className="lookbook-page lookbook-page--right">
          {page} / {pages}
        </span>
      </>
    );
  }

  return (
    <>
      <p className="lookbook-mark">Uni</p>
      <div className="lookbook-columns">
        {face.items.map((item) => (
          <div key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </div>
        ))}
      </div>
      <span className="lookbook-page">
        {page} / {pages}
      </span>
    </>
  );
}

/* -------------------------------------------------------------
   Mobile Single-Page Content Renderer
   ------------------------------------------------------------- */
function MobilePageContent({
  pageIndex,
  onOpenCover,
  onRestart,
}: {
  pageIndex: number;
  onOpenCover?: () => void;
  onRestart?: () => void;
}) {
  if (pageIndex === 0) {
    return (
      <div className="lookbook-m-cover">
        <div className="lookbook-m-cover-border">
          <div className="lookbook-m-cover-inner">
            <span className="lookbook-m-badge">EST. 1965 • JAIPUR & KUALA LUMPUR</span>
            <div className="lookbook-m-cover-logo">
              <Image
                src="/images/Logo.webp"
                alt="Uni Fine Jewelry"
                width={200}
                height={80}
                priority
                className="lookbook-m-cover-logo-img"
              />
            </div>
            <div className="lookbook-m-cover-divider">
              <span className="lookbook-m-diamond">❖</span>
            </div>
            <h2 className="lookbook-m-cover-title">THE UNI COLLECTION</h2>
            <p className="lookbook-m-cover-sub">
              Catalogue Raisonné • Volume I
            </p>
            <p className="lookbook-m-cover-desc">
              Eight curated spreads of high jewelry, ethical emeralds, and generations of atelier craftsmanship.
            </p>
            {onOpenCover ? (
              <button
                type="button"
                className="lookbook-m-cover-cta"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenCover();
                }}
              >
                <span>Begin Reading</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            ) : null}
            <span className="lookbook-m-swipe-hint">
              Swipe left or tap right to turn page
            </span>
          </div>
        </div>
      </div>
    );
  }

  const spreadIndex = Math.floor((pageIndex - 1) / 2);
  const isLeft = (pageIndex - 1) % 2 === 0;
  const face = isLeft ? spreads[spreadIndex].left : spreads[spreadIndex].right;
  const isLastPage = pageIndex === 16;

  if (face.kind === "photo") {
    return (
      <div className="lookbook-m-photo-view">
        <Image
          src={face.src}
          alt={face.alt}
          fill
          sizes="100vw"
          className="lookbook-m-photo-img"
          style={{ objectFit: "cover", objectPosition: face.position }}
        />
        <div className="lookbook-m-photo-scrim" />
        <div className="lookbook-m-top-bar">
          <span className="lookbook-m-badge">PAGE {pageIndex} / 16</span>
          <span className="lookbook-m-chapter-tag">Uni Lookbook</span>
        </div>
        <div className="lookbook-m-photo-caption">
          {face.title ? <h2 className="lookbook-m-photo-title">{face.title}</h2> : null}
          <p className="lookbook-m-photo-alt">{face.alt}</p>

          {isLastPage && onRestart ? (
            <div className="lookbook-m-last-actions">
              <Link
                href="/shop"
                className="lookbook-m-shop-link"
                onClick={(e) => e.stopPropagation()}
              >
                <span>Explore Shop</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <button
                type="button"
                className="lookbook-m-restart-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onRestart();
                }}
              >
                <span>Read Again ↺</span>
              </button>
            </div>
          ) : (
            <span className="lookbook-m-tap-cue">Tap right to continue ›</span>
          )}
        </div>
      </div>
    );
  }

  if (face.kind === "story") {
    return (
      <div className="lookbook-m-editorial-view">
        <div className="lookbook-m-top-bar">
          <span className="lookbook-m-badge">PAGE {pageIndex} / 16</span>
          <span className="lookbook-m-mark">UNI</span>
        </div>
        <div className="lookbook-m-editorial-content">
          <h2 className="lookbook-m-editorial-title">{face.title}</h2>
          <div className="lookbook-m-editorial-inset">
            <Image
              src={PHOTO}
              alt=""
              fill
              sizes="(max-width: 768px) 320px, 400px"
              style={{ objectFit: "cover", objectPosition: face.position }}
            />
          </div>
          <p className="lookbook-m-editorial-copy">{face.copy}</p>
        </div>
        <div className="lookbook-m-bottom-hint">
          <span>Tap left / right to navigate</span>
        </div>
      </div>
    );
  }

  if (face.kind === "columns") {
    return (
      <div className="lookbook-m-columns-view">
        <div className="lookbook-m-top-bar">
          <span className="lookbook-m-badge">PAGE {pageIndex} / 16</span>
          <span className="lookbook-m-mark">UNI</span>
        </div>
        <div className="lookbook-m-columns-list">
          {face.items.map((item, i) => (
            <div key={item.title} className="lookbook-m-col-item">
              <div className="lookbook-m-col-num">0{i + 1}</div>
              <div className="lookbook-m-col-body">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="lookbook-m-bottom-hint">
          <span>Tap left / right to navigate</span>
        </div>
      </div>
    );
  }

  if (face.kind === "quote") {
    return (
      <div className="lookbook-m-photo-view">
        <Image
          src={PHOTO}
          alt={face.alt}
          fill
          sizes="100vw"
          className="lookbook-m-photo-img"
          style={{ objectFit: "cover", objectPosition: face.position }}
        />
        <div className="lookbook-m-photo-scrim" />
        <div className="lookbook-m-top-bar">
          <span className="lookbook-m-badge">PAGE {pageIndex} / 16</span>
          <span className="lookbook-m-chapter-tag">Uni Lookbook</span>
        </div>
        <div className="lookbook-m-photo-caption">
          <figure className="lookbook-quote" style={{ position: "relative", left: "auto", bottom: "auto", width: "100%", background: "transparent", padding: 0 }}>
            <blockquote>{face.quote}</blockquote>
            <figcaption>{face.name}</figcaption>
          </figure>
          <span className="lookbook-m-tap-cue">Tap right to continue ›</span>
        </div>
      </div>
    );
  }

  // Cover Face (Text / Folio)
  if (face.kind === "cover") {
    return (
      <div className="lookbook-m-text-cover-view">
        <div className="lookbook-m-top-bar">
          <span className="lookbook-m-badge">PAGE {pageIndex} / 16</span>
          <span className="lookbook-m-mark">UNI</span>
        </div>
        <div className="lookbook-m-text-cover-body">
          {face.logo ? (
            <div className="lookbook-m-text-logo">
              <Image
                src="/images/Logo.webp"
                alt="Uni Fine Jewelry"
                width={180}
                height={72}
                priority
                className="lookbook-m-cover-logo-img"
              />
            </div>
          ) : null}
          <div className="lookbook-m-cover-divider">
            <span>❖</span>
          </div>
          <h2 className="lookbook-m-text-title">{face.title}</h2>
          {face.note ? <p className="lookbook-m-text-note">{face.note}</p> : null}
        </div>
        <div className="lookbook-m-bottom-hint">
          <span>Tap right to continue ›</span>
        </div>
      </div>
    );
  }

  return null;
}

/* -------------------------------------------------------------
   Main Lookbook Component
   ------------------------------------------------------------- */
export default function Lookbook() {
  const leafCount = spreads.length - 1;
  const pageCount = spreads.length * 2;

  // Sound Engine
  const soundEngineRef = useRef<PageTurnAudioEngine | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Desktop State
  const [closed, setClosed] = useState(true);
  const [turned, setTurned] = useState(0);

  // Mobile State
  const [mobilePage, setMobilePage] = useState(0);
  const [turnTarget, setTurnTarget] = useState<number | null>(null);
  const [turnDir, setTurnDir] = useState<"next" | "prev">("next");
  const [isTurningMobile, setIsTurningMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Timers & gesture refs
  const turnTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Initialize Sound
  useEffect(() => {
    soundEngineRef.current = new PageTurnAudioEngine();
    return () => {
      if (turnTimeoutRef.current) clearTimeout(turnTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (soundEngineRef.current) {
      soundEngineRef.current.enabled = soundEnabled;
    }
  }, [soundEnabled]);

  const playSound = useCallback((isCover = false) => {
    if (soundEngineRef.current && soundEnabled) {
      soundEngineRef.current.play(isCover);
    }
  }, [soundEnabled]);

  // Desktop Page Turns
  const nextDesktop = useCallback(() => {
    if (closed) {
      setClosed(false);
      playSound(true);
      return;
    }
    if (turned < leafCount) {
      setTurned((value) => value + 1);
      playSound(false);
    }
  }, [closed, leafCount, playSound, turned]);

  const prevDesktop = useCallback(() => {
    if (closed) return;
    if (turned === 0) {
      setClosed(true);
      playSound(true);
      return;
    }
    setTurned((value) => value - 1);
    playSound(false);
  }, [closed, turned, playSound]);

  // Mobile 3D Page Turn with Real Flipping Leaf
  const turnMobileTo = useCallback(
    (target: number, dir: "next" | "prev") => {
      if (isTurningMobile || target === mobilePage) return;

      setIsTurningMobile(true);
      setTurnTarget(target);
      setTurnDir(dir);
      playSound(target === 0 || mobilePage === 0);

      if (turnTimeoutRef.current) clearTimeout(turnTimeoutRef.current);
      // 700ms 3D flip animation duration
      turnTimeoutRef.current = setTimeout(() => {
        setMobilePage(target);
        setIsTurningMobile(false);
        setTurnTarget(null);
      }, 700);
    },
    [isTurningMobile, mobilePage, playSound]
  );

  const nextMobile = useCallback(() => {
    if (mobilePage < 16 && !isTurningMobile) {
      turnMobileTo(mobilePage + 1, "next");
    }
  }, [mobilePage, isTurningMobile, turnMobileTo]);

  const prevMobile = useCallback(() => {
    if (mobilePage > 0 && !isTurningMobile) {
      turnMobileTo(mobilePage - 1, "prev");
    }
  }, [mobilePage, isTurningMobile, turnMobileTo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextDesktop();
        nextMobile();
      } else if (e.key === "ArrowLeft") {
        prevDesktop();
        prevMobile();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextDesktop, nextMobile, prevDesktop, prevMobile]);

  // Mobile Touch Gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isTurningMobile) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isTurningMobile || touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(deltaX) > 38 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      if (deltaX < 0) {
        nextMobile();
      } else {
        prevMobile();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  const leafZ = (index: number) => (turned > index ? 10 + index : 50 - index);

  const currentChapter =
    [...chapters].reverse().find((ch) => mobilePage >= ch.page) || chapters[0];

  return (
    <section className="lookbook" aria-label="Jewellery lookbook">
      {/* Background scene for luxury atmosphere */}
      <Image
        src="/images/jewellery/lookbook-scene.jpg"
        alt=""
        fill
        sizes="100vw"
        priority
        className="lookbook-scene"
      />
      <div className="lookbook-scene-overlay" />

      {/* ========================================================
          DESKTOP 3D SPREAD (Visible > 768px)
          Features continuous 3D hardcover cover leaf swing & sound
          ======================================================== */}
      <div className="lookbook-desktop">
        <button
          type="button"
          className="lookbook-nav lookbook-nav--prev"
          aria-label="Previous page"
          onClick={prevDesktop}
          disabled={closed}
        />

        <div className={`lookbook-book ${closed ? "lookbook-book--closed" : ""}`}>
          {/* Underneath Left Plate */}
          <div className="lookbook-plate lookbook-plate-left">
            <FaceView face={spreads[0].left} page={1} pages={pageCount} />
          </div>

          {/* Underneath Right Plate */}
          <div className="lookbook-plate lookbook-plate-right">
            <FaceView
              face={spreads[leafCount].right}
              page={pageCount}
              pages={pageCount}
            />
          </div>

          {/* Interior Leaves: Leaves 0 to 6 */}
          {spreads.slice(0, leafCount).map((spread, index) => {
            const leafIndex = leafCount - 1 - index;
            const front = spreads[leafIndex].right;
            const back = spreads[leafIndex + 1].left;

            return (
              <article
                key={leafIndex}
                className={`lookbook-leaf ${turned > leafIndex ? "lookbook-turned" : ""}`}
                style={{ zIndex: leafZ(leafIndex) }}
              >
                <div className="lookbook-face">
                  <FaceView
                    face={front}
                    page={leafIndex * 2 + 2}
                    pages={pageCount}
                  />
                  <div className="lookbook-leaf-crease" />
                </div>
                <div className="lookbook-face lookbook-back">
                  <FaceView
                    face={back}
                    page={(leafIndex + 1) * 2 + 1}
                    pages={pageCount}
                  />
                  <div className="lookbook-leaf-crease" />
                </div>
              </article>
            );
          })}

          {/* Real 3D Cover Leaf: Smoothly swings open in 3D perspective from 0deg to -180deg */}
          <article
            className={`lookbook-leaf lookbook-leaf--cover ${!closed ? "lookbook-turned" : ""}`}
            style={{ zIndex: closed ? 65 : 8 }}
            onClick={() => {
              if (closed) nextDesktop();
            }}
          >
            {/* Front of Cover (Closed Hardcover) */}
            <div className="lookbook-face lookbook-cover-front">
              <div className="lookbook-cover-border">
                <div className="lookbook-cover-inner">
                  <div className="lookbook-cover-logo-wrap">
                    <Image
                      src="/images/Logo.webp"
                      alt="Uni Fine Jewelry"
                      width={280}
                      height={112}
                      priority
                      className="lookbook-cover__logo"
                    />
                  </div>
                  <p className="lookbook-cover-sub">THE UNI COLLECTION</p>
                  <div className="lookbook-cover-divider">
                    <span>❖</span>
                  </div>
                  <p className="lookbook-cover-vol">Catalogue Raisonné • Volume I</p>

                  <div className="lookbook-cover-cta">
                    <span>Click to Open Lookbook</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Back of Cover (Becomes Left Page 1 upon opening) */}
            <div className="lookbook-face lookbook-back lookbook-cover-back">
              <FaceView face={spreads[0].left} page={1} pages={pageCount} />
            </div>
          </article>
        </div>

        <button
          type="button"
          className="lookbook-nav lookbook-nav--next"
          aria-label="Next page"
          onClick={nextDesktop}
          disabled={turned === leafCount}
        />

        <div className="lookbook-caption">
          <span>The Uni Collection • Fine Jewellery</span>

          <div className="lookbook-caption-center">
            {closed
              ? "Hardcover Edition • Click Cover or Next"
              : `Spread ${turned + 1} of ${spreads.length} • Pages ${turned * 2 + 1} & ${turned * 2 + 2}`}
          </div>

          <button
            type="button"
            className="lookbook-sound-toggle"
            onClick={() => setSoundEnabled((v) => !v)}
            aria-label={soundEnabled ? "Mute audio" : "Enable audio"}
            title={soundEnabled ? "Mute page-turn sounds" : "Enable page-turn sounds"}
          >
            <span>{soundEnabled ? "🔊 Sound On" : "🔇 Sound Off"}</span>
          </button>
        </div>
      </div>

      {/* ========================================================
          MOBILE SINGLE-PAGE READER (Visible <= 768px)
          With Real 3D Book Page Flip Animation, Audio & Gestures
          ======================================================== */}
      <div className="lookbook-mobile">
        {/* Top Floating Bar */}
        <div className="lookbook-m-header">
          <div className="lookbook-m-brand">
            <span className="lookbook-m-brand-name">UNI</span>
            <span className="lookbook-m-brand-sub">LOOKBOOK</span>
          </div>

          <div className="lookbook-m-header-actions">
            <button
              type="button"
              className="lookbook-m-sound-btn"
              onClick={() => setSoundEnabled((v) => !v)}
              aria-label={soundEnabled ? "Mute audio" : "Enable audio"}
            >
              {soundEnabled ? "🔊" : "🔇"}
            </button>

            <button
              type="button"
              className="lookbook-m-toc-trigger"
              onClick={() => setDrawerOpen(true)}
              aria-label="Table of contents"
            >
              <span>{currentChapter.title.split(".")[0]}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* 3D Mobile Book Stage with Tap Zones & Touch Swiping */}
        <div
          className="lookbook-m-card-wrap"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Invisible Tap Zones: Left 25% prev, Right 75% next */}
          <div
            className="lookbook-m-tap lookbook-m-tap--left"
            onClick={prevMobile}
            aria-label="Previous page"
          />
          <div
            className="lookbook-m-tap lookbook-m-tap--right"
            onClick={nextMobile}
            aria-label="Next page"
          />

          {/* Underneath / Settled Page Card */}
          <div className="lookbook-m-card lookbook-m-card--base">
            <MobilePageContent
              pageIndex={isTurningMobile && turnTarget !== null ? turnTarget : mobilePage}
              onOpenCover={nextMobile}
              onRestart={() => turnMobileTo(0, "prev")}
            />
            {/* Dynamic cast shadow during 3D page turn */}
            {isTurningMobile ? (
              <div className={`lookbook-m-under-shadow lookbook-m-under-shadow--${turnDir}`} />
            ) : null}
          </div>

          {/* Real 3D Turning Leaf (Active during page turn) */}
          {isTurningMobile && turnTarget !== null ? (
            <div className={`lookbook-m-leaf lookbook-m-leaf--${turnDir}`}>
              {/* Front Face: Outgoing / Leading page */}
              <div className="lookbook-m-face lookbook-m-face--front">
                <MobilePageContent
                  pageIndex={turnDir === "next" ? mobilePage : turnTarget}
                />
                <div className="lookbook-m-spine-shadow" />
              </div>

              {/* Back Face: Reverse page side with luxury emerald velvet liner */}
              <div className="lookbook-m-face lookbook-m-face--back">
                <div className="lookbook-m-back-sheet">
                  <div className="lookbook-m-back-inner">
                    <span className="lookbook-m-back-mark">UNI FINE JEWELLERY</span>
                    <div className="lookbook-m-cover-divider">
                      <span>❖</span>
                    </div>
                    <p className="lookbook-m-back-tag">ATELIER LOOKBOOK • VOL. I</p>
                  </div>
                </div>
                <div className="lookbook-m-spine-shadow" />
              </div>
            </div>
          ) : null}
        </div>

        {/* Golden Progress Scrubber */}
        <div className="lookbook-m-progress">
          <div
            className="lookbook-m-progress-bar"
            style={{ width: `${(mobilePage / 16) * 100}%` }}
          />
        </div>

        {/* Bottom Floating Reader Control Bar */}
        <div className="lookbook-m-hud">
          <button
            type="button"
            className="lookbook-m-nav-btn"
            onClick={prevMobile}
            disabled={mobilePage === 0 || isTurningMobile}
            aria-label="Previous page"
          >
            ‹
          </button>

          <button
            type="button"
            className="lookbook-m-page-pill"
            onClick={() => setDrawerOpen(true)}
            aria-label="View chapters"
          >
            <span className="lookbook-m-pill-title">
              {mobilePage === 0 ? "Cover Edition" : `Page ${mobilePage} of 16`}
            </span>
            <span className="lookbook-m-pill-sub">Tap for Chapters</span>
          </button>

          <button
            type="button"
            className="lookbook-m-nav-btn"
            onClick={nextMobile}
            disabled={mobilePage === 16 || isTurningMobile}
            aria-label="Next page"
          >
            ›
          </button>
        </div>

        {/* Chapters Drawer / Table of Contents Bottom Sheet Modal */}
        {drawerOpen ? (
          <div className="lookbook-drawer-portal">
            <div
              className="lookbook-drawer-backdrop"
              onClick={() => setDrawerOpen(false)}
            />
            <div
              className="lookbook-drawer-sheet"
              role="dialog"
              aria-modal="true"
              aria-label="Table of Contents"
            >
              <div className="lookbook-drawer-header">
                <div>
                  <h3>Table of Contents</h3>
                  <p>The Uni Collection • Lookbook</p>
                </div>
                <button
                  type="button"
                  className="lookbook-drawer-close"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close table of contents"
                >
                  ✕
                </button>
              </div>

              <div className="lookbook-drawer-list">
                {chapters.map((ch, idx) => {
                  const isActive = currentChapter.page === ch.page;
                  return (
                    <button
                      key={idx}
                      type="button"
                      className={`lookbook-drawer-item ${isActive ? "lookbook-drawer-item--active" : ""}`}
                      onClick={() => {
                        setDrawerOpen(false);
                        if (ch.page !== mobilePage) {
                          turnMobileTo(ch.page, ch.page > mobilePage ? "next" : "prev");
                        }
                      }}
                    >
                      <div className="lookbook-drawer-item-info">
                        <span className="lookbook-drawer-item-title">{ch.title}</span>
                        <span className="lookbook-drawer-item-sub">{ch.subtitle}</span>
                      </div>
                      <span className="lookbook-drawer-item-page">
                        {ch.page === 0 ? "Cover" : `P. ${ch.page}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
