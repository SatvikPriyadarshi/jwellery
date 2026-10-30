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
            <p className="contact-map-header__eyebrow">ATELIER LOCATION · JAIPUR, INDIA</p>
          </div>

          <h2 className="contact-map-header__title">
            Visit Our Jaipur Salon
          </h2>

          <address className="contact-map-header__address">
            N K Towers, Purohit Ji Ka Bagh, Mirza Ismail Rd, Jaipur, Rajasthan 302001, India
          </address>

          <p className="contact-map-header__desc">
            Open Monday – Saturday: 10:30 AM – 7:30 PM IST · Private Collection Viewings &amp; Appraisals by Appointment
          </p>

          <div className="contact-map-header__actions">
            <a
              href="https://www.google.com/maps/search/?api=1&query=N+K+Towers+Purohit+Ji+Ka+Bagh+Mirza+Ismail+Rd+Jaipur+Rajasthan+302001"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-map-btn-clean"
              aria-label="Open N K Towers Jaipur location in Google Maps"
            >
              <span>GET DIRECTIONS ON GOOGLE MAPS</span>
            </a>
            <a
              href="https://wa.me/917568042023?text=Hello%20Uni%20Fine%20Jewelry%2C%20I%20would%20like%20to%20schedule%20a%20private%20visit%20to%20your%20Jaipur%20office%20at%20N%20K%20Towers."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-map-btn-wa-clean"
              aria-label="Book visit on WhatsApp"
            >
              <span>BOOK PRIVATE VISIT</span>
            </a>
          </div>
        </div>

        {/* Pure, Clean, Centered Panoramic Google Map (No Hardcoded Overlays) */}
        <div className="contact-map-showcase">
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
    </section>
  );
}
