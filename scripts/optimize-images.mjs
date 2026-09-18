// Uso: npm run optimize-images
//
// El sitio es un export estático (sin servidor Next.js en producción), así
// que next/image ya no puede redimensionar/convertir imágenes al vuelo.
// Este script hace ese trabajo una sola vez, en desarrollo: convierte cada
// .jpg/.jpeg de public/images/<categoría> a .webp, con un ancho máximo y
// calidad pensados para dónde se usa esa categoría en el sitio.
//
// Al agregar fotos nuevas: colócalas en la carpeta que corresponda como
// .jpg, corre este script, y usa el .webp resultante en data/*.ts o el
// componente. Los .jpg originales no se borran ni se sobreescriben.
import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const PROJECT_ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const CATEGORIES = [
  { dir: "public/images/backgrounds", maxWidth: 1920, quality: 75 },
  { dir: "public/images/team", maxWidth: 1200, quality: 80 },
  { dir: "public/images/office", maxWidth: 1200, quality: 80 },
  { dir: "public/images/services", maxWidth: 1200, quality: 80 },
  { dir: "public/images/clients", maxWidth: 400, quality: 82 },
  { dir: "public/images/brands", maxWidth: 400, quality: 82 },
];

async function run() {
  let totalBefore = 0;
  let totalAfter = 0;
  let converted = 0;

  for (const { dir, maxWidth, quality } of CATEGORIES) {
    const absDir = join(PROJECT_ROOT, dir);
    const files = (await readdir(absDir)).filter((f) => /\.(jpe?g)$/i.test(f));
    for (const file of files) {
      const srcPath = join(absDir, file);
      const destName = file.replace(/\.(jpe?g)$/i, ".webp");
      const destPath = join(absDir, destName);
      const before = (await stat(srcPath)).size;

      await sharp(srcPath)
        .resize({ width: maxWidth, withoutEnlargement: true })
        .webp({ quality })
        .toFile(destPath);

      const after = (await stat(destPath)).size;
      totalBefore += before;
      totalAfter += after;
      converted += 1;
      console.log(
        `${dir}/${file} -> ${destName}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`,
      );
    }
  }

  if (converted === 0) {
    console.log("No hay .jpg/.jpeg pendientes de convertir.");
    return;
  }

  console.log(
    `\n${converted} imagen(es): ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
