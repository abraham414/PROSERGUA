import type { Project } from "@/types";

/**
 * Estos son los proyectos de PROSERGUA con documentación real del cliente
 * (descripción de la obra, cliente y ubicación provistos directamente por
 * PROSERGUA). La sección de Proyectos muestra únicamente estos: no hay
 * información verificable para presentar ningún otro proyecto como caso
 * real, así que no se incluyen placeholders genéricos.
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
        src: "/images/projects/minfin-estructura-techo-00-antes.webp",
        alt: "Techo original de lámina de asbesto, antes de la intervención, en bodega del Ministerio de Finanzas",
      },
      {
        src: "/images/projects/minfin-estructura-techo-01.webp",
        alt: "Técnico de PROSERGUA soldando estructura metálica nueva para techo de bodega del Ministerio de Finanzas",
      },
      {
        src: "/images/projects/minfin-estructura-techo-02.webp",
        alt: "Vista interior de la estructura metálica y lámina troquelada prepintada blanca instalada en bodega del MINFIN",
      },
      {
        src: "/images/projects/minfin-estructura-techo-03.webp",
        alt: "Techo nuevo de lámina galvanizada terminado en bodega del Ministerio de Finanzas Públicas, zona 8",
      },
    ],
    featured: true,
  },
  {
    id: "ampliacion-parqueo",
    title: "Ampliación y readecuación de parqueo del Registro Mercantil",
    category: "Construcción / Reforzamiento",
    client: "Registro Mercantil (RM) y Registro de la Propiedad Intelectual",
    year: "Diciembre 2023",
    summary:
      "Ampliación y redistribución del parqueo utilizado por el Registro Mercantil y el Registro de la Propiedad Intelectual.",
    sections: [
      {
        heading: "Alcance",
        body: "Se retiraron banquetas que no eran útiles y se amplió el parqueo para mensajeros de ambas instituciones. Se habilitó parqueo exclusivo para cada jefe de las dos entidades. La readecuación duró aproximadamente 20 días.",
      },
    ],
    images: [
      {
        src: "/images/projects/rm-ampliacion-parqueo-04.webp",
        alt: "Parqueo del Registro Mercantil terminado, con líneas amarillas nuevas",
      },
      {
        src: "/images/projects/rm-ampliacion-parqueo-01.webp",
        alt: "Parqueo antiguo del Registro Mercantil antes de la readecuación, con banquetas por retirar",
      },
      {
        src: "/images/projects/rm-ampliacion-parqueo-02.webp",
        alt: "Trabajador de PROSERGUA retirando concreto durante la demolición del parqueo del Registro Mercantil",
      },
      {
        src: "/images/projects/rm-ampliacion-parqueo-03.webp",
        alt: "Colado de concreto nuevo en el parqueo del Registro Mercantil durante la readecuación",
      },
      {
        src: "/images/projects/rm-ampliacion-parqueo-05.webp",
        alt: "Vista del parqueo del Registro Mercantil con los espacios ya delimitados tras la readecuación",
      },
    ],
  },
  {
    id: "auditoria-electrica-han-sae",
    title: "Auditoría eléctrica en complejo de maquilas HAN SAE",
    category: "Auditorías eléctricas",
    client: "HAN SAE",
    year: "Agosto 2025",
    summary:
      "Auditoría eléctrica en un complejo de maquilas, para detectar fallas en máquinas o consumos excesivos y evitar sobrecargas que detengan la producción.",
    sections: [
      {
        heading: "Objetivo",
        body: "Detectar fallas en máquinas o consumos excesivos que puedan generar sobrecarga en los circuitos y detener la producción. Este tipo de auditoría la solicitan clientes extranjeros que maquilan sus marcas en Guatemala, para garantizar la producción de las prendas que manejan para venta nacional e importación y la seguridad de los operarios de cada línea de producción.",
      },
      {
        heading: "Alcance",
        body: "Medición de 3 días en los paneles principales para detectar cambios en el suministro o demanda eléctrica, junto con una inspección interna y externa en cada uno de los tableros de las plantas. Duración total: 2 meses y medio.",
      },
    ],
    images: [
      {
        src: "/images/projects/han-sae-auditoria-01.webp",
        alt: "Técnico de PROSERGUA realizando auditoría eléctrica en tablero principal en HAN SAE",
      },
      {
        src: "/images/projects/han-sae-auditoria-02.webp",
        alt: "Equipo de medición conectado a tablero eléctrico durante la auditoría en HAN SAE",
      },
      {
        src: "/images/projects/han-sae-auditoria-03.webp",
        alt: "Técnico de PROSERGUA inspeccionando panel eléctrico con lista de verificación en HAN SAE",
      },
      {
        src: "/images/projects/han-sae-auditoria-04.webp",
        alt: "Equipo de PROSERGUA realizando la auditoría eléctrica en las instalaciones de HAN SAE",
      },
      {
        src: "/images/projects/han-sae-auditoria-05.webp",
        alt: "Área de producción del complejo de maquilas HAN SAE durante la auditoría eléctrica",
      },
    ],
  },
  {
    id: "instalacion-piso-mineco",
    title: "Cambio de piso tipo duela en el Ministerio de Economía",
    category: "Remodelaciones",
    client: "Ministerio de Economía (MINECO)",
    location: "Área financiera, 5to nivel del edificio central",
    year: "Febrero 2025 (aprox.)",
    summary:
      "Cambio de 185 metros cuadrados de piso tipo duela en el área financiera del 5to nivel del edificio central del Ministerio de Economía, como parte de la nueva administración.",
    sections: [
      {
        heading: "Alcance",
        body: "Demolición de divisiones de tablayeso, cambio de puerta en mal estado y reubicación de tomacorrientes, además de la instalación de 185 metros cuadrados de piso tipo duela.",
      },
    ],
    images: [
      {
        src: "/images/projects/mineco-piso-duela-04.webp",
        alt: "Área financiera del MINECO con el nuevo piso tipo duela terminado",
      },
      {
        src: "/images/projects/mineco-piso-duela-01.webp",
        alt: "Área financiera del Ministerio de Economía antes del cambio de piso, con divisiones de tablayeso por demoler",
      },
      {
        src: "/images/projects/mineco-piso-duela-02.webp",
        alt: "Técnico de PROSERGUA demoliendo divisiones de tablayeso en el área financiera del MINECO",
      },
      {
        src: "/images/projects/mineco-piso-duela-03.webp",
        alt: "Instalación de piso tipo duela en el área financiera del Ministerio de Economía",
      },
      {
        src: "/images/projects/mineco-piso-duela-05.webp",
        alt: "Oficina del área financiera del Ministerio de Economía con el piso tipo duela ya instalado",
      },
    ],
  },
  {
    id: "instalaciones-electricas-hotel-clarion-suites",
    title: "Instalaciones eléctricas en el Hotel Clarion Suites",
    category: "Electricidad",
    client: "Hotel Clarion Suites",
    location: "Zona 10",
    year: "Junio 2025",
    summary:
      "Sustitución de tomacorrientes antiguos e instalación y actualización de lámparas y reflectores LED en los niveles 17, 08 y 03 del Hotel Clarion Suites, principalmente en salas de reuniones.",
    sections: [
      {
        heading: "Alcance",
        body: "Sustitución de tomacorrientes antiguos e instalación y actualización de lámparas y reflectores LED en los niveles 17, 08 y 03, con el objetivo de mejorar las condiciones de iluminación y modernizar las instalaciones eléctricas.",
      },
      {
        heading: "Detalles técnicos",
        body: "Se actualizaron los circuitos eléctricos involucrados, garantizando que las instalaciones cumplieran con los requerimientos, especificaciones técnicas y certificaciones exigidas por el cliente.",
      },
    ],
    images: [
      {
        src: "/images/projects/clarion-suites-electrico-01.webp",
        alt: "Sala de reuniones del Hotel Clarion Suites con iluminación LED actualizada",
      },
      {
        src: "/images/projects/clarion-suites-electrico-02.webp",
        alt: "Sala de reuniones del Hotel Clarion Suites con los nuevos reflectores LED instalados",
      },
      {
        src: "/images/projects/clarion-suites-electrico-03.webp",
        alt: "Detalle de la lámpara LED instalada en el cielo falso del Hotel Clarion Suites",
      },
      {
        src: "/images/projects/clarion-suites-electrico-04.webp",
        alt: "Técnico de PROSERGUA trabajando en las instalaciones eléctricas de una sala del Hotel Clarion Suites",
      },
      {
        src: "/images/projects/clarion-suites-electrico-05.webp",
        alt: "Área común del Hotel Clarion Suites con iluminación renovada",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.id === slug);
}
