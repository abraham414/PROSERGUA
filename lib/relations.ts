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

export function getProjectsForService(service: Service): Project[] {
  return projects.filter((project) => project.category === service.name);
}

export function getRelatedProjects(project: Project, limit = 3): Project[] {
  return projects.filter((p) => p.id !== project.id && p.category === project.category).slice(0, limit);
}

/** Imágenes reales de los proyectos de un servicio, sin duplicar assets. */
export function getServiceGalleryImages(service: Service, limit = 8): ProjectImage[] {
  const images = getProjectsForService(service).flatMap((project) => project.images);
  return images.slice(0, limit);
}
