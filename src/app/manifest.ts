import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Uni Fine Jewelry",
    short_name: "Uni Jewelry",
    description:
      "Bespoke high jewelry, ethical Zambian emeralds, and diamond heirlooms handcrafted since 1965.",
    start_url: "/",
    display: "standalone",
    background_color: "#081a15",
    theme_color: "#081a15",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
