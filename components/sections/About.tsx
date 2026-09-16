import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/data/company";

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
