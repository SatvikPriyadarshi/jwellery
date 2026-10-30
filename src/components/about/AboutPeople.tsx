"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "./AboutPeople.css";

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
      "Mr. Banwari Lal Gupta represents the foundation of the Gupta family’s longstanding association with the precious and semi-precious gemstone industry, a legacy that dates back to 1975.",
      "Having been involved in the family enterprise for decades, he has contributed significantly to its growth and development. His experience spans the gemstone trade, business management, and legal and financial advisory matters.",
      "As a senior partner and advisor, he continues to provide valuable guidance, bringing decades of industry knowledge, business insight and perspective to the enterprise. His contribution reflects the values on which the family business was built: integrity, trust, experience and enduring relationships.",
    ],
  },
];

export default function AboutPeople() {
  const refreshTimer = useRef<number | null>(null);

  const refreshAfterToggle = () => {
    if (refreshTimer.current !== null) {
      window.clearTimeout(refreshTimer.current);
    }
    refreshTimer.current = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 360);
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

        <Accordion
          type="single"
          collapsible
          className="people-accordion"
          defaultValue="govind-gupta"
          onValueChange={refreshAfterToggle}
        >
          {PEOPLE.map((person) => (
            <AccordionItem
              key={person.id}
              value={person.id}
              className="people-acc-item"
            >
              <AccordionTrigger className="people-acc-trigger items-center hover:no-underline">
                <span className="flex items-center gap-4 text-left">
                  <Avatar className="people-avatar">
                    {person.photo ? (
                      <AvatarImage src={person.photo} alt="" />
                    ) : null}
                    <AvatarFallback className="people-avatar__fallback">
                      {person.initials}
                    </AvatarFallback>
                  </Avatar>
                  <span className="flex flex-col gap-1">
                    <span className="people-acc-name">{person.name}</span>
                    <span className="people-acc-role">{person.role}</span>
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="people-acc-content">
                {person.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="people-close">
          Three generations of knowledge, one shared commitment to
          craftsmanship, quality and relationships that last.
        </p>
      </div>
    </section>
  );
}
