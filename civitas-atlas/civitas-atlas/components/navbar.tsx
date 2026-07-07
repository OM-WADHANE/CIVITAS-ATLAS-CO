"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-atlas",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 ease-atlas",
            scrolled
              ? "border-white/10 bg-atlas-black/70 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset]"
              : "border-transparent bg-transparent"
          )}
        >
          <a href="#home" className="flex items-center gap-2.5">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-atlas-purple-light to-atlas-indigo">
              <span className="absolute inset-0 rounded-lg border border-atlas-gold/30" />
              <span className="font-display text-sm font-semibold text-atlas-gold">
                C
              </span>
            </span>
            <span className="font-display text-[15px] font-medium tracking-tight text-atlas-white">
              Civitas Atlas
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-atlas-mist transition-colors duration-200 hover:bg-white/[0.05] hover:text-atlas-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button size="sm" variant="gold" asChild>
              <a href="#products">Explore MahaAtlas</a>
            </Button>
          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-atlas-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-white/10 bg-atlas-black/90 p-3 backdrop-blur-xl">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm text-atlas-mist hover:bg-white/[0.05] hover:text-atlas-white"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="px-2 pt-2">
                  <Button size="sm" variant="gold" className="w-full" asChild>
                    <a href="#products">Explore MahaAtlas</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
