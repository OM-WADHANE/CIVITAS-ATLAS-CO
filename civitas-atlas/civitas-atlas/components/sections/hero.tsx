"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CadastralField } from "@/components/gis-grid-background";
import { AUDIENCES } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-atlas-black" />
      <div className="absolute inset-0 -z-10 bg-grid-glow" />
      <div className="absolute inset-0 -z-10 opacity-70">
        <CadastralField intensity={1} />
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-atlas-black to-transparent" />

      <div className="container relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-wide text-atlas-mist backdrop-blur-sm"
          >
            <Compass className="h-3.5 w-3.5 text-atlas-gold" />
            Digital Public Infrastructure, built from Maharashtra
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-medium leading-[1.08] tracking-tight text-atlas-white sm:text-6xl md:text-7xl"
          >
            Building India&rsquo;s{" "}
            <span className="relative inline-block bg-gradient-to-r from-atlas-gold via-[#F0D584] to-atlas-gold bg-clip-text text-transparent">
              Land Intelligence
            </span>{" "}
            Infrastructure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-7 max-w-2xl text-balance text-base leading-relaxed text-atlas-mist sm:text-lg"
          >
            Civitas Atlas transforms fragmented government land records into
            trusted intelligence for citizens, developers, financial
            institutions, legal professionals, and governments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button size="lg" variant="gold" asChild>
              <a href="#products">
                Explore MahaAtlas
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#about">Read Our Vision</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          >
            {AUDIENCES.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-atlas-fog"
              >
                <a.icon className="h-3.5 w-3.5 text-atlas-purple-light" />
                {a.label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
