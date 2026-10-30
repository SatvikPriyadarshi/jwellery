"use client";

export default function ContactAtelierMap() {
  return (
    <section
      id="atelier-map"
      className="contact-map-section"
      aria-label="Visit Our Jaipur Atelier & Salon"
    >
      <div className="contact-map-container">
        {/* Centered Editorial Header */}
        <div className="contact-map-header">
          <div className="contact-map-header__eyebrow-wrap">
            <span className="contact-map-header__rule" aria-hidden="true" />
            <p className="contact-map-header__eyebrow">FLAGSHIP ATELIER &amp; SALON</p>
            <span className="contact-map-header__rule" aria-hidden="true" />
          </div>

          <h2 className="contact-map-header__title">
            Visit Us on Mirza Ismail Road
          </h2>

          <p className="contact-map-header__desc">
            Located in Jaipur&apos;s historic jewelry quarter at N K Towers. We welcome clients for private
            collection viewings, heirloom resetting consultations, and certified gemstone appraisals by appointment.
          </p>
        </div>

        {/* Centered Panoramic Luxury Map Showcase */}
        <div className="contact-map-showcase">
          {/* Floating Atelier Card (Docked on Desktop, Stacked on Mobile) */}
          <div className="contact-map-floating-card">
            <div className="contact-map-floating-card__badge">
              <span className="contact-map-floating-card__pin" aria-hidden="true">📍</span>
              <span className="contact-map-floating-card__badge-text">JAIPUR OFFICE &amp; SALON</span>
            </div>

            <h3 className="contact-map-floating-card__title">N K Towers, Jaipur</h3>

            <address className="contact-map-floating-card__address">
              Purohit Ji Ka Bagh, Mirza Ismail Rd,<br />
              Jaipur, Rajasthan 302001, India
            </address>

            <div className="contact-map-floating-card__timing">
              <span className="contact-map-floating-card__clock" aria-hidden="true">⏱</span>
              <span>Mon – Sat: 10:30 AM – 7:30 PM IST</span>
            </div>

            <div className="contact-map-floating-card__actions">
              <a
                href="https://www.google.com/maps/search/?api=1&query=N+K+Towers+Purohit+Ji+Ka+Bagh+Mirza+Ismail+Rd+Jaipur+Rajasthan+302001"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map-btn contact-map-btn--primary"
                aria-label="Open N K Towers Jaipur location in Google Maps"
              >
                <span>GET DIRECTIONS</span>
                <span aria-hidden="true">&rarr;</span>
              </a>

              <a
                href="https://wa.me/917568042023?text=Hello%20Uni%20Fine%20Jewelry%2C%20I%20would%20like%20to%20schedule%20a%20private%20visit%20to%20your%20Jaipur%20office%20at%20N%20K%20Towers."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map-btn contact-map-btn--wa"
                aria-label="Schedule a visit on WhatsApp at +91 75680 42023"
              >
                <span>BOOK VISIT ON WHATSAPP</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Expansive Interactive Google Map Canvas */}
          <div className="contact-map-frame-centered">
            <iframe
              title="Uni Fine Jewelry Jaipur Atelier & Office Location on Google Maps"
              src="https://maps.google.com/maps?q=N+K+Towers,+Purohit+Ji+Ka+Bagh,+Mirza+Ismail+Rd,+Jaipur,+Rajasthan+302001&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="contact-map-iframe-centered"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
