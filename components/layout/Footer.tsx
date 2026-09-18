import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Container from "@/components/ui/Container";
import { company } from "@/data/company";
import { gmailComposeHref } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <Logo variant="light" />
          <p className="max-w-sm text-base text-gray-200">{company.legalName}</p>
          <p className="max-w-sm text-base text-gray-300">{company.closingStatement}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Navegación
          </h3>
          <ul className="mt-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-200 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Contacto
          </h3>
          <ul className="mt-4 flex flex-col gap-2 text-base text-gray-200">
            <li>
              <a
                href={gmailComposeHref(company.contact.email)}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {company.contact.email}
              </a>
            </li>
            {company.contact.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {phone}
                </a>
              </li>
            ))}
            <li className="pt-1 text-gray-300">{company.contact.address}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-gray-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalName}. Todos los derechos reservados.
          </p>
        </Container>
      </div>
    </footer>
  );
}
