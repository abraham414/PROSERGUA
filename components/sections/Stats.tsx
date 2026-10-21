import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import Counter from "@/components/motion/Counter";
import { company } from "@/data/company";
import { governmentClients } from "@/data/clients";

const items = [
  { value: company.foundedYear, label: "Año de fundación" },
  { value: company.teamSize, label: "Personas en el equipo" },
  { value: governmentClients.length, label: "Instituciones de gobierno atendidas", pad: 2 },
  { value: company.projectsCompleted, label: "Proyectos realizados", prefix: "+" },
  { value: company.satisfiedClients, label: "Clientes satisfechos", prefix: "+" },
];

export default function Stats() {
  return (
    <section className="bg-secondary py-20 text-white sm:py-28">
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:text-left lg:grid-cols-5">
            {items.map((item) => (
              <div key={item.label} className="flex flex-col gap-2">
                <span className="flex items-baseline justify-center gap-0.5 sm:justify-start">
                  {item.prefix && (
                    <span className="font-heading text-5xl font-extrabold text-primary sm:text-6xl">
                      {item.prefix}
                    </span>
                  )}
                  <Counter
                    value={item.value}
                    padStart={item.pad}
                    className="font-heading text-5xl font-extrabold text-primary sm:text-6xl"
                  />
                </span>
                <span className="text-sm font-semibold text-gray-200">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-base text-gray-200 sm:text-left">
            Con experiencia atendiendo tanto al sector público como al sector privado.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
