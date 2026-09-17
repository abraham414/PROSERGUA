"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { services } from "@/data/services";

export default function ServicesInteractive() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openMobileIndex, setOpenMobileIndex] = useState<number | null>(0);
  const active = services[activeIndex];

  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading eyebrow="Áreas principales" title="Servicios" />
        </Reveal>

        {/* Desktop / tablet ancho: lista con hover + panel de imagen. */}
        <Reveal delay={100} className="hidden lg:block">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ul className="flex flex-col border-t border-gray-200">
              {services.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <li key={service.slug} className="border-b border-gray-200">
                    <button
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      className={`flex w-full items-baseline gap-4 py-5 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${
                        isActive ? "text-secondary" : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      <span className="font-heading text-sm font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-heading text-xl font-bold sm:text-2xl">
                        {service.name}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <Link
              href={`/servicios/${active.slug}`}
              className="group relative block aspect-[4/3] overflow-hidden rounded-card shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              <Image
                key={active.slug}
                src={active.image.src}
                alt={active.image.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-900/85 to-transparent p-6">
                <p className="text-sm text-gray-100">{active.shortDescription}</p>
                <span className="mt-2 inline-block text-sm font-semibold text-primary">
                  Ver servicio
                </span>
              </div>
            </Link>
          </div>
        </Reveal>

        {/* Móvil / tablet: acordeón, sin depender de hover. */}
        <div className="flex flex-col gap-3 lg:hidden">
          {services.map((service, index) => {
            const isOpen = index === openMobileIndex;
            return (
              <Reveal key={service.slug} delay={index * 40}>
                <div className="overflow-hidden rounded-card border border-gray-200">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`service-panel-${service.slug}`}
                    onClick={() => setOpenMobileIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="text-xs font-bold text-gray-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-heading text-base font-bold text-neutral-900">
                        {service.name}
                      </span>
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div
                    id={`service-panel-${service.slug}`}
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-3 px-5 pb-5">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-button">
                          <Image
                            src={service.image.src}
                            alt={service.image.alt}
                            fill
                            sizes="100vw"
                            className="object-cover"
                          />
                        </div>
                        <p className="text-sm text-gray-600">{service.shortDescription}</p>
                        <Link
                          href={`/servicios/${service.slug}`}
                          className="text-sm font-semibold text-secondary hover:underline"
                        >
                          Ver servicio →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <Link href="/servicios" className="inline-block text-sm font-semibold text-secondary hover:underline">
            Ver todos los servicios →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
