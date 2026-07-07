import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { PILLARS } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="About Civitas Atlas"
              title="Land records were never designed to be trusted at scale."
              description="Across India, land ownership lives in handwritten registers, scanned PDFs, court archives, and disconnected department databases. Civitas Atlas Technologies builds the intelligence layer that reconciles this fragmentation — turning static records into a living, verifiable map of the truth."
            />
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-atlas-fog">
                We work at the intersection of geospatial science, applied AI,
                and public administration — building infrastructure that
                governments, institutions, and citizens can all rely on.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {PILLARS.map((pillar, i) => (
                <Reveal key={pillar.title} delay={i * 0.08}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-colors duration-300 hover:border-atlas-purple-light/30 hover:bg-white/[0.04]">
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-atlas-purple/0 blur-2xl transition-colors duration-500 group-hover:bg-atlas-purple/20" />
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                      <pillar.icon className="h-5 w-5 text-atlas-gold" />
                    </div>
                    <h3 className="relative mt-5 font-display text-lg font-medium tracking-tight text-atlas-white">
                      {pillar.title}
                    </h3>
                    <p className="relative mt-2.5 text-sm leading-relaxed text-atlas-mist">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
