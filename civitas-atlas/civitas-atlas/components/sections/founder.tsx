import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter } from "lucide-react";

export function Founder() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-4">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-atlas-purple/20 via-atlas-indigo/10 to-transparent">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-7xl font-medium text-white/10">
                  CA
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-atlas-black/80 to-transparent" />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-8">
            <Badge variant="purple">Founder&rsquo;s Note</Badge>
            <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-atlas-white sm:text-4xl">
              &ldquo;Land is the oldest asset class in India, and the least
              digitized. We&rsquo;re building the layer that should have
              existed decades ago.&rdquo;
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-atlas-mist">
              Civitas Atlas was founded on a simple observation: India has
              built world-class digital public infrastructure for identity
              and payments, but land — the foundation of most household
              wealth and most civil litigation — remains fragmented across
              paper registers and disconnected systems. MahaAtlas is our
              answer, built first for Maharashtra and designed to scale
              nationally.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div>
                <p className="font-display text-base font-medium text-atlas-white">
                  Founding Team
                </p>
                <p className="text-sm text-atlas-fog">
                  Civitas Atlas Technologies Pvt. Ltd.
                </p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <a
                  href="#contact"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-atlas-mist transition-colors hover:border-atlas-gold/40 hover:text-atlas-gold"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  aria-label="Twitter / X"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-atlas-mist transition-colors hover:border-atlas-gold/40 hover:text-atlas-gold"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
