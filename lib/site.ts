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
 * Años completos transcurridos desde un mes/año de fundación, sin
 * redondear hacia arriba antes de cumplirse el mes de aniversario.
 */
export function yearsSince(year: number, monthIndex: number): number {
  const now = new Date();
  let years = now.getFullYear() - year;
  if (now.getMonth() < monthIndex) years -= 1;
  return years;
}
