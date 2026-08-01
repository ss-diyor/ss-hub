"use client";

import type { Project } from "@/lib/content";
import { ArrowUpRight, Bot, BrainCircuit, Flower2, GraduationCap, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const statusStyles: Record<Project["status"], string> = {
  Active: "border-success/30 bg-success/10 text-emerald-300",
  Building: "border-secondary/40 bg-secondary/12 text-blue-200",
  Planning: "border-slate-500/30 bg-slate-500/10 text-slate-300",
};

const iconMap = {
  brain: BrainCircuit,
  bot: Bot,
  flower: Flower2,
  graduate: GraduationCap,
  message: MessageCircle,
};

export function SpotlightCard({ project, index }: { project: Project; index: number }) {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const prefersReducedMotion = useReducedMotion();
  const Icon = iconMap[project.icon];

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPosition({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        });
      }}
      className="group relative min-h-[260px] overflow-hidden rounded-lg border border-line bg-surface p-6 shadow-card-glow outline-none transition duration-300 hover:-translate-y-1 hover:border-secondary/60 focus-within:border-secondary/80"
      style={{
        background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(46, 92, 168, 0.18), transparent 32%), #0B1018`,
      }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-5">
        <div className="grid size-11 place-items-center rounded-md border border-line bg-ink text-blue-200">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <span className={`rounded-full border px-3 py-1 text-xs font-medium ${statusStyles[project.status]}`}>
          {project.status}
        </span>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-slate-50">{project.name}</h3>
        <p className="mt-3 min-h-[56px] text-sm leading-6 text-muted">{project.description}</p>
      </div>

      <Link
        href={project.href ?? "#contact"}
        target={project.href ? "_blank" : undefined}
        rel={project.href ? "noreferrer" : undefined}
        className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-slate-100 transition hover:text-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        aria-label={`Visit ${project.name}`}
      >
        Visit
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </Link>
    </motion.article>
  );
}
