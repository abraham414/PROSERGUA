import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import QuoteForm from "@/components/sections/QuoteForm";
import Reveal from "@/components/motion/Reveal";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contáctanos: ${company.contact.email}, ${company.contact.phones.join(" / ")}. ${company.contact.address}`,
};

export default function ContactoPage() {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    company.contact.address,
  )}`;

  return (
    <>
      <section className="relative overflow-hidden bg-secondary py-20 text-white sm:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/tecnico-tablero.jpg"
            alt="Técnico de PROSERGUA trabajando en un tablero eléctrico"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-secondary/85" />
        </div>
        <Container className="relative flex flex-col gap-4">
          <Reveal>
            <h1 className="max-w-2xl font-heading text-4xl font-extrabold sm:text-5xl">
              ¡Contáctenos!
            </h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-xl text-lg text-gray-200">
              Solicita tu cotización en minutos o contáctanos directamente.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <QuoteForm />
          </Reveal>

          <div className="flex flex-col gap-8 lg:col-span-2">
            <Reveal delay={80}>
              <SectionHeading title="Información de contacto" />
            </Reveal>

            <Reveal delay={120}>
              <a
                href={`mailto:${company.contact.email}`}
                className="flex items-center gap-4 rounded-card border border-gray-100 p-5 transition-colors hover:border-secondary"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-neutral-900">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true">
                    <path d="M3 6l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="font-semibold text-gray-700">{company.contact.email}</span>
              </a>
            </Reveal>

            {company.contact.phones.map((phone, index) => (
              <Reveal key={phone} delay={160 + index * 40}>
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-4 rounded-card border border-gray-100 p-5 transition-colors hover:border-secondary"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-neutral-900">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true">
                      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-semibold text-gray-700">{phone}</span>
                </a>
              </Reveal>
            ))}

            <Reveal delay={240}>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-card border border-gray-100 p-5 transition-colors hover:border-secondary"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-neutral-900">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true">
                    <path d="M12 21s-7-6.1-7-11a7 7 0 1114 0c0 4.9-7 11-7 11z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <span className="font-semibold text-gray-700">{company.contact.address}</span>
              </a>
            </Reveal>

            <Reveal delay={280}>
              <div className="relative min-h-[220px] overflow-hidden rounded-card shadow-card">
                <Image
                  src="/images/office/oficina-recepcion.jpg"
                  alt="Oficinas de PROSERGUA"
                  fill
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
