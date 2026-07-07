import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-atlas-gold">
            <span className="h-px w-6 bg-atlas-gold/60" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="font-display text-3xl font-medium leading-[1.15] tracking-tight text-atlas-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-atlas-mist sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
