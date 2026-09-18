import type { NextConfig } from "next";

/**
 * Export estático: Hostinger (hosting compartido, sin Node.js) solo puede
 * servir HTML/CSS/JS estáticos. Eso significa:
 * - `headers()` no existe aquí; las mismas cabeceras de seguridad viven en
 *   public/.htaccess (Apache), que el build copia a la raíz de out/.
 * - next/image no tiene servidor para optimizar al vuelo, así que
 *   `images.unoptimized` sirve los archivos tal cual — por eso las fotos se
 *   preprocesan a .webp con `npm run optimize-images` (ver README).
 * - `trailingSlash: true` genera cada ruta como carpeta/index.html
 *   (ej. /nosotros/index.html), que es lo que Apache espera para servir
 *   /nosotros/ sin reglas de rewrite adicionales.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
