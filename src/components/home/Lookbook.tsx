"use client";

import Image from "next/image";
import { useState } from "react";
import "./Lookbook.css";

const PHOTO = "/images/jewellery-hero.png";

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

export default function Lookbook() {
  const leafCount = spreads.length - 1;
  const pageCount = spreads.length * 2;
  const [closed, setClosed] = useState(true);
  const [turned, setTurned] = useState(0);
  const next = () => {
    if (closed) {
      setClosed(false);
      return;
    }
    setTurned((value) => Math.min(leafCount, value + 1));
  };
  const prev = () => {
    if (closed) return;
    if (turned === 0) {
      setClosed(true);
      return;
    }
    setTurned((value) => Math.max(0, value - 1));
  };
  const leafZ = (index: number) => (turned > index ? 10 + index : 50 - index);

  return (
    <section className="lookbook" aria-label="Jewellery lookbook">
      <Image
        src="/images/jewellery/lookbook-scene.jpg"
        alt=""
        fill
        sizes="100vw"
        className="lookbook-scene"
      />
      <button
        type="button"
        className="lookbook-nav lookbook-nav--prev"
        aria-label="Previous page"
        onClick={prev}
        disabled={closed}
      />
      <div className={`lookbook-book ${closed ? "lookbook-book--closed" : ""}`}>
        {closed ? (
          <div className="lookbook-cover">
            <Image
              src="/images/Logo.webp"
              alt="Uni Fine Jewelry"
              width={280}
              height={112}
              priority
              className="lookbook-cover__logo"
            />
            <p>The Uni Collection</p>
          </div>
        ) : null}
        <div className="lookbook-plate lookbook-plate-left">
          <FaceView face={spreads[0].left} page={1} pages={pageCount} />
        </div>

        <div className="lookbook-plate lookbook-plate-right">
          <FaceView
            face={spreads[leafCount].right}
            page={pageCount}
            pages={pageCount}
          />
        </div>

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
      </div>
      <button
        type="button"
        className="lookbook-nav lookbook-nav--next"
        aria-label="Next page"
        onClick={next}
        disabled={turned === leafCount}
      />
      <p className="lookbook-caption">
        <span>The Uni Collection</span>
        <span>
          {closed
            ? "Cover"
            : `${turned * 2 + 1} / ${turned * 2 + 2}`}
        </span>
      </p>
    </section>
  );
}
