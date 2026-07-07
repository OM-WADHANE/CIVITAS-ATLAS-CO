import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { TECH_STACK } from "@/lib/data";

export function TechStack() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Engineering"
          title="Engineered on infrastructure built for scale and security."
          description="Every layer of the Atlas architecture is chosen for auditability, spatial precision, and the ability to serve government-grade workloads."
        />
      </div>

      <div className="relative mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-atlas-black to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-atlas-black to-transparent sm:w-40" />

        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-4"
            >
              <span className="h-2 w-2 rounded-full bg-atlas-gold" />
              <div>
                <p className="font-display text-sm font-medium text-atlas-white">
                  {tech.name}
                </p>
                <p className="text-xs text-atlas-fog">{tech.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <Reveal delay={0.1}>
          <p className="mx-auto mt-14 max-w-2xl text-center text-sm text-atlas-fog">
            All infrastructure is deployed within Indian data residency
            boundaries, with encryption at rest and in transit, and
            role-based audit logging across every government integration.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
