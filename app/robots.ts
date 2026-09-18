import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Requerido por el export estático (output: "export").
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
