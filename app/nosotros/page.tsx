import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Philosophy from "@/components/sections/Philosophy";
import ValueProposition from "@/components/sections/ValueProposition";
import Reveal from "@/components/motion/Reveal";
import Counter from "@/components/motion/Counter";
import { company } from "@/data/company";
import { yearsSince } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a PROSERGUA: empresa familiar guatemalteca fundada en 2020, nuestro equipo, misión, visión y valores.",
};

const team = [
  {
    title: "Asesores de proyectos",
    description: "Acompañan cada proyecto desde la planificación hasta la entrega final.",
  },
  {
    title: "Ingenieros especializados en diversas ramas",
    description: "Aportan criterio técnico en estructuras, hidráulica y electricidad.",
  },
  {
    title: "Técnicos altamente calificados",
    description: "Ejecutan cada instalación y montaje con calidad y seguridad.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary py-24 text-white sm:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/team/equipo-rooftop.jpg"
            alt="Equipo de PROSERGUA en obra sobre azotea"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>
        <Container className="relative flex flex-col gap-4">
          <Reveal>
            <span className="text-sm font-bold text-primary">Conoce acerca de nosotros</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="max-w-2xl font-heading text-4xl font-extrabold sm:text-5xl">
              Quiénes somos
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-2xl text-lg text-gray-200">
              Quiénes somos, nuestro trabajo, nuestras unidades estratégicas y propuestas de
              valor.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading title="¿Quiénes somos?" />
          </Reveal>

          <Reveal delay={80}>
            <div className="grid grid-cols-3 gap-6 border-y border-gray-100 py-8 text-center sm:text-left">
              <div className="flex flex-col gap-1">
                <Counter
                  value={company.foundedYear}
                  className="font-heading text-3xl font-extrabold text-secondary sm:text-4xl"
                />
                <span className="text-xs font-semibold text-gray-500 sm:text-sm">
                  Año de fundación
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <Counter
                  value={company.teamSize}
                  className="font-heading text-3xl font-extrabold text-secondary sm:text-4xl"
                />
                <span className="text-xs font-semibold text-gray-500 sm:text-sm">
                  Personas en el equipo
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <Counter
                  value={yearsSince(company.foundedYear, company.foundedMonthIndex)}
                  className="font-heading text-3xl font-extrabold text-secondary sm:text-4xl"
                />
                <span className="text-xs font-semibold text-gray-500 sm:text-sm">
                  Años de trayectoria
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <p className="max-w-3xl text-gray-600">
              Somos una empresa familiar guatemalteca, {company.foundedLabel.toLowerCase()}. En
              estos años hemos crecido y nos hemos consolidado en el mercado con un{" "}
              {company.teamSizeLabel.toLowerCase()}.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="max-w-3xl text-gray-600">
              PROSERGUA es una empresa guatemalteca dedicada a brindar soluciones integrales en
              remodelación, construcción, servicios eléctricos, auditorías eléctricas y
              comercialización de suministros para construcción y electricidad. A lo largo de
              estos años hemos tenido la oportunidad de colaborar con diversas instituciones y
              clientes del país, consolidando nuestra experiencia y compromiso en cada proyecto.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-gray-50 py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading eyebrow="Nuestro equipo" title="Nuestro equipo está compuesto por" align="center" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={member.title} delay={index * 90}>
                <div className="h-full rounded-card bg-white p-6 shadow-card">
                  <h3 className="font-heading text-lg font-bold text-neutral-900">
                    {member.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{member.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Philosophy />
      <ValueProposition />
    </>
  );
}
