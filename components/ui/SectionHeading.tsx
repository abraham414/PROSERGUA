interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClasses}`}>
      {eyebrow && (
        <span
          className={`text-sm font-bold ${light ? "text-primary" : "text-secondary"}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-heading text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-neutral-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-lg ${light ? "text-gray-200" : "text-gray-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
