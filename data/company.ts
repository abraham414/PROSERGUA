import type { CompanyInfo } from "@/types";

export const company: CompanyInfo = {
  legalName: "Proyectos y Servicios de Guatemala",
  brandName: "PROSERGUA",
  tagline: "Proyectos y Servicios de Guatemala",
  foundedYear: 2020,
  foundedMonthIndex: 11, // Diciembre (0-indexado)
  foundedLabel: "Fundada en diciembre de 2020",
  teamSize: 25,
  teamSizeLabel: "Equipo de aproximadamente 25 personas entre empleados directos y colaboradores externos",
  mission:
    "Proporcionar soluciones integrales a nuestros clientes por medio de la experiencia, innovación y compromiso de nuestro equipo, garantizando la excelencia en cada proyecto que realizamos.",
  vision:
    "Trascender los límites de nuestro mercado actual, posicionándonos como líderes en el sector industrial.",
  values: [
    {
      name: "Integridad",
      description:
        "Nos comprometemos a actuar con honestidad, transparencia y ética en todas nuestras interacciones, tanto con nuestros clientes como con nuestros colaboradores.",
    },
    {
      name: "Excelencia",
      description:
        "Buscar constantemente la mejora y superar las expectativas, brindando servicios y productos de la más alta calidad a nuestros clientes.",
    },
    {
      name: "Compromiso",
      description:
        "Estamos comprometidos con el éxito de nuestros clientes y con el crecimiento sostenible de nuestra empresa.",
    },
  ],
  valueProposition: [
    {
      title: "Calidad",
      description:
        "Nuestros servicios son realizados por ingenieros expertos y técnicos calificados, utilizando equipos de última tecnología, asegurando que cada aspecto sea evaluado y optimizado.",
    },
    {
      title: "Seguridad",
      description:
        "Es nuestra máxima prioridad. Nos aseguramos de que todas nuestras operaciones cumplan con las normativas de seguridad más estrictas, protegiendo tanto a nuestro equipo como a su proyecto.",
    },
    {
      title: "Precio competitivo",
      description:
        "Nuestra eficiencia operativa nos permite mantener precios competitivos sin comprometer la calidad, proporcionando un excelente retorno de inversión.",
    },
    {
      title: "Personal calificado",
      description:
        "Contamos con un equipo de ingenieros y técnicos calificados en cada rama, asegurando un servicio competente y de alta calidad.",
    },
    {
      title: "Atención al cliente",
      description:
        "Ofrecemos un trato cercano y personalizado, adaptándonos a las necesidades específicas de cada cliente.",
    },
  ],
  closingStatement:
    "Construimos más que proyectos: construimos confianza, calidad y soluciones que perduran.",
  contact: {
    email: "proserguagt@gmail.com",
    phones: ["3725 4237", "2292 3710"],
    // Número de WhatsApp (3725 4237) en formato internacional para wa.me: 502 + número sin espacios.
    whatsapp: "50237254237",
    address: "11 Ave. 6ta. calle 11-10 Zona 11 de Mixco, Lo de Fuentes.",
  },
};
