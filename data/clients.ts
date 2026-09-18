import type { Client } from "@/types";

export const clients: Client[] = [
  {
    name: "Ministerio de Economía (MINECO)",
    type: "government",
    image: { src: "/images/clients/mineco.webp", alt: "Edificio del Ministerio de Economía (MINECO)" },
  },
  {
    name: "Ministerio de Finanzas Públicas (MINFIN)",
    type: "government",
    image: { src: "/images/clients/minfin.webp", alt: "Edificio del Ministerio de Finanzas Públicas (MINFIN)" },
  },
  {
    name: "Secretaría de Bienestar Social",
    type: "government",
    image: { src: "/images/clients/bienestar-social.webp", alt: "Sede de la Secretaría de Bienestar Social" },
  },
  {
    name: "IGSS",
    type: "government",
    image: { src: "/images/clients/igss.webp", alt: "Instalaciones del Instituto Guatemalteco de Seguridad Social (IGSS)" },
  },
  {
    name: "Registro Mercantil (RM)",
    type: "government",
    image: { src: "/images/clients/registro-mercantil.webp", alt: "Edificio del Registro Mercantil (RM)" },
  },
  {
    name: "Registro de Garantías Mobiliarias (RGM)",
    type: "government",
    image: { src: "/images/clients/rgm.webp", alt: "Edificio del Registro de Garantías Mobiliarias (RGM)" },
  },
  {
    name: "Ministerio de Relaciones Exteriores (MINEX)",
    type: "government",
    image: { src: "/images/clients/minex.webp", alt: "Edificio del Ministerio de Relaciones Exteriores (MINEX)" },
  },
  {
    name: "Despensa Familiar",
    type: "brand",
    image: { src: "/images/brands/despensa-familiar.webp", alt: "Logotipo de Despensa Familiar" },
  },
  {
    name: "Maravilla",
    type: "brand",
    image: { src: "/images/brands/maravilla.webp", alt: "Logotipo de Maravilla" },
  },
  {
    name: "B&B",
    type: "brand",
    image: { src: "/images/brands/bb.webp", alt: "Logotipo de B&B" },
  },
];

export const governmentClients = clients.filter((client) => client.type === "government");
