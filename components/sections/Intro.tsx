import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { company } from "@/data/company";

const categories = ["Construcción y estructuras", "Eléctrico", "Suministros"];

export default function Intro() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <span className="text-sm font-bold text-secondary">Soluciones integrales</span>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-4 max-w-3xl font-heading text-2xl font-bold leading-snug text-neutral-900 sm:text-3xl lg:text-4xl">
            Somos una empresa familiar guatemalteca, {company.foundedLabel.toLowerCase()},
            dedicada a brindar soluciones integrales en construcción e ingeniería eléctrica.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-gray-100 pt-8 text-sm font-semibold text-gray-500">
            {categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
