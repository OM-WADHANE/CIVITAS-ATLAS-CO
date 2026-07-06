import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ROADMAP } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-28 sm:py-36">
      <div className="container">
        <SectionHeading
          eyebrow="Roadmap"
          title="From district pilots to national digital infrastructure."
          description="Our rollout follows the structure of the data itself — district by district, department by department, toward a federated platform any Indian state can build on."
        />

        <div className="relative mt-16">
          <div
            className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-atlas-purple-light/40 via-white/10 to-transparent sm:left-[19px]"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-10">
            {ROADMAP.map((item, i) => (
              <Reveal key={item.phase} delay={i * 0.06}>
                <div className="relative flex gap-6 pl-10 sm:gap-8 sm:pl-14">
                  <div
                    className={cn(
                      "absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border sm:h-10 sm:w-10",
                      item.status === "active"
                        ? "border-atlas-gold bg-atlas-gold/10"
                        : item.status === "complete"
                          ? "border-atlas-purple-light bg-atlas-purple/20"
                          : "border-white/15 bg-white/[0.03]"
                    )}
                  >
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full",
                        item.status === "active"
                          ? "bg-atlas-gold animate-pulse-glow"
                          : item.status === "complete"
                            ? "bg-atlas-purple-light"
                            : "bg-white/30"
                      )}
                    />
                  </div>

                  <div className="flex-1 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs uppercase tracking-wider text-atlas-gold">
                        {item.phase}
                      </span>
                      <span className="text-xs text-atlas-fog">
                        {item.period}
                      </span>
                      {item.status === "active" && (
                        <span className="rounded-full border border-atlas-gold/30 bg-atlas-gold/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-atlas-gold">
                          In Progress
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 font-display text-lg font-medium tracking-tight text-atlas-white sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-atlas-mist">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
