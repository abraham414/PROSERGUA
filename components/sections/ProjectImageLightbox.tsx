"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ProjectImage } from "@/types";

interface ProjectImageLightboxProps {
  images: ProjectImage[];
}

const CLOSE_DURATION_MS = 200;

export default function ProjectImageLightbox({ images }: ProjectImageLightboxProps) {
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
    () => setActiveIndex((current) => (current === null ? null : (current - 1 + images.length) % images.length)),
    [images.length],
  );
  const showNext = useCallback(
    () => setActiveIndex((current) => (current === null ? null : (current + 1) % images.length)),
    [images.length],
  );

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

  const active = activeIndex !== null ? images[activeIndex] : null;
  const [hero, ...rest] = images;

  return (
    <>
      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={() => open(0)}
          className="group relative block aspect-[16/10] w-full overflow-hidden rounded-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          aria-label="Ver imagen en tamaño completo"
        >
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            priority
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </button>

        {rest.length > 0 && (
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
            {rest.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => open(index + 1)}
                className="group relative block aspect-square overflow-hidden rounded-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                aria-label="Ver imagen en tamaño completo"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galería de imágenes del proyecto"
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

          {images.length > 1 && (
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
          )}

          <div
            className={`flex w-full max-w-4xl flex-col gap-3 transition-transform duration-200 ease-out motion-reduce:transition-none ${
              visible ? "scale-100" : "scale-95"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                key={active.src}
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                className="rounded-card object-contain [animation:image-settle_0.3s_ease-out_both]"
              />
            </div>
          </div>

          {images.length > 1 && (
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
          )}
        </div>
      )}
    </>
  );
}
