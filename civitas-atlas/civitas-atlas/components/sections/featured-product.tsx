"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MAHAATLAS_FEATURES } from "@/lib/data";

export function FeaturedProduct() {
  return (
    <section id="products" className="relative py-28 sm:py-36">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Flagship Platform"
            title="MahaAtlas — the Maharashtra Land Intelligence Platform"
            description="One platform unifying GIS, applied AI, LegalTech, and PropTech with public land records — built to give every stakeholder the same verified truth."
            className="max-w-3xl"
          />
        </div>

        {/* Console mock */}
        <Reveal delay={0.15}>
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0D0D12] to-[#09090B] shadow-[0_40px_120px_-40px_rgba(91,33,182,0.45)]">
            <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/70" />
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-atlas-fog">
                <MapPin className="h-3 w-3 text-atlas-gold" />
                mahaatlas.civitasatlas.in / survey-no. 214/2B
              </div>
              <Badge variant="gold">Live Sync</Badge>
            </div>

            <div className="grid gap-px bg-white/[0.06] md:grid-cols-[1.4fr_1fr]">
              {/* Map panel */}
              <div className="relative min-h-[320px] bg-[#0B0B10] p-6">
                <div className="absolute inset-0 opacity-40">
                  <ParcelMock />
                </div>
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between text-xs text-atlas-fog">
                    <span>Pune District &middot; Haveli Taluka</span>
                    <span className="font-mono">18.5204&deg; N, 73.8567&deg; E</span>
                  </div>
                  <div className="self-start rounded-xl border border-atlas-gold/30 bg-atlas-black/60 px-4 py-3 backdrop-blur-sm">
                    <p className="text-[11px] uppercase tracking-wider text-atlas-fog">
                      Selected Parcel
                    </p>
                    <p className="mt-1 font-mono text-sm text-atlas-white">
                      Gat No. 214/2B &middot; 1.42 Ha
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Title verified &middot; No active encumbrance
                    </p>
                  </div>
                </div>
              </div>

              {/* Data panel */}
              <div className="flex flex-col divide-y divide-white/[0.06] bg-[#0B0B10]">
                {[
                  { label: "7/12 Extract", value: "Reconciled", tone: "ok" },
                  { label: "Mutation Entries", value: "12 records", tone: "neutral" },
                  { label: "Litigation Check", value: "None found", tone: "ok" },
                  { label: "Encumbrance Layer", value: "Clear", tone: "ok" },
                  { label: "Last Sync", value: "4 minutes ago", tone: "neutral" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between px-6 py-4 text-sm"
                  >
                    <span className="text-atlas-fog">{row.label}</span>
                    <span
                      className={
                        row.tone === "ok"
                          ? "font-mono text-emerald-400"
                          : "font-mono text-atlas-white"
                      }
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Feature grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MAHAATLAS_FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-atlas-gold/30 hover:bg-white/[0.04]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors group-hover:border-atlas-gold/40">
                  <f.icon className="h-5 w-5 text-atlas-purple-light" />
                </div>
                <h3 className="mt-4 font-display text-base font-medium tracking-tight text-atlas-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-atlas-mist">
                  {f.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                Request platform access
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ParcelMock() {
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden="true">
      <g stroke="#7C3AED" strokeWidth="0.75" fill="none" opacity="0.6">
        <path d="M10 40 L120 20 L160 90 L60 120 Z" />
        <path d="M120 20 L230 10 L260 80 L160 90 Z" />
        <path d="M60 120 L160 90 L190 180 L90 200 Z" />
        <path d="M160 90 L260 80 L300 150 L190 180 Z" />
        <path d="M260 80 L370 60 L390 140 L300 150 Z" />
      </g>
      <g fill="#D4AF37" opacity="0.7">
        <circle cx="160" cy="90" r="2.4" />
        <circle cx="190" cy="180" r="2.4" />
        <circle cx="260" cy="80" r="2.4" />
        <circle cx="300" cy="150" r="2.4" />
      </g>
    </svg>
  );
}
