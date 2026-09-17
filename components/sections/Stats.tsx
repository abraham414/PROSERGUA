import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import Counter from "@/components/motion/Counter";
import { company } from "@/data/company";
import { governmentClients } from "@/data/clients";

const items = [
  { value: company.foundedYear, label: "Año de fundación" },
  { value: company.teamSize, label: "Personas en el equipo" },
  { value: governmentClients.length, label: "Instituciones de gobierno atendidas", pad: 2 },
];

export default function Stats() {
  return (
    <section className="bg-secondary py-20 text-white sm:py-28">
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:text-left">
            {items.map((item) => (
              <div key={item.label} className="flex flex-col gap-2">
                <Counter
                  value={item.value}
                  padStart={item.pad}
                  className="font-heading text-5xl font-extrabold text-primary sm:text-6xl"
                />
                <span className="text-sm font-semibold text-gray-200">{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
