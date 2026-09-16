import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "herreria-estructuras-metalicas",
    name: "Herrería / Estructuras metálicas",
    category: "Construcción y estructuras",
    shortDescription:
      "Construcción de estructuras metálicas incluyendo diseño, fabricación, montaje e instalación de cubiertas y techos metálicos.",
    description:
      "Construcción de estructuras metálicas incluyendo diseño, fabricación, montaje e instalación de cubiertas y techos metálicos.",
    bullets: ["Diseño", "Fabricación", "Montaje", "Instalación de cubiertas y techos metálicos"],
    image: {
      src: "/images/services/herreria.jpg",
      alt: "Estructura metálica y techo instalado por PROSERGUA",
    },
  },
  {
    slug: "tuberia-hidraulica",
    name: "Tubería hidráulica",
    category: "Construcción y estructuras",
    shortDescription:
      "Instalación y montaje de tuberías hidráulicas, incluyendo redes de vapor, agua potable, aguas grises y aguas negras.",
    description:
      "Instalación y montaje de tuberías hidráulicas, incluyendo redes de vapor, agua potable, aguas grises y aguas negras.",
    bullets: ["Redes de vapor", "Agua potable", "Aguas grises", "Aguas negras"],
    image: {
      src: "/images/services/tuberia-hidraulica.jpg",
      alt: "Instalación de tubería hidráulica industrial",
    },
  },
  {
    slug: "construccion-reforzamiento",
    name: "Construcción / Reforzamiento",
    category: "Construcción y estructuras",
    shortDescription:
      "Construcción y remodelación integral para espacios residenciales, comerciales e institucionales.",
    description:
      "Construcción y remodelación integral para espacios residenciales, comerciales e institucionales. Incluye modificaciones estructurales, distribución de espacios, acabados y adecuaciones.",
    bullets: [
      "Modificaciones estructurales",
      "Distribución de espacios",
      "Acabados",
      "Adecuaciones",
    ],
    image: {
      src: "/images/services/construccion-remodelacion.jpg",
      alt: "Trabajo de construcción y reforzamiento en obra",
    },
  },
  {
    slug: "remodelaciones",
    name: "Remodelaciones",
    category: "Construcción y estructuras",
    shortDescription:
      "Transformamos y adecuamos espacios mediante remodelaciones integrales.",
    description:
      "Transformamos y adecuamos espacios mediante remodelaciones, incluyendo la instalación de piso, puertas corredizas de cristal, acabados, divisiones, cielos falsos, pintura y mejoras generales.",
    bullets: [
      "Instalación de piso",
      "Puertas corredizas de cristal",
      "Divisiones y cielos falsos",
      "Pintura y mejoras generales",
    ],
    image: {
      src: "/images/services/remodelaciones.jpg",
      alt: "Espacio remodelado con divisiones de cristal",
    },
  },
  {
    slug: "electricidad",
    name: "Electricidad",
    category: "Eléctrico",
    shortDescription:
      "Instalación, mantenimiento y reparación de sistemas eléctricos y sistemas de tierras físicas.",
    description:
      "Instalación, mantenimiento y reparación de sistemas eléctricos y elaboración e instalación de sistemas de tierras físicas.",
    bullets: ["Instalación", "Mantenimiento", "Reparación", "Sistemas de tierras físicas"],
    image: {
      src: "/images/services/electricidad.jpg",
      alt: "Tablero eléctrico industrial intervenido por un técnico",
    },
  },
  {
    slug: "auditorias-electricas",
    name: "Auditorías eléctricas",
    category: "Eléctrico",
    shortDescription:
      "Evaluamos el estado, seguridad y eficiencia de las instalaciones eléctricas.",
    description:
      "Evaluamos el estado, seguridad y eficiencia de las instalaciones eléctricas, identificando riesgos y oportunidades de mejora para garantizar un funcionamiento confiable y seguro.",
    image: {
      src: "/images/services/auditorias-electricas.jpg",
      alt: "Técnico realizando una auditoría eléctrica con equipo especializado",
    },
  },
  {
    slug: "comercializacion-suministros",
    name: "Comercialización de suministros",
    category: "Suministros",
    shortDescription:
      "Amplia variedad de suministros y materiales para proyectos de construcción.",
    description:
      "Ofrecemos una amplia variedad de suministros y materiales para proyectos de construcción. Promovemos productos de la mejor calidad para atender las necesidades de cada proyecto.",
    image: {
      src: "/images/services/suministros.jpg",
      alt: "Bodega de suministros metálicos para construcción",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
