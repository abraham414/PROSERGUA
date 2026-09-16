import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/data/company";
import { governmentClients } from "@/data/clients";

const stats = [
  { value: `${company.foundedYear}`, label: "Año de fundación" },
  { value: "25", label: "Personas en el equipo" },
  { value: `${governmentClients.length}`, label: "Instituciones de gobierno atendidas" },
];

export default function About() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Quiénes somos"
            title="Una empresa familiar guatemalteca"
          />
          <p className="text-gray-600">
            Somos una empresa familiar guatemalteca, {company.foundedLabel.toLowerCase()}.
            Contamos con un {company.teamSizeLabel.toLowerCase()}.
          </p>
          <p className="text-gray-600">
            Nuestro equipo está compuesto por asesores de proyectos, ingenieros
            especializados en diversas ramas y técnicos altamente calificados.
          </p>

          <dl className="mt-2 grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-heading text-3xl font-extrabold text-secondary">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-xs leading-snug text-gray-500">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-card">
          <Image
            src="/images/team/tecnicos-panel.jpg"
            alt="Técnicos de PROSERGUA interviniendo un tablero eléctrico"
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
