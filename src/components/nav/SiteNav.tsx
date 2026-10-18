"use client";

import PillNav from "./PillNav";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Collection", href: "/#collection" },
  { label: "Our Story", href: "/about" },
  { label: "Contact", href: "#contact" },
];

export default function SiteNav({ activeHref = "/" }: { activeHref?: string }) {
  return (
    <header className="site-nav pointer-events-none absolute inset-x-0 top-0 z-50 px-6 pt-10 sm:px-10 sm:pt-12 md:px-14 md:pt-14">
      <div className="pointer-events-auto w-full">
        <PillNav
          logo="/images/Logo.webp"
          logoAlt="UNI Fine Jewelry"
          logoHref="/"
          items={NAV_ITEMS}
          activeHref="/"
          theme="dark"
          layout="split"
          surface="glass"
          itemStyle="plain"
          hoverEffect="fill"
          indicator="dot"
          size="md"
          highlightColor="#C6A15B"
          highlightTextColor="#102A31"
          textColor="#F7F3EA"
          barColor="rgba(16, 42, 49, 0.55)"
          collapse="auto"
          intro
          logoSpin={false}
          ariaLabel="Main navigation"
          className="w-full"
        />
      </div>
    </header>
  );
}
