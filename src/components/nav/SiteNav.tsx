"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./SiteNav.css";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Collection", href: "/shop" },
  { label: "Our Story", href: "/about" },
  { label: "Contact", href: "#contact" },
];

export default function SiteNav({
  activeHref = "/",
  solid = false,
}: {
  activeHref?: string;
  solid?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  // GSAP animation when menu is toggled
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      const validItems = itemsRef.current.filter(Boolean);

      gsap.fromTo(
        overlay,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.35, ease: "power2.out" }
      );

      gsap.fromTo(
        validItems,
        { y: 35, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.1,
        }
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(overlay, {
        autoAlpha: 0,
        duration: 0.25,
        ease: "power2.in",
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Floating or Solid Header */}
      <header
        className={`site-nav-wrap ${solid ? "site-nav-wrap--solid" : ""} ${isOpen ? "site-nav-wrap--open" : ""}`}
      >
        <nav className="site-nav-bar" aria-label="Main Navigation">
          {/* Logo & Brand Wordmark on Left */}
          <Link
            href="/"
            prefetch={false}
            className="site-nav-brand"
            onClick={() => {
              if (isOpen) setIsOpen(false);
            }}
          >
            <Image
              src="/images/Logo.webp"
              alt="Uni Fine Jewelry Logo"
              width={38}
              height={38}
              className="site-nav-brand__logo"
              priority
            />
            <div className="site-nav-brand__text">
              <span className="site-nav-brand__name">Uni Fine Jewelry</span>
              <span className="site-nav-brand__est">Est. 1965</span>
            </div>
          </Link>

          {/* Right Side: Just the Collapsible Menu / Close Button at Identical Coordinates */}
          <button
            type="button"
            className="site-nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span>{isOpen ? "Close" : "Menu"}</span>
            <div className="site-nav-burger" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </button>
        </nav>
      </header>

      {/* Collapsible Fullscreen Drawer / Overlay */}
      <div
        ref={overlayRef}
        className={`site-menu-overlay ${
          isOpen ? "site-menu-overlay--open" : ""
        }`}
        aria-hidden={!isOpen}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsOpen(false);
          }
        }}
      >

        <div className="site-menu-body">
          <ul className="site-menu-nav">
            {NAV_ITEMS.map((item, index) => {
              const isActive = activeHref === item.href;
              return (
                <li
                  key={item.href}
                  ref={(el) => {
                    itemsRef.current[index] = el;
                  }}
                  className="site-menu-item"
                >
                  <Link
                    href={item.href}
                    prefetch={false}
                    className={`site-menu-link ${
                      isActive ? "site-menu-link--active" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="site-menu-aside">
            <div>
              <h4>Private Salons</h4>
              <p>Jaipur Atelier &bull; Purohit Ji Ka Bagh, M.I. Road</p>
              <p>Kuala Lumpur Salon &bull; Menara Mutiara Bangsar</p>
            </div>
            <div>
              <h4>Direct Inquiries</h4>
              <p>
                <a href="mailto:info@unifinejewelry.com">
                  info@unifinejewelry.com
                </a>
              </p>
              <p>
                <a href="tel:+919829056388">+91 9829056388</a> &bull;{" "}
                <a href="tel:+60122032941">+60 122032941</a>
              </p>
            </div>
            <div>
              <h4>Heritage</h4>
              <p className="italic text-[var(--color-champagne)]">
                A legacy of brilliance, crafted to be cherished since 1965.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
