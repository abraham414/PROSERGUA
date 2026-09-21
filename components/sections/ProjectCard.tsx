import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const hasRealTitle = project.title !== "Proyecto destacado";
  const meta = [project.client, project.location].filter(Boolean).join(" · ");

  return (
    <Link
      href={`/proyectos/${project.id}`}
      prefetch={false}
      className="group relative block aspect-[4/5] overflow-hidden rounded-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
      aria-label={`Ver proyecto: ${hasRealTitle ? project.title : project.category}`}
    >
      <Image
        src={project.images[0].src}
        alt={project.images[0].alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-900/90 to-transparent p-5 pt-10">
        <span className="text-xs font-bold text-primary">{project.category}</span>
        <p className="mt-1 text-base font-semibold text-white">
          {hasRealTitle ? project.title : "Ver proyecto"}
        </p>
        {meta && <p className="mt-0.5 text-sm text-gray-200">{meta}</p>}
      </div>
    </Link>
  );
}
