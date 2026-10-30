"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ContactStudio() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduce) return;

      const copy = section.querySelector(".contact-studio__copy");
      const visual = section.querySelector(".contact-studio__visual");

      if (copy && visual) {
        gsap.fromTo(
          copy,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          visual,
          { autoAlpha: 0, y: 35, scale: 0.99 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="contact-studio"
      aria-label="Visit Our Studio in Jaipur"
    >
      <div className="contact-studio__inner">
        {/* Left Column: Office Details & Directions */}
        <div className="contact-studio__copy">
          <p className="contact-studio__eyebrow">VISIT US IN JAIPUR</p>

          <h2 className="contact-studio__title">Jaipur Office &amp; Salon</h2>

          <p className="contact-studio__desc">
            We welcome clients to our Jaipur office for collection viewings,
            gemstone appraisals, and bespoke consultations by appointment.
          </p>

          <div className="contact-studio__location-card">
            <div className="contact-studio__location-left">
              <span className="contact-detail-row__icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" />
                  <circle cx="12" cy="11" r="2" />
                </svg>
              </span>
              <address className="contact-studio__location-text">
                N K Towers, Purohit Ji Ka Bagh, <br />
                Mirza Ismail Rd, Jaipur, <br />
                Rajasthan 302001, India
              </address>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=N+K+Towers+Purohit+Ji+Ka+Bagh+Mirza+Ismail+Rd+Jaipur+Rajasthan+302001"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-studio__directions-link"
              aria-label="Get directions to Uni Fine Jewelry Jaipur office on Google Maps"
            >
              <span>GET DIRECTIONS</span>
            </a>
          </div>
        </div>

        {/* Right Column: Jaipur Showroom Photograph */}
        <div className="contact-studio__visual">
          <div className="contact-studio__image-frame">
            <Image
              src="/images/contact/jaipur-showroom.jpg"
              alt="Uni Fine Jewelry private salon and consultation lounge in Jaipur with floral display and brand emblem"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 550px"
              className="contact-studio__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
