import Link from "next/link";
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

export default function SiteFooter() {
  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__container">
        {/* Single unified 4-column luxury grid */}
        <div className="site-footer__grid">
          {/* Column 1: Maison Brand & Heritage */}
          <div className="site-footer__col site-footer__col--brand">
            <h2 className="site-footer__brand-title">UNI FINE JEWELRY</h2>
            <p className="site-footer__brand-est">EST. 1965 · JAIPUR</p>
            <p className="site-footer__brand-desc">
              Bespoke high jewellery and certified gemstone mastery, handcrafted by master artisans.
            </p>
            <div className="site-footer__brand-actions">
              <a
                href="https://wa.me/917568042023?text=Hello%20Uni%20Fine%20Jewelry%20Concierge%2C%20I%20would%20like%20to%20inquire%20about%20your%20fine%20jewelry%20collections."
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__quick-link"
                aria-label="Chat with WhatsApp Concierge at +91 75680 42023"
              >
                <WhatsAppIcon />
                <span>WhatsApp Concierge</span>
              </a>
              <a
                href="mailto:info@unifinejewelry.com"
                className="site-footer__quick-link"
                aria-label="Email Uni Fine Jewelry"
              >
                <MailIcon />
                <span>info@unifinejewelry.com</span>
              </a>
            </div>
          </div>

          {/* Column 2: Ateliers & Salons */}
          <div className="site-footer__col">
            <h3 className="site-footer__heading">Ateliers &amp; Salons</h3>
            <div className="site-footer__locations">
              <div className="site-footer__loc-item">
                <p className="site-footer__loc-name">
                  <PinIcon />
                  <span>Jaipur Atelier</span>
                </p>
                <p className="site-footer__loc-address">
                  N K Towers, Purohit Ji Ka Bagh, M.I. Rd, Jaipur 302001
                </p>
                <a href="tel:+917568042023" className="site-footer__loc-tel">
                  <PhoneIcon /> +91 75680 42023
                </a>
              </div>

              <div className="site-footer__loc-item">
                <p className="site-footer__loc-name">
                  <PinIcon />
                  <span>Malaysia Salon</span>
                </p>
                <p className="site-footer__loc-address">
                  Menara Mutiara Bangsar, Jalan Liku, 59100 KL
                </p>
                <a href="tel:+60122032941" className="site-footer__loc-tel">
                  <PhoneIcon /> +60 122032941
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: The Maison Navigation */}
          <div className="site-footer__col">
            <h3 className="site-footer__heading">The Maison</h3>
            <ul className="site-footer__nav-list">
              <li>
                <Link href="/shop" prefetch={false}>
                  The Collection
                </Link>
              </li>
              <li>
                <Link href="/about" prefetch={false}>
                  Our Heritage
                </Link>
              </li>
              <li>
                <Link href="/about#legacy" prefetch={false}>
                  Jaipur Craftsmanship
                </Link>
              </li>
              <li>
                <Link href="/contact" prefetch={false}>
                  Bespoke Commissions
                </Link>
              </li>
              <li>
                <Link href="/contact#atelier-map" prefetch={false}>
                  Visit Jaipur Atelier
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Client Care & Policies */}
          <div className="site-footer__col">
            <h3 className="site-footer__heading">Client Care</h3>
            <ul className="site-footer__nav-list">
              <li>
                <Link href="/contact" prefetch={false}>
                  Contact Concierge
                </Link>
              </li>
              <li>
                <Link href="/privacy" prefetch={false}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" prefetch={false}>
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/terms" prefetch={false}>
                  Return &amp; Sizing Policy
                </Link>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__ig-link"
                >
                  Instagram ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Refined single-line bottom bar */}
        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            © 2026 Uni Fine Jewelry. All Rights Reserved.
          </p>
          <div className="site-footer__motto">
            <span>Jaipur</span>
            <span className="site-footer__dot">·</span>
            <span>Kuala Lumpur</span>
            <span className="site-footer__dot">·</span>
            <span>Bespoke High Jewellery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
