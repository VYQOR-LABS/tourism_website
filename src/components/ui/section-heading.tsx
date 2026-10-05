export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "light";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.24em] ${tone === "light" ? "text-[#d9c49f]" : "text-[var(--color-primary)]"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-serif text-3xl leading-tight sm:text-4xl ${tone === "light" ? "text-white" : "text-[#1a1d1a]"}`}>{title}</h2>
      {description ? <p className={`mt-4 text-base leading-7 ${tone === "light" ? "text-white/75" : "text-[#4d564f]"}`}>{description}</p> : null}
    </div>
  );
}
