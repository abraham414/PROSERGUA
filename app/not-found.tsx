import Container from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <span className="font-heading text-6xl font-extrabold text-primary">404</span>
        <h1 className="font-heading text-3xl font-bold text-neutral-900">
          Página no encontrada
        </h1>
        <p className="max-w-md text-gray-600">
          La página que buscas no existe o fue movida. Regresa al inicio o explora nuestros
          servicios.
        </p>
        <div className="flex gap-4">
          <LinkButton href="/" variant="secondary">
            Ir al inicio
          </LinkButton>
          <LinkButton href="/servicios" variant="outline-dark">
            Ver servicios
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
