import type { Project } from "@/types";

/**
 * La presentación oficial de PROSERGUA no asigna nombres individuales a la
 * mayoría de los proyectos de su galería. Siguiendo esa fuente, esos elementos
 * se etiquetan como "Proyecto destacado" en lugar de inventar un nombre; la
 * categoría sí se puede indicar porque corresponde a las áreas de servicio
 * oficiales. Los 3 proyectos documentados (con descripción, cliente y
 * ubicación reales, provistos por el cliente) sí llevan título, resumen y
 * datos propios, porque esa información existe y fue verificada.
 */
export const projects: Project[] = [
  {
    id: "tablayeso-vidrio-templado",
    title: "Tablayeso y vidrio templado en el Registro Mercantil",
    category: "Remodelaciones",
    client: "Registro Mercantil (RM)",
    location: "Edificio Géminis, zona 10",
    year: "Octubre 2023 (aprox.)",
    summary:
      "Divisiones de tablayeso y vidrio templado, junto con una puerta de vidrio templado, para las oficinas de atención al cliente del Registro Mercantil.",
    sections: [
      {
        heading: "Alcance",
        body: "Divisiones de tablayeso. Divisiones de vidrio templado. Puerta de vidrio templado para el área de atención al cliente.",
      },
      {
        heading: "Solución",
        body: "Se eligió vidrio templado para transmitir transparencia en los procesos internos del Registro, dando a las oficinas un ambiente más abierto hacia el público que acude a realizar sus trámites.",
      },
    ],
    images: [
      {
        src: "/images/projects/rm-tablayeso-vidrio-03.webp",
        alt: "Pasillo con divisiones de vidrio templado terminadas en el Registro Mercantil",
      },
      {
        src: "/images/projects/rm-tablayeso-vidrio-01.webp",
        alt: "Técnicos de PROSERGUA instalando estructura de tablayeso en oficinas del Registro Mercantil, Edificio Géminis",
      },
      {
        src: "/images/projects/rm-tablayeso-vidrio-02.webp",
        alt: "Instalación de panel de vidrio templado en oficinas de atención al cliente del Registro Mercantil",
      },
    ],
    featured: true,
  },
  {
    id: "cambio-tuberia-vapor",
    title: "Cambio de tubería de vapor en el IGSS de Pamplona",
    category: "Tubería hidráulica",
    client: "IGSS",
    location: "Gineco-Obstetricia, Pamplona, zona 12",
    summary:
      "Cambio de la tubería de vapor que alimenta el área de cocina del IGSS de Gineco-Obstetricia, en Pamplona, zona 12.",
    sections: [
      {
        heading: "Problema",
        body: "La tubería de hierro negro original se oxidaba con el tiempo y presentaba fugas de vapor, tanto en la tubería como en las marmitas (ollas de cocción por vapor), por lo que la caldera no funcionaba correctamente.",
      },
      {
        heading: "Solución",
        body: "Se sustituyó por tubería de acero inoxidable grado alimenticio, con mayor tiempo de vida útil y mayor limpieza en el área de trabajo, evitando la contaminación de los alimentos que antes generaba el óxido.",
      },
    ],
    images: [
      {
        src: "/images/projects/igss-tuberia-vapor-03.webp",
        alt: "Marmitas de cocina del IGSS conectadas con tubería de acero inoxidable grado alimenticio ya instalada",
      },
      {
        src: "/images/projects/igss-tuberia-vapor-01.webp",
        alt: "Tubería de hierro negro oxidada con fugas de vapor, antes del cambio, en cocina del IGSS de Gineco-Obstetricia",
      },
      {
        src: "/images/projects/igss-tuberia-vapor-02.webp",
        alt: "Técnico de PROSERGUA soldando tubería de acero inoxidable bajo una marmita en el IGSS",
      },
    ],
    featured: true,
  },
  {
    id: "estructura-metalica",
    title: "Cambio de techo y estructura metálica en bodega del MINFIN",
    category: "Herrería / Estructuras metálicas",
    client: "Ministerio de Finanzas Públicas (MINFIN)",
    location: "Zona 8",
    year: "Octubre 2024 (aprox.)",
    summary:
      "Cambio completo de techo de una bodega del Ministerio de Finanzas Públicas, en zona 8, con fabricación de estructura metálica nueva.",
    sections: [
      {
        heading: "Problema",
        body: "El techo existente estaba fabricado con un material obsoleto a base de asbesto, que por reglamento representa un riesgo de enfermedades respiratorias.",
      },
      {
        heading: "Alcance",
        body: "Desinstalación del techo de asbesto. Fabricación de estructura nueva con tubería de hierro negro calibre 14 de 4x4 pulgadas, platinas y pernos de anclaje con sello epóxico en las uniones. Lámina troquelada prepintada blanca y canales de lámina galvanizada. Tiempo de ejecución: 30 días calendario.",
      },
    ],
    images: [
      {
        src: "/images/projects/minfin-estructura-techo-02.webp",
        alt: "Vista interior de la estructura metálica y lámina troquelada prepintada blanca instalada en bodega del MINFIN",
      },
      {
        src: "/images/projects/minfin-estructura-techo-01.webp",
        alt: "Técnico de PROSERGUA soldando estructura metálica nueva para techo de bodega del Ministerio de Finanzas",
      },
      {
        src: "/images/projects/minfin-estructura-techo-03.webp",
        alt: "Techo nuevo de lámina galvanizada terminado en bodega del Ministerio de Finanzas Públicas, zona 8",
      },
    ],
    featured: true,
  },
  {
    id: "estructura-metalica-techos",
    title: "Proyecto destacado",
    category: "Herrería / Estructuras metálicas",
    images: [
      { src: "/images/services/herreria.webp", alt: "Estructura metálica y techo instalado por PROSERGUA" },
    ],
  },
  {
    id: "tuberia-hidraulica",
    title: "Proyecto destacado",
    category: "Tubería hidráulica",
    images: [
      { src: "/images/services/tuberia-hidraulica.webp", alt: "Instalación de tubería hidráulica industrial" },
    ],
  },
  {
    id: "construccion-reforzamiento",
    title: "Proyecto destacado",
    category: "Construcción / Reforzamiento",
    images: [
      { src: "/images/services/construccion-remodelacion.webp", alt: "Obra de construcción y reforzamiento estructural" },
    ],
  },
  {
    id: "electricidad-tablero",
    title: "Proyecto destacado",
    category: "Electricidad",
    images: [
      { src: "/images/services/electricidad.webp", alt: "Tablero eléctrico industrial intervenido por un técnico" },
    ],
  },
  {
    id: "auditoria-electrica",
    title: "Proyecto destacado",
    category: "Auditorías eléctricas",
    images: [
      { src: "/images/services/auditorias-electricas.webp", alt: "Auditoría eléctrica en campo con equipo especializado" },
    ],
  },
  {
    id: "suministros-bodega",
    title: "Proyecto destacado",
    category: "Comercialización de suministros",
    images: [
      { src: "/images/services/suministros.webp", alt: "Bodega de suministros metálicos para construcción" },
    ],
  },
  {
    id: "equipo-rooftop",
    title: "Proyecto destacado",
    category: "Electricidad",
    images: [
      { src: "/images/team/equipo-rooftop.webp", alt: "Equipo de PROSERGUA en obra sobre azotea" },
    ],
  },
  {
    id: "tecnicos-panel",
    title: "Proyecto destacado",
    category: "Electricidad",
    images: [
      { src: "/images/team/tecnicos-panel.webp", alt: "Técnicos de PROSERGUA interviniendo un tablero eléctrico" },
    ],
  },
  {
    id: "sala-bombas",
    title: "Proyecto destacado",
    category: "Tubería hidráulica",
    images: [
      { src: "/images/backgrounds/sala-bombas.webp", alt: "Sala de bombas y tubería industrial" },
    ],
  },
  {
    id: "oficina-remodelada",
    title: "Proyecto destacado",
    category: "Remodelaciones",
    images: [
      { src: "/images/office/oficina-recepcion.webp", alt: "Oficina remodelada con divisiones de cristal" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.id === slug);
}
