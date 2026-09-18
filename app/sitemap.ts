import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site";

// Requerido por el export estático (output: "export").
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Con trailingSlash: true (necesario para el export estático en Hostinger)
  // cada ruta real termina en "/" — el sitemap debe reflejar esa misma URL.
  const staticRoutes = ["/", "/nosotros/", "/servicios/", "/proyectos/", "/contacto/"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
    }),
  );

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/servicios/${service.slug}/`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes];
}
