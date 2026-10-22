import Image from "next/image";
import Link from "next/link";
import "./SiteFooter.css";

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
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

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="6.5" width="16" height="11" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 8l7 5 7-5" fill="none" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="7.5" width="16" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12" cy="13" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
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

function Crest() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M24 8c1.4 4 3 5.6 6 7-3 .8-4.6 2.8-6 6-1.4-3.2-3-5.2-6-6 3-1.4 4.6-3 6-7z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path d="M24 23v14" fill="none" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer id="contact" className="site-footer">
      <Image
        src="/images/jewellery/footer-botanical.jpg"
        alt=""
        width={720}
        height={400}
        className="site-footer__wash site-footer__wash--tl"
      />
      <Image
        src="/images/jewellery/footer-botanical.jpg"
        alt=""
        width={720}
        height={400}
        className="site-footer__wash site-footer__wash--br"
      />

      <div className="site-footer__top">
        <figure className="site-footer__box">
          <Image
            src="/images/jewellery/footer-box.jpg"
            alt="Emerald necklace in a velvet box"
            fill
            sizes="280px"
            className="site-footer__box-img"
          />
        </figure>

        <address className="site-footer__contact">
          <p>
            <span className="site-footer__icon"><PinIcon /></span>
            <span>
              <strong>India Office</strong>
              N K Towers, Purohit Ji Ka Bagh, Mirza Ismail Rd, Jaipur, Rajasthan 302001
            </span>
          </p>
          <p>
            <span className="site-footer__icon"><PinIcon /></span>
            <span>
              <strong>Malaysia Office</strong>
              8-12-2, Menara Mutiara Bangsar, Jalan Liku Off Jalan Bangsar, 59100 Kuala Lumpur
            </span>
          </p>
          <p>
            <span className="site-footer__icon"><MailIcon /></span>
            <span>
              <strong>Mail</strong>
              <a href="mailto:info@unifinejewelry.com">info@unifinejewelry.com</a>
            </span>
          </p>
          <p>
            <span className="site-footer__icon"><CameraIcon /></span>
            <span>
              <strong>Social Media</strong>
              Instagram
            </span>
          </p>
          <p>
            <span className="site-footer__icon"><PhoneIcon /></span>
            <span>
              <strong>India</strong>
              <a href="tel:+919829056388">+91 9829056388</a>
            </span>
          </p>
          <p>
            <span className="site-footer__icon"><PhoneIcon /></span>
            <span>
              <strong>Malaysia</strong>
              <a href="tel:+60122032941">+60 122032941</a>
            </span>
          </p>
        </address>

        <div className="site-footer__connect">
          <p className="site-footer__eyebrow">Stay Connected</p>
          <h2>Check out now &amp; your first order</h2>
          <p className="site-footer__lede">
            Enjoy a 5% Discount on Your First Order as Our Welcome Gift to You.
          </p>
          <form className="site-footer__form">
            <label className="site-footer__field">
              <span className="sr-only">Full Name</span>
              <span className="site-footer__field-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M6.5 18.5c1-2.6 2.8-4 5.5-4s4.5 1.4 5.5 4" fill="none" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </span>
              <input id="full-name" name="fullName" type="text" placeholder="Full Name" />
            </label>
            <label className="site-footer__field">
              <span className="sr-only">Email</span>
              <span className="site-footer__field-icon" aria-hidden="true"><MailIcon /></span>
              <input id="email" name="email" type="email" placeholder="Email" />
            </label>
            <button type="button">
              Send <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>

        <div className="site-footer__aside">
          <div className="site-footer__motto">
            <Crest />
            <p>
              Timeless beauty
              <br />
              in every detail
            </p>
          </div>
          <Image
            src="/images/jewellery/footer-stones.jpg"
            alt=""
            width={220}
            height={220}
            className="site-footer__stones"
          />
        </div>
      </div>

      <div className="site-footer__band">
        <nav aria-label="Information">
          <h2>Information</h2>
          <ul>
            <li><Link href="/" prefetch={false}>Home</Link></li>
            <li><Link href="/about" prefetch={false}>About us</Link></li>
            <li><Link href="/shop" prefetch={false}>Shop</Link></li>
            <li><Link href="/about#legacy" prefetch={false}>Our Legacy</Link></li>
            <li><a href="#contact">Contact us</a></li>
          </ul>
        </nav>
        <nav aria-label="Useful links">
          <h2>Useful Links</h2>
          <ul>
            <li><a href="#contact">Privacy Policy</a></li>
            <li><a href="#contact">Terms &amp; Condition</a></li>
            <li><a href="#contact">Return Policy</a></li>
          </ul>
        </nav>
        <div className="site-footer__mark">
          <Crest />
          <div className="site-footer__mark-line">
            <p>
              Timeless beauty
              <br />
              in every detail
            </p>
          </div>
        </div>
        <p className="site-footer__copy">
          <span aria-hidden="true">◇</span>
          Copyright © 2024 Uni Fine Jewelry – All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
