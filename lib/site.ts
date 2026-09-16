export const siteConfig = {
  name: "PROSERGUA",
  fullName: "Proyectos y Servicios de Guatemala",
  description:
    "PROSERGUA es una empresa guatemalteca dedicada a remodelación, construcción, servicios eléctricos, auditorías eléctricas y comercialización de suministros para construcción y electricidad.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.prosergua.com",
  locale: "es_GT",
};

export function absoluteUrl(path: string): string {
  return `${siteConfig.url}${path}`;
}

/**
 * Número de años de trayectoria "en curso" desde un mes/año de fundación,
 * contando el año de fundación como el primero (igual a como PROSERGUA lo
 * comunica en su presentación oficial: ya en su sexto año antes de cumplirse
 * el aniversario de diciembre, no hasta cumplirlo).
 */
export function yearsSince(year: number, monthIndex: number): number {
  const now = new Date();
  let years = now.getFullYear() - year;
  if (now.getMonth() >= monthIndex) years += 1;
  return years;
}
