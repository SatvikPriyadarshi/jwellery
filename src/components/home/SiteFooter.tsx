"use client";

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
        strokeWidth="1.3"
      />
      <circle cx="12" cy="11" r="1.8" fill="none" stroke="currentColor" strokeWidth="1.3" />
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
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="site-footer__icon-svg">
      <path
        fill="currentColor"
        d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="site-footer__icon-svg">
      <rect x="4" y="6.5" width="16" height="11" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 8l7 5 7-5" fill="none" stroke="currentColor" strokeWidth="1.3" />
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
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="site-footer" aria-label="Uni Fine Jewelry Grand Maison Footer">
      <div className="site-footer__window-container">
        {/* =================================================================
            1. TOP CHAMBER: The Private Client Gazette (Architectural Ribbon)
            ================================================================= */}
        <div className="site-footer__gazette-ribbon">
          <div className="site-footer__gazette-info">
            <span className="site-footer__gazette-eyebrow">ATELIER COMMUNIQUÉ · PRIVATE CLIENT PRIVILEGE</span>
            <h3 className="site-footer__gazette-heading">Join The Private Client Gazette</h3>
            <p className="site-footer__gazette-desc">
              Receive private salon invitations, bespoke gemstone dossiers, and exclusive atelier collection previews.
            </p>
          </div>

          <div className="site-footer__gazette-action">
            {subscribed ? (
              <div className="site-footer__gazette-success" role="status">
                <span className="site-footer__gazette-success-dot" aria-hidden="true">✓</span>
                <span>You are registered for private atelier communications.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="site-footer__gazette-form">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="site-footer__gazette-input"
                  aria-label="Email address for Private Client Gazette"
                />
                <button type="submit" className="site-footer__gazette-btn">
                  <span>JOIN GAZETTE</span>
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* =================================================================
            2. MIDDLE CHAMBER: The 4-Column Luxury Maison Matrix
            ================================================================= */}
        <div className="site-footer__matrix">
          {/* Column 1: Maison Heritage & Direct Concierge */}
          <div className="site-footer__col site-footer__col--heritage">
            <div className="site-footer__crest-mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" className="site-footer__crest-svg">
                <polygon points="20 4 36 14 36 26 20 36 4 26 4 14" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <polygon points="20 10 30 16 30 24 20 30 10 24 10 16" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>

            <h2 className="site-footer__brand-title">UNI FINE JEWELRY</h2>
            <p className="site-footer__brand-est">ESTABLISHED 1965 · JAIPUR, INDIA</p>
            <p className="site-footer__brand-narrative">
              Handcrafted high jewellery and certified gemstone mastery, carrying forward three generations
              of royal Rajasthani goldsmith artistry.
            </p>

            {/* Live Concierge Availability Badge */}
            <div className="site-footer__concierge-status">
              <span className="site-footer__pulse-dot" aria-hidden="true" />
              <span>Concierge Active · Mon–Sat 10:30 AM – 7:30 PM IST</span>
            </div>

            <div className="site-footer__touchpoints">
              <a
                href="https://wa.me/917568042023?text=Hello%20Uni%20Fine%20Jewelry%20Concierge%2C%20I%20would%20like%20to%20inquire%20about%20your%20fine%20jewelry%20collections."
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__direct-touch"
                aria-label="Connect on WhatsApp Concierge at +91 75680 42023"
              >
                <WhatsAppIcon />
                <span>WhatsApp Concierge: +91 75680 42023</span>
              </a>

              <a
                href="mailto:info@unifinejewelry.com"
                className="site-footer__direct-touch"
                aria-label="Email Uni Fine Jewelry"
              >
                <MailIcon />
                <span>info@unifinejewelry.com</span>
              </a>
            </div>
          </div>

          {/* Column 2: World Ateliers & Salons */}
          <div className="site-footer__col">
            <h3 className="site-footer__col-heading">WORLD ATELIERS</h3>
            <div className="site-footer__salon-card">
              <div className="site-footer__salon-header">
                <PinIcon />
                <strong className="site-footer__salon-title">Jaipur Flagship Atelier &amp; Salon</strong>
              </div>
              <p className="site-footer__salon-address">
                N K Towers, Purohit Ji Ka Bagh, Mirza Ismail Rd, Jaipur, Rajasthan 302001, India
              </p>
              <div className="site-footer__salon-links">
                <a href="tel:+917568042023" className="site-footer__salon-tel">
                  <PhoneIcon /> +91 75680 42023
                </a>
                <Link href="/contact#atelier-map" className="site-footer__salon-maplink">
                  <span>View On Map</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="site-footer__salon-card">
              <div className="site-footer__salon-header">
                <PinIcon />
                <strong className="site-footer__salon-title">Malaysia Private Suite</strong>
              </div>
              <p className="site-footer__salon-address">
                8-12-2, Menara Mutiara Bangsar, Jalan Liku, 59100 Kuala Lumpur, Malaysia
              </p>
              <div className="site-footer__salon-links">
                <a href="tel:+60122032941" className="site-footer__salon-tel">
                  <PhoneIcon /> +60 122032941
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: The Collections & Curations */}
          <div className="site-footer__col">
            <h3 className="site-footer__col-heading">THE COLLECTIONS</h3>
            <ul className="site-footer__nav-tree">
              <li>
                <Link href="/shop" prefetch={false}>
                  Solitaires &amp; Heirloom Rings
                </Link>
              </li>
              <li>
                <Link href="/shop" prefetch={false}>
                  High Jewellery Necklaces
                </Link>
              </li>
              <li>
                <Link href="/shop" prefetch={false}>
                  Diamond &amp; Gemstone Bracelets
                </Link>
              </li>
              <li>
                <Link href="/shop" prefetch={false}>
                  Certified Drop Earrings
                </Link>
              </li>
              <li>
                <Link href="/contact" prefetch={false}>
                  Bespoke Design Commissions
                </Link>
              </li>
              <li>
                <Link href="/about#legacy" prefetch={false}>
                  Jaipur Gemological Legacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Client Services & Assurance */}
          <div className="site-footer__col">
            <h3 className="site-footer__col-heading">CLIENT ASSURANCE</h3>
            <ul className="site-footer__nav-tree">
              <li>
                <Link href="/contact" prefetch={false}>
                  Schedule Private Consultation
                </Link>
              </li>
              <li>
                <Link href="/about" prefetch={false}>
                  Ethical &amp; Certified Gemstones
                </Link>
              </li>
              <li>
                <Link href="/terms" prefetch={false}>
                  Worldwide Insured Delivery
                </Link>
              </li>
              <li>
                <Link href="/terms" prefetch={false}>
                  Return &amp; Sizing Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy" prefetch={false}>
                  Privacy &amp; Data Security
                </Link>
              </li>
              <li>
                <Link href="/terms" prefetch={false}>
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__ig-link"
                >
                  Follow On Instagram ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* =================================================================
            3. LOWER CHAMBER: Monumental Architectural Brand Watermark
            ================================================================= */}
        <div className="site-footer__watermark-wrap" aria-hidden="true">
          <span className="site-footer__watermark">UNI FINE JEWELRY</span>
        </div>

        {/* =================================================================
            4. BASELINE CHAMBER: Hallmark & Scroll-To-Top
            ================================================================= */}
        <div className="site-footer__baseline">
          <p className="site-footer__hallmark-copy">
            © 2026 UNI FINE JEWELRY · HANDCRAFTED IN JAIPUR · ALL RIGHTS RESERVED
          </p>

          <div className="site-footer__hallmark-cities">
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
