import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { FUTURE_PRODUCTS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FutureProducts() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="container">
        <SectionHeading
          eyebrow="The Atlas Family"
          title="One intelligence architecture, expanding across public infrastructure."
          description="MahaAtlas is the first in a family of Atlas platforms — each extending the same verified-data architecture into a new domain of public infrastructure."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {FUTURE_PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 transition-all duration-300 hover:border-atlas-purple-light/30">
                <span className="font-mono text-5xl font-light text-white/[0.06] transition-colors duration-300 group-hover:text-atlas-purple-light/20">
                  {p.code}
                </span>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <p.icon className="h-5 w-5 text-atlas-gold" />
                  </div>
                  <h3 className="font-display text-xl font-medium tracking-tight text-atlas-white">
                    {p.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm font-medium text-atlas-mist">
                  {p.tagline}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-atlas-fog">
                  {p.description}
                </p>
                <Badge
                  variant={
                    p.status === "In Research"
                      ? "purple"
                      : p.status === "In Design"
                        ? "gold"
                        : "default"
                  }
                  className={cn("mt-6 self-start")}
                >
                  {p.status}
                </Badge>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
