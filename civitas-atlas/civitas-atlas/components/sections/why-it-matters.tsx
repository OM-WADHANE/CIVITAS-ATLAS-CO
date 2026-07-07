import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { IMPACT_STATS } from "@/lib/data";

export function WhyItMatters() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="absolute inset-0 -z-10 bg-gold-glow" />
      <div className="container">
        <SectionHeading
          eyebrow="Why This Matters"
          title="Land uncertainty is one of India's most expensive unsolved problems."
          description="Disputed titles delay credit, stall development, and clog courts for decades. The cost isn't abstract — it's measured in stalled capital, generational litigation, and citizens who cannot prove what they own."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7">
                <p className="font-display text-3xl font-medium tracking-tight text-atlas-gold sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-medium text-atlas-white">
                  {stat.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-atlas-fog">
                  {stat.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-atlas-fog">
            Figures are illustrative estimates compiled from public
            commentary on Indian land administration and litigation trends,
            intended to frame the scale of the problem Civitas Atlas
            addresses.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
