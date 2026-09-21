import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

export default function Breadcrumb({ items, light = false }: BreadcrumbProps) {
  return (
    <nav aria-label="Ruta de navegación">
      <ol className={`flex flex-wrap items-center gap-2 text-sm font-medium ${light ? "text-gray-300" : "text-gray-500"}`}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">&rsaquo;</span>}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  prefetch={false}
                  className={`transition-colors hover:underline ${light ? "hover:text-white" : "hover:text-secondary"}`}
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className={isLast ? (light ? "text-white" : "text-neutral-900") : ""}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
