"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { company } from "@/data/company";

const PARALLAX_STRENGTH = 0.12;
const PARALLAX_MAX_PX = 60;

export default function Hero() {
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const node = imageWrapRef.current;
    if (!node) return;

    let frame = 0;

    function updateParallax() {
      const rect = node!.getBoundingClientRect();
      const offset = Math.max(
        Math.min(rect.top * -PARALLAX_STRENGTH, PARALLAX_MAX_PX),
        -PARALLAX_MAX_PX,
      );
      node!.style.transform = `translateY(${offset}px)`;
      frame = 0;
    }

    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(updateParallax);
    }

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* Mobile: full-bleed background photo with overlay. */}
      <div className="absolute inset-0 sm:hidden">
        <Image
          src="/images/team/equipo-rooftop.jpg"
          alt="Equipo técnico de PROSERGUA en obra"
          fill
          priority
          sizes="100vw"
          className="object-cover [animation:image-settle_1s_ease-out_both]"
        />
        <div className="absolute inset-0 bg-secondary/60" />
      </div>

      {/* sm and up: diagonal split with photo on the right. */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute inset-0 [clip-path:polygon(0_0,62%_0,45%_100%,0_100%)] bg-secondary" />
        <div className="absolute inset-y-0 left-[45%] right-0 overflow-hidden [clip-path:polygon(8%_0,100%_0,100%_100%,0%_100%)]">
          <div ref={imageWrapRef} className="absolute -inset-y-16 inset-x-0">
            <Image
              src="/images/team/equipo-rooftop.jpg"
              alt="Equipo técnico de PROSERGUA en obra"
              fill
              priority
              sizes="100vw"
              className="object-cover [animation:image-settle_1s_ease-out_both]"
            />
          </div>
          <div className="absolute inset-0 bg-secondary/55" />
        </div>
      </div>

      <Container className="relative py-20 sm:py-32 lg:py-40">
        <div className="max-w-xl">
          <span
            className="inline-block rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-neutral-900 [animation:fade-up_0.6s_ease-out_both]"
          >
            {company.tagline}
          </span>
          <h1
            className="mt-6 font-heading text-4xl font-extrabold leading-tight tracking-tight text-white [animation:fade-up_0.6s_ease-out_both] [animation-delay:120ms] [text-shadow:0_1px_4px_rgba(0,0,0,0.35)] sm:text-5xl sm:[text-shadow:none] lg:text-6xl"
          >
            {company.brandName}
          </h1>
          <p
            className="mt-6 max-w-lg text-lg leading-relaxed text-gray-100 [animation:fade-up_0.6s_ease-out_both] [animation-delay:220ms] [text-shadow:0_1px_3px_rgba(0,0,0,0.35)] sm:[text-shadow:none]"
          >
            Empresa guatemalteca dedicada a brindar soluciones integrales en remodelación,
            construcción, servicios eléctricos, auditorías eléctricas y comercialización de
            suministros para construcción y electricidad.
          </p>
          <div
            className="mt-10 flex flex-col gap-4 [animation:fade-up_0.6s_ease-out_both] [animation-delay:320ms] sm:flex-row"
          >
            <LinkButton href="/proyectos" variant="primary">
              Ver proyectos
            </LinkButton>
            <LinkButton href="/contacto" variant="outline">
              Hablemos de tu proyecto
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
