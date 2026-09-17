"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import type { Project } from "@/types";

interface ProjectGalleryProps {
  projects: Project[];
}

const CLOSE_DURATION_MS = 200;

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = useCallback((index: number) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveIndex(index);
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    closeTimeoutRef.current = setTimeout(() => setActiveIndex(null), CLOSE_DURATION_MS);
  }, []);

  const showPrev = useCallback(
    () => setActiveIndex((current) => (current === null ? null : (current - 1 + projects.length) % projects.length)),
    [projects.length],
  );
  const showNext = useCallback(
    () => setActiveIndex((current) => (current === null ? null : (current + 1) % projects.length)),
    [projects.length],
  );

  // Trigger the enter transition only on the open/close boundary, not on every
  // prev/next index change (that swap gets its own crossfade on the image).
  useEffect(() => {
    if (activeIndex === null) return;
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex !== null]);

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, close, showPrev, showNext]);

  useEffect(() => {
    // Syncs with the browser's location hash, which does not exist during SSR
    // and cannot be read any other way.
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const index = projects.findIndex((project) => project.id === hash);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (index !== -1) setActiveIndex(index);
  }, [projects]);

  const active = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        {projects.map((project, index) => (
          <Reveal
            key={project.id}
            delay={(index % 4) * 80}
            className="w-[calc(50%-0.5rem)] flex-none sm:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)]"
          >
            <button
              id={project.id}
              type="button"
              onClick={() => open(index)}
              className="group relative block aspect-square w-full overflow-hidden rounded-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              aria-label={`Ver en tamaño completo: ${project.category}`}
            >
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-900/80 to-transparent px-3 pb-2 pt-6">
                <span className="text-xs font-semibold text-white">{project.category}</span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.category}: ${active.title}`}
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-neutral-900/90 p-4 transition-opacity duration-200 ease-out motion-reduce:transition-none sm:p-8 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true">
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            aria-label="Imagen anterior"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:left-6"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            className={`flex w-full max-w-3xl flex-col gap-3 transition-transform duration-200 ease-out motion-reduce:transition-none ${
              visible ? "scale-100" : "scale-95"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                key={active.id}
                src={active.image.src}
                alt={active.image.alt}
                fill
                sizes="100vw"
                className="rounded-card object-contain [animation:image-settle_0.3s_ease-out_both]"
              />
            </div>
            <p key={`${active.id}-caption`} className="text-center text-sm font-semibold text-white [animation:fade-up_0.3s_ease-out_both]">
              {active.category} · {active.title}
            </p>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Imagen siguiente"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:right-6"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
