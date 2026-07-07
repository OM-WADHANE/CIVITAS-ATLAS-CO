import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Target, Telescope } from "lucide-react";

export function VisionMission() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="absolute inset-0 -z-10 bg-aurora-gradient opacity-[0.06]" />
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="relative h-full rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-atlas-purple/20">
                <Telescope className="h-6 w-6 text-atlas-gold" />
              </div>
              <Badge variant="purple" className="mt-8">
                Vision
              </Badge>
              <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-atlas-white sm:text-3xl">
                A future where land ownership is never in question.
              </h3>
              <p className="mt-5 text-base leading-relaxed text-atlas-mist">
                We envision an India where every citizen, institution, and
                government body can verify land ownership, history, and
                legal standing in seconds — not months. Digital public
                infrastructure that makes land as intelligible as identity
                and payments have become.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative h-full rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-atlas-gold/10">
                <Target className="h-6 w-6 text-atlas-gold" />
              </div>
              <Badge variant="gold" className="mt-8">
                Mission
              </Badge>
              <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-atlas-white sm:text-3xl">
                Build the trust layer beneath India&rsquo;s land economy.
              </h3>
              <p className="mt-5 text-base leading-relaxed text-atlas-mist">
                Starting with Maharashtra, we are reconciling fragmented
                government records into a unified, continuously verified
                intelligence platform — engineered to state-grade security
                standards and designed to scale across every Indian state.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
