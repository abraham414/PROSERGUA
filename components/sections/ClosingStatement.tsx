import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { company } from "@/data/company";

export default function ClosingStatement() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <p className="mx-auto max-w-3xl text-center font-heading text-2xl font-bold leading-snug text-neutral-900 sm:text-3xl lg:text-4xl">
            &ldquo;{company.closingStatement}&rdquo;
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
