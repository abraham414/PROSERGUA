import type { Project } from "@/types";

/**
 * La presentación oficial de PROSERGUA no asigna nombres individuales a los
 * proyectos de su galería. Siguiendo esa fuente, cada elemento se etiqueta
 * como "Proyecto destacado" en lugar de inventar un nombre; la categoría
 * sí se puede indicar porque corresponde a las áreas de servicio oficiales.
 */
export const projects: Project[] = [
  {
    id: "estructura-metalica-techos",
    title: "Proyecto destacado",
    category: "Herrería / Estructuras metálicas",
    image: { src: "/images/services/herreria.jpg", alt: "Estructura metálica y techo instalado por PROSERGUA" },
  },
  {
    id: "tuberia-hidraulica",
    title: "Proyecto destacado",
    category: "Tubería hidráulica",
    image: { src: "/images/services/tuberia-hidraulica.jpg", alt: "Instalación de tubería hidráulica industrial" },
  },
  {
    id: "construccion-reforzamiento",
    title: "Proyecto destacado",
    category: "Construcción / Reforzamiento",
    image: { src: "/images/services/construccion-remodelacion.jpg", alt: "Obra de construcción y reforzamiento estructural" },
  },
  {
    id: "electricidad-tablero",
    title: "Proyecto destacado",
    category: "Electricidad",
    image: { src: "/images/services/electricidad.jpg", alt: "Tablero eléctrico industrial intervenido por un técnico" },
  },
  {
    id: "auditoria-electrica",
    title: "Proyecto destacado",
    category: "Auditorías eléctricas",
    image: { src: "/images/services/auditorias-electricas.jpg", alt: "Auditoría eléctrica en campo con equipo especializado" },
  },
  {
    id: "suministros-bodega",
    title: "Proyecto destacado",
    category: "Comercialización de suministros",
    image: { src: "/images/services/suministros.jpg", alt: "Bodega de suministros metálicos para construcción" },
  },
  {
    id: "equipo-rooftop",
    title: "Proyecto destacado",
    category: "Electricidad",
    image: { src: "/images/team/equipo-rooftop.jpg", alt: "Equipo de PROSERGUA en obra sobre azotea" },
  },
  {
    id: "tecnicos-panel",
    title: "Proyecto destacado",
    category: "Electricidad",
    image: { src: "/images/team/tecnicos-panel.jpg", alt: "Técnicos de PROSERGUA interviniendo un tablero eléctrico" },
  },
  {
    id: "sala-bombas",
    title: "Proyecto destacado",
    category: "Tubería hidráulica",
    image: { src: "/images/backgrounds/sala-bombas.jpg", alt: "Sala de bombas y tubería industrial" },
  },
  {
    id: "oficina-remodelada",
    title: "Proyecto destacado",
    category: "Remodelaciones",
    image: { src: "/images/office/oficina-recepcion.jpg", alt: "Oficina remodelada con divisiones de cristal" },
  },
];
