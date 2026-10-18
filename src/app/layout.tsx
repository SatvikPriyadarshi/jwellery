import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fine Jewellery | Eternal Elegance",
  description:
    "Discover exquisite designs crafted to become part of your story.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${cormorant.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="m-0 min-h-full p-0 font-sans">{children}</body>
    </html>
  );
}
