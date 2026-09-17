import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Reveal from "@/components/motion/Reveal";

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

export default function Team() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading eyebrow="Nuestro equipo" title="Nuestro equipo está compuesto por" align="center" />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-3">
          {team.map((member, index) => (
            <Reveal key={member.title} delay={index * 90}>
              <Card className="h-full p-6 transition-transform duration-200 hover:-translate-y-1 motion-reduce:transform-none">
                <h3 className="font-heading text-lg font-bold text-neutral-900">
                  {member.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{member.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
