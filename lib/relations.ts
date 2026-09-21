import { projects } from "@/data/projects";
import { services } from "@/data/services";
import type { Project, ProjectImage, Service } from "@/types";

/**
 * Proyectos y servicios se relacionan por categoría: cada Project.category
 * corresponde exactamente al name de un Service. Es una relación derivada
 * (no un campo duplicado en los datos), así que un proyecto nuevo con la
 * categoría correcta aparece automáticamente en su servicio relacionado, sin
 * tocar ningún componente.
 */

export function getServiceForProject(project: Project): Service | undefined {
  return services.find((service) => service.name === project.category);
}

/**
 * Servicios relacionados con un proyecto. Hoy cada proyecto tiene una sola
 * categoría, así que devuelve como máximo un servicio, pero como array para
 * que un proyecto futuro con varios tipos de trabajo pueda relacionarse con
 * varios servicios sin cambiar quién la consume.
 */
export function getServicesForProject(project: Project): Service[] {
  const service = getServiceForProject(project);
  return service ? [service] : [];
}

export function getProjectsForService(service: Service): Project[] {
  return projects.filter((project) => project.category === service.name);
}

/** Imágenes reales de los proyectos de un servicio, sin duplicar assets. */
export function getServiceGalleryImages(service: Service, limit = 8): ProjectImage[] {
  const images = getProjectsForService(service).flatMap((project) => project.images);
  return images.slice(0, limit);
}
