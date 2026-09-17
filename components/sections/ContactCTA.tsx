import Container from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

export default function ContactCTA() {
  return (
    <section className="bg-secondary py-24 text-white sm:py-32">
      <Container className="flex flex-col items-center gap-8 text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Hablemos de tu proyecto
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="flex flex-col gap-4 sm:flex-row">
            <LinkButton href="/contacto" variant="primary">
              Contactar
            </LinkButton>
            <LinkButton href="/proyectos" variant="outline">
              Ver proyectos
            </LinkButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
