"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import ProjectCard from "@/components/sections/ProjectCard";
import type { Project } from "@/types";

interface ProjectsExplorerProps {
  projects: Project[];
}

const ALL = "Todos";

export default function ProjectsExplorer({ projects }: ProjectsExplorerProps) {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((project) => project.category)));
    return [ALL, ...unique];
  }, [projects]);

  const [active, setActive] = useState(ALL);

  const filtered = active === ALL ? projects : projects.filter((project) => project.category === active);

  return (
    <div className="flex flex-col gap-10">
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {categories.map((category) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={isActive}
              className={`shrink-0 rounded-button px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${
                isActive
                  ? "bg-secondary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-gray-500">No hay proyectos en esta categoría todavía.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <Reveal key={project.id} delay={(index % 6) * 70}>
              <ProjectCard project={project} priority={index === 0} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
