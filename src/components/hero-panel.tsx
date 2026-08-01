"use client";

import { motion, useReducedMotion } from "framer-motion";

const signals = ["Education systems", "Telegram products", "AI-assisted tools"];

export function HeroPanel() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative ml-auto aspect-square max-w-[500px] rounded-lg border border-line bg-surface p-5 shadow-navy-glow">
      <motion.div
        className="absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_30%_20%,rgba(46,92,168,0.22),transparent_42%)]"
        animate={prefersReducedMotion ? undefined : { opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative grid h-full grid-rows-[auto_1fr_auto] rounded-md border border-line/70 bg-ink/72 p-5">
        <div className="flex items-center justify-between border-b border-line pb-4">
          <span className="text-sm font-medium text-slate-200">builder console</span>
          <span className="rounded-full bg-success/15 px-2.5 py-1 text-xs text-emerald-300">active</span>
        </div>
        <div className="grid content-center gap-4">
          {signals.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-md border border-line bg-surface/80 p-4">
              <span className="size-2 rounded-full bg-secondary" />
              <span className="text-sm text-slate-200">{item}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-line pt-4 text-xs text-muted">
          <span>Sultanov.Space</span>
          <span>2026</span>
        </div>
      </div>
    </div>
  );
}
