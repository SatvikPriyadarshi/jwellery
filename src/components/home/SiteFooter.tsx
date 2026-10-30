"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./SiteFooter.css";

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="site-footer__icon-svg">
      <path
        d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="12" cy="11" r="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="site-footer__icon-svg">
      <path
        d="M8 5h2l1 2.6-1.4.9a9 9 0 0 0 4.9 4.9l.9-1.4L18 13v2a1.6 1.6 0 0 1-1.8 1.6A12.5 12.5 0 0 1 6.4 6.8 1.6 1.6 0 0 1 8 5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="site-footer__icon-svg">
      <path d="M12 19V5M5 12l7-7 7 7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SiteFooter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="site-footer" aria-label="Uni Fine Jewelry Maison Footer">
      <div className="site-footer__inner">
        {/* =================================================================
            TOP TIER: Official Brand Logo & Heritage Statement
            ================================================================= */}
        <div className="site-footer__header">
          <Link href="/" className="site-footer__brand-link" aria-label="Uni Fine Jewelry Homepage">
            <Image
              src="/images/Logo.webp"
              alt="Uni Fine Jewelry"
              width={120}
              height={50}
              className="site-footer__brand-logo"
            />
            <div className="site-footer__brand-text">
              <h2 className="site-footer__brand-name">UNI FINE JEWELRY</h2>
              <p className="site-footer__brand-sub">ESTABLISHED 1965 · JAIPUR · KUALA LUMPUR</p>
            </div>
          </Link>

          <p className="site-footer__brand-statement">
            Three generations of gemstone mastery and high jewellery artistry in Jaipur.
            Crafting certified solitaires, fine heirloom jewels, and bespoke commissions to be cherished for lifetimes.
          </p>
        </div>

        {/* =================================================================
            MIDDLE TIER: 4 Organized, Symmetrical Columns
            ================================================================= */}
        <div className="site-footer__matrix">
          {/* Column 1: Ateliers & Salons */}
          <div className="site-footer__col site-footer__col--ateliers">
            <h3 className="site-footer__heading">ATELIERS &amp; SALONS</h3>
            <div className="site-footer__salons-wrap">
              <div className="site-footer__salon-item">
                <div className="site-footer__salon-title-wrap">
                  <PinIcon />
                  <strong>Jaipur Flagship Salon</strong>
                </div>
                <p className="site-footer__salon-desc">
                  N K Towers, Purohit Ji Ka Bagh, Mirza Ismail Rd, Jaipur 302001, India
                </p>
                <div className="site-footer__salon-sublinks">
                  <a href="tel:+917568042023" className="site-footer__tel-link">
                    <PhoneIcon /> +91 75680 42023
                  </a>
                  <Link href="/contact#atelier-map" className="site-footer__map-link">
                    View Map
                  </Link>
                </div>
              </div>

              <div className="site-footer__salon-item">
                <div className="site-footer__salon-title-wrap">
                  <PinIcon />
                  <strong>Malaysia Private Suite</strong>
                </div>
                <p className="site-footer__salon-desc">
                  8-12-2, Menara Mutiara Bangsar, Jalan Liku, 59100 Kuala Lumpur
                </p>
                <div className="site-footer__salon-sublinks">
                  <a href="tel:+60122032941" className="site-footer__tel-link">
                    <PhoneIcon /> +60 122032941
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: The Collections */}
          <div className="site-footer__col">
            <h3 className="site-footer__heading">THE COLLECTIONS</h3>
            <ul className="site-footer__nav-list">
              <li><Link href="/shop" prefetch={false}>Solitaires &amp; Heirloom Rings</Link></li>
              <li><Link href="/shop" prefetch={false}>Statement High Jewellery Necklaces</Link></li>
              <li><Link href="/shop" prefetch={false}>Diamond &amp; Gemstone Bracelets</Link></li>
              <li><Link href="/shop" prefetch={false}>Certified Drop &amp; Stud Earrings</Link></li>
              <li><Link href="/contact" prefetch={false}>Bespoke Design Commissions</Link></li>
            </ul>
          </div>

          {/* Column 3: The Maison Heritage */}
          <div className="site-footer__col">
            <h3 className="site-footer__heading">THE MAISON</h3>
            <ul className="site-footer__nav-list">
              <li><Link href="/about" prefetch={false}>Our Sixty-Year Heritage</Link></li>
              <li><Link href="/about#legacy" prefetch={false}>Jaipur Gemological Mastery</Link></li>
              <li><Link href="/about" prefetch={false}>Certified Ethical Sourcing</Link></li>
              <li><Link href="/contact" prefetch={false}>Private Salon Appointment</Link></li>
              <li><Link href="/about" prefetch={false}>Master Goldsmith Craft</Link></li>
            </ul>
          </div>

          {/* Column 4: Client Services & Policies */}
          <div className="site-footer__col">
            <h3 className="site-footer__heading">CLIENT SERVICES</h3>
            <ul className="site-footer__nav-list">
              <li><Link href="/contact" prefetch={false}>Contact Atelier Concierge</Link></li>
              <li><Link href="/terms" prefetch={false}>Complimentary Insured Shipping</Link></li>
              <li><Link href="/terms" prefetch={false}>Bespoke Sizing &amp; Service</Link></li>
              <li><Link href="/privacy" prefetch={false}>Privacy Policy</Link></li>
              <li><Link href="/terms" prefetch={false}>Terms of Service</Link></li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__social-link"
                >
                  Follow on Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* =================================================================
            NEWSLETTER RIBBON: The Private Atelier Gazette
            ================================================================= */}
        <div className="site-footer__gazette">
          <div className="site-footer__gazette-copy">
            <span className="site-footer__gazette-tag">THE PRIVATE GAZETTE</span>
            <p className="site-footer__gazette-text">
              Join our private list to receive exclusive salon invitations, gemstone monographs, and bespoke previews.
            </p>
          </div>

          {isSubscribed ? (
            <div className="site-footer__gazette-thankyou">
              <span className="site-footer__gazette-check">✓</span>
              <span>Thank you. You are enrolled in the Private Client Gazette.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="site-footer__gazette-form">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="site-footer__gazette-input"
                aria-label="Email address for Private Atelier Gazette"
              />
              <button type="submit" className="site-footer__gazette-btn">
                <span>REQUEST INVITATION</span>
              </button>
            </form>
          )}
        </div>

        {/* =================================================================
            BOTTOM BASELINE: Hallmark & Scroll To Top
            ================================================================= */}
        <div className="site-footer__baseline">
          <p className="site-footer__copyright">
            © 2026 UNI FINE JEWELRY · HANDCRAFTED IN JAIPUR · ALL RIGHTS RESERVED
          </p>

          <div className="site-footer__hallmark">
            <span>JAIPUR</span>
            <span className="site-footer__dot" aria-hidden="true">·</span>
            <span>KUALA LUMPUR</span>
            <span className="site-footer__dot" aria-hidden="true">·</span>
            <span>GENEVA</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="site-footer__scroll-top"
            aria-label="Scroll back to top of page"
          >
            <span>SCROLL TO TOP</span>
            <ArrowUpIcon />
          </button>
        </div>
      </div>
    </footer>
  );
}
