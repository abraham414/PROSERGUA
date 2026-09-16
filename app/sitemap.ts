import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/nosotros", "/servicios", "/proyectos", "/contacto"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
    }),
  );

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/servicios/${service.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes];
}
