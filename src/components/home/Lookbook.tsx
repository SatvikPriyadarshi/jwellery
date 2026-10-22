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
   Mobile Single-Page View
   ------------------------------------------------------------- */
function MobilePageContent({
  pageIndex,
  onOpenCover,
  onRestart,
}: {
  pageIndex: number;
  onOpenCover: () => void;
  onRestart: () => void;
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

          {isLastPage ? (
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

  // Desktop State
  const [closed, setClosed] = useState(true);
  const [turned, setTurned] = useState(0);

  // Mobile State
  const [mobilePage, setMobilePage] = useState(0);
  const [turnDir, setTurnDir] = useState<"next" | "prev">("next");
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Touch Swipe tracking for Mobile
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Desktop Nav
  const nextDesktop = useCallback(() => {
    if (closed) {
      setClosed(false);
      return;
    }
    setTurned((value) => Math.min(leafCount, value + 1));
  }, [closed, leafCount]);

  const prevDesktop = useCallback(() => {
    if (closed) return;
    if (turned === 0) {
      setClosed(true);
      return;
    }
    setTurned((value) => Math.max(0, value - 1));
  }, [closed, turned]);

  // Mobile Nav
  const nextMobile = useCallback(() => {
    if (mobilePage < 16) {
      setTurnDir("next");
      setMobilePage((p) => p + 1);
    }
  }, [mobilePage]);

  const prevMobile = useCallback(() => {
    if (mobilePage > 0) {
      setTurnDir("prev");
      setMobilePage((p) => p - 1);
    }
  }, [mobilePage]);

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

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Trigger swipe if horizontal movement is dominant and > 40px
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
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

  // Active chapter for mobile
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
          Features continuous 3D hardcover cover leaf swing
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
                </div>
                <div className="lookbook-face lookbook-back">
                  <FaceView
                    face={back}
                    page={(leafIndex + 1) * 2 + 1}
                    pages={pageCount}
                  />
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

        <p className="lookbook-caption">
          <span>The Uni Collection • Fine Jewellery</span>
          <span>
            {closed
              ? "Hardcover Edition • Click Cover or Next"
              : `Spread ${turned + 1} of ${spreads.length} • Pages ${turned * 2 + 1} & ${turned * 2 + 2}`}
          </span>
        </p>
      </div>

      {/* ========================================================
          MOBILE SINGLE-PAGE READER (Visible <= 768px)
          Dedicated portrait card, swipe gestures, tap zones,
          progress scrub bar, and quick jump Table of Contents
          ======================================================== */}
      <div className="lookbook-mobile">
        {/* Top Floating Bar */}
        <div className="lookbook-m-header">
          <div className="lookbook-m-brand">
            <span className="lookbook-m-brand-name">UNI</span>
            <span className="lookbook-m-brand-sub">LOOKBOOK</span>
          </div>

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

        {/* Card Stage with Tap Zones & Touch Swiping */}
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

          {/* Portrait Single-Page Reader Card */}
          <div
            key={mobilePage}
            className={`lookbook-m-card lookbook-m-card--${turnDir}`}
          >
            <MobilePageContent
              pageIndex={mobilePage}
              onOpenCover={nextMobile}
              onRestart={() => {
                setTurnDir("prev");
                setMobilePage(0);
              }}
            />
          </div>
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
            disabled={mobilePage === 0}
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
            disabled={mobilePage === 16}
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
                        setTurnDir(ch.page > mobilePage ? "next" : "prev");
                        setMobilePage(ch.page);
                        setDrawerOpen(false);
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
