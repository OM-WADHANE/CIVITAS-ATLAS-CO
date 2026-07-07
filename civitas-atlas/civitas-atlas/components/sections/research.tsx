import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { RESEARCH_PAPERS } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export function Research() {
  return (
    <section id="research" className="relative py-28 sm:py-36">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Research & Publications"
            title="Publishing the methods behind the platform."
            description="We share our research on spatial AI, digital public infrastructure, and legal-data systems — in the open, for the ecosystem building alongside us."
          />
        </div>

        <div className="mt-14 flex flex-col divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {RESEARCH_PAPERS.map((paper, i) => (
            <Reveal key={paper.title} delay={i * 0.06}>
              <a
                href="#contact"
                className="group flex flex-col gap-4 py-8 transition-colors sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-atlas-gold">
                      {paper.category}
                    </span>
                    <span className="text-xs text-atlas-fog">{paper.date}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-atlas-white transition-colors group-hover:text-atlas-gold">
                    {paper.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-atlas-mist">
                    {paper.summary}
                  </p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-atlas-mist transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-atlas-gold/40 group-hover:text-atlas-gold">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
