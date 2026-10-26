import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/nav/SiteNav";
import SiteFooter from "@/components/home/SiteFooter";

export const metadata: Metadata = {
  title: "Piece Not Found | Uni Fine Jewelry",
  description: "The requested jewellery piece or page is not available.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#081a15] text-[var(--color-ivory)] flex flex-col justify-between">
      <SiteNav activeHref="/" solid />

      <div className="py-24 sm:py-32 px-6 max-w-2xl mx-auto text-center">
        <span className="text-[var(--color-champagne)] font-mono text-xs tracking-[0.3em] uppercase block mb-3">
          Error 404 &bull; Archived Entry
        </span>

        <h1 className="font-serif text-3xl sm:text-5xl text-[var(--color-ivory)] font-light leading-tight mb-4">
          Piece Not Found in Vault
        </h1>

        <p className="font-sans text-sm sm:text-base text-stone-300 font-light leading-relaxed mb-8">
          The fine jewellery creation or page you are seeking may have been placed in our private archives or moved to a new catalog reference.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/shop"
            prefetch={false}
            className="px-6 py-3.5 bg-[var(--color-champagne)] text-[#081a15] font-sans text-xs font-semibold tracking-[0.2em] uppercase rounded hover:bg-[#d8b56f] transition-all"
          >
            Explore The Collection &rarr;
          </Link>
          <Link
            href="/"
            prefetch={false}
            className="px-6 py-3.5 border border-[rgba(198,161,91,0.5)] text-[var(--color-champagne)] font-sans text-xs font-semibold tracking-[0.18em] uppercase rounded hover:bg-[rgba(198,161,91,0.12)] transition-all"
          >
            Return to Atelier Home
          </Link>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
