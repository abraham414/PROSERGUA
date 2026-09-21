import type { Project } from "@/types";

/**
 * La presentación oficial de PROSERGUA no asigna nombres individuales a los
 * proyectos de su galería. Siguiendo esa fuente, cada elemento se etiqueta
 * como "Proyecto destacado" en lugar de inventar un nombre; la categoría
 * sí se puede indicar porque corresponde a las áreas de servicio oficiales.
 *
 * Los 9 proyectos siguientes sí cuentan con documentación real del cliente
 * (descripción de obra, cliente y ubicación), por lo que su título refleja
 * esos datos en vez del rótulo genérico.
 */
export const projects: Project[] = [
  {
    id: "rm-tablayeso-03",
    title: "Registro Mercantil — divisiones terminadas",
    category: "Remodelaciones",
    image: {
      src: "/images/projects/rm-tablayeso-vidrio-03.webp",
      alt: "Pasillo con divisiones de vidrio templado terminadas en el Registro Mercantil",
    },
  },
  {
    id: "igss-tuberia-vapor-03",
    title: "IGSS Pamplona — cocina con tubería nueva",
    category: "Tubería hidráulica",
    image: {
      src: "/images/projects/igss-tuberia-vapor-03.webp",
      alt: "Marmitas de cocina del IGSS conectadas con tubería de acero inoxidable grado alimenticio ya instalada",
    },
  },
  {
    id: "minfin-techo-estructura-02",
    title: "MINFIN — nueva lámina y estructura instalada",
    category: "Herrería / Estructuras metálicas",
    image: {
      src: "/images/projects/minfin-estructura-techo-02.webp",
      alt: "Vista interior de la estructura metálica y lámina troquelada prepintada blanca instalada en bodega del MINFIN",
    },
  },
  {
    id: "estructura-metalica-techos",
    title: "Proyecto destacado",
    category: "Herrería / Estructuras metálicas",
    image: { src: "/images/services/herreria.webp", alt: "Estructura metálica y techo instalado por PROSERGUA" },
  },
  {
    id: "tuberia-hidraulica",
    title: "Proyecto destacado",
    category: "Tubería hidráulica",
    image: { src: "/images/services/tuberia-hidraulica.webp", alt: "Instalación de tubería hidráulica industrial" },
  },
  {
    id: "construccion-reforzamiento",
    title: "Proyecto destacado",
    category: "Construcción / Reforzamiento",
    image: { src: "/images/services/construccion-remodelacion.webp", alt: "Obra de construcción y reforzamiento estructural" },
  },
  {
    id: "electricidad-tablero",
    title: "Proyecto destacado",
    category: "Electricidad",
    image: { src: "/images/services/electricidad.webp", alt: "Tablero eléctrico industrial intervenido por un técnico" },
  },
  {
    id: "auditoria-electrica",
    title: "Proyecto destacado",
    category: "Auditorías eléctricas",
    image: { src: "/images/services/auditorias-electricas.webp", alt: "Auditoría eléctrica en campo con equipo especializado" },
  },
  {
    id: "suministros-bodega",
    title: "Proyecto destacado",
    category: "Comercialización de suministros",
    image: { src: "/images/services/suministros.webp", alt: "Bodega de suministros metálicos para construcción" },
  },
  {
    id: "equipo-rooftop",
    title: "Proyecto destacado",
    category: "Electricidad",
    image: { src: "/images/team/equipo-rooftop.webp", alt: "Equipo de PROSERGUA en obra sobre azotea" },
  },
  {
    id: "tecnicos-panel",
    title: "Proyecto destacado",
    category: "Electricidad",
    image: { src: "/images/team/tecnicos-panel.webp", alt: "Técnicos de PROSERGUA interviniendo un tablero eléctrico" },
  },
  {
    id: "sala-bombas",
    title: "Proyecto destacado",
    category: "Tubería hidráulica",
    image: { src: "/images/backgrounds/sala-bombas.webp", alt: "Sala de bombas y tubería industrial" },
  },
  {
    id: "oficina-remodelada",
    title: "Proyecto destacado",
    category: "Remodelaciones",
    image: { src: "/images/office/oficina-recepcion.webp", alt: "Oficina remodelada con divisiones de cristal" },
  },
  {
    id: "rm-tablayeso-01",
    title: "Registro Mercantil — instalación de tablayeso",
    category: "Remodelaciones",
    image: {
      src: "/images/projects/rm-tablayeso-vidrio-01.webp",
      alt: "Técnicos de PROSERGUA instalando estructura de tablayeso en oficinas del Registro Mercantil, Edificio Géminis",
    },
  },
  {
    id: "rm-tablayeso-02",
    title: "Registro Mercantil — instalación de vidrio templado",
    category: "Remodelaciones",
    image: {
      src: "/images/projects/rm-tablayeso-vidrio-02.webp",
      alt: "Instalación de panel de vidrio templado en oficinas de atención al cliente del Registro Mercantil",
    },
  },
  {
    id: "igss-tuberia-vapor-01",
    title: "IGSS Pamplona — tubería de hierro negro oxidada",
    category: "Tubería hidráulica",
    image: {
      src: "/images/projects/igss-tuberia-vapor-01.webp",
      alt: "Tubería de hierro negro oxidada con fugas de vapor, antes del cambio, en cocina del IGSS de Gineco-Obstetricia",
    },
  },
  {
    id: "igss-tuberia-vapor-02",
    title: "IGSS Pamplona — instalación de tubería de acero inoxidable",
    category: "Tubería hidráulica",
    image: {
      src: "/images/projects/igss-tuberia-vapor-02.webp",
      alt: "Técnico de PROSERGUA soldando tubería de acero inoxidable bajo una marmita en el IGSS",
    },
  },
  {
    id: "minfin-techo-estructura-01",
    title: "MINFIN — fabricación de estructura metálica",
    category: "Herrería / Estructuras metálicas",
    image: {
      src: "/images/projects/minfin-estructura-techo-01.webp",
      alt: "Técnico de PROSERGUA soldando estructura metálica nueva para techo de bodega del Ministerio de Finanzas",
    },
  },
  {
    id: "minfin-techo-estructura-03",
    title: "MINFIN — techo de bodega terminado",
    category: "Herrería / Estructuras metálicas",
    image: {
      src: "/images/projects/minfin-estructura-techo-03.webp",
      alt: "Techo nuevo de lámina galvanizada terminado en bodega del Ministerio de Finanzas Públicas, zona 8",
    },
  },
];
