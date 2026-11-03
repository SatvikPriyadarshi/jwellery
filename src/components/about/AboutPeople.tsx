"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "./AboutPeople.css";

gsap.registerPlugin(ScrollTrigger);

type Person = {
  id: string;
  name: string;
  role: string;
  initials: string;
  photo?: string;
  paragraphs: readonly string[];
};

const PEOPLE: readonly Person[] = [
  {
    id: "govind-gupta",
    name: "Govind Gupta",
    role: "Founder, CEO & Partner",
    initials: "GG",
    paragraphs: [
      "With over 30 years of experience in the jewellery industry, Govind Gupta has played a pivotal role in transforming the family business from a gemstone trading enterprise into an integrated fine jewellery operation.",
      "Over the course of his career, he has built strong relationships across international markets, including India, Malaysia, Singapore, Thailand, Indonesia, Hong Kong and the United States. His expertise spans the entire jewellery value chain, from sourcing rough gemstones and overseeing their cutting and polishing to diamond procurement, jewellery manufacturing and quality control.",
      "Closely involved in every stage of production, Govind combines an in-depth understanding of gemstones with a strong focus on craftsmanship and quality. His approach is guided by a simple belief: “The market is my teacher.” He places great importance on understanding customer needs, building lasting relationships and delivering value through jewellery that reflects each customer’s individual preferences.",
    ],
  },
  {
    id: "anju-gupta",
    name: "Anju Gupta",
    role: "Partner & Creative Director",
    initials: "AG",
    paragraphs: [
      "Anju Gupta has been an integral part of the business since 2002, bringing creativity, design sensibility and a distinctive perspective to its jewellery journey.",
      "Trained in jewellery design and CAD at ARCH College, she combines technical knowledge with a keen appreciation for aesthetics, craftsmanship and wearability. Her experience includes jewellery design development, product curation and participation in international jewellery exhibitions.",
      "Anju brings an important perspective to the creative process, with a focus on understanding the preferences and aspirations of those who wear the jewellery. She believes in creating designs that balance contemporary aesthetics with timeless appeal, while maintaining international standards of quality and craftsmanship.",
    ],
  },
  {
    id: "bl-gupta",
    name: "B.L. Gupta",
    role: "Partner & Senior Advisor",
    initials: "BG",
    paragraphs: [
      "Mr. Banwari Lal Gupta represents the foundation of the Gupta family’s longstanding association with the precious and semi-precious gemstone industry, a legacy that dates back to 1968.",
      "Having been involved in the family enterprise for decades, he has contributed significantly to its growth and development. His experience spans the gemstone trade, business management, and legal and financial advisory matters.",
      "As a senior partner and advisor, he continues to provide valuable guidance, bringing decades of industry knowledge, business insight and perspective to the enterprise. His contribution reflects the values on which the family business was built: integrity, trust, experience and enduring relationships.",
    ],
  },
  {
    id: "pranava-gupta",
    name: "Pranava Gupta",
    role: "Partner | Third-Generation Jeweller",
    initials: "PG",
    paragraphs: [
      "Representing the next generation of the family’s jewellery legacy, Pranava Gupta brings a contemporary perspective to a business built on decades of experience in gemstones, diamonds and fine jewellery. With a degree in Operations and Supply Chain Management from Babson College and professional training in Diamonds and Diamond Grading from GIA, he combines formal business education with technical knowledge of the jewellery industry.",
      "As a Partner, Pranava oversees the company's manufacturing facility, with a focus on production processes, quality control, operational efficiency and product development. He is also actively involved in business development, international market expansion and exploring new opportunities across India, Southeast Asia and the Middle East.",
      "With an understanding of evolving consumer preferences and modern jewellery aesthetics, he aims to build on the family's established expertise while bringing fresh perspectives to its continued growth and evolution.",
    ],
  },
];

export default function AboutPeople() {
  const [activePerson, setActivePerson] = useState<string>("govind-gupta");
  const refreshTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (refreshTimer.current) clearTimeout(refreshTimer.current);
    };
  }, []);

  const scheduleLayoutRefresh = () => {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    if (refreshTimer.current) clearTimeout(refreshTimer.current);
    refreshTimer.current = setTimeout(() => {
      ScrollTrigger.refresh();
      root.style.scrollBehavior = previous;
    }, 460);
  };

  const togglePerson = (id: string) => {
    setActivePerson((current) => (current === id ? "" : id));
    scheduleLayoutRefresh();
  };

  return (
    <section
      id="people"
      className="people-section"
      aria-labelledby="people-heading"
    >
      <div className="people-section__inner">
        <header className="people-head">
          <p className="people-eyebrow">The family</p>
          <h2 id="people-heading" className="people-title">
            The People Behind Our Legacy
          </h2>
          <p className="people-lead">
            Rooted in heritage, guided by experience and driven by creativity,
            our business brings together generations of knowledge and a shared
            commitment to fine jewellery.
          </p>
        </header>

        <div className="people-accordion">
          {PEOPLE.map((person) => {
            const open = activePerson === person.id;
            return (
              <div key={person.id} className="people-acc-item">
                <button
                  type="button"
                  className="people-acc-trigger"
                  aria-expanded={open}
                  aria-controls={`person-${person.id}`}
                  onClick={() => togglePerson(person.id)}
                >
                  <span className="people-acc-identity">
                    <Avatar className="people-avatar">
                      {person.photo ? (
                        <AvatarImage src={person.photo} alt="" />
                      ) : null}
                      <AvatarFallback className="people-avatar__fallback">
                        {person.initials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="people-acc-meta">
                      <span className="people-acc-name">{person.name}</span>
                      <span className="people-acc-role">{person.role}</span>
                    </span>
                  </span>
                  <ChevronDown className="people-acc-chevron" aria-hidden="true" />
                </button>
                <div
                  id={`person-${person.id}`}
                  className={`people-acc-panel${open ? " is-open" : ""}`}
                  role="region"
                >
                  <div className="people-acc-clip">
                    <div className="people-acc-content">
                      {person.paragraphs.map((paragraph, index) => (
                        <p key={`${person.id}-${index}`}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="people-close">
          Three generations of knowledge, one shared commitment to
          craftsmanship, quality and relationships that last.
        </p>
      </div>
    </section>
  );
}
