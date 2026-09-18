import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${company.brandName} — ${company.tagline}`,
    short_name: company.brandName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1a336a",
    lang: "es-GT",
    icons: [
      {
        src: "/icon.png",
        type: "image/png",
        sizes: "1028x996",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
  };
}
