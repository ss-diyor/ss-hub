import { Navbar } from "@/components/navbar";
import { HeroPanel } from "@/components/hero-panel";
import { Reveal } from "@/components/motion";
import { SpotlightCard } from "@/components/spotlight-card";
import { focusItems, projects, timeline } from "@/lib/content";
import {
  ArrowRight,
  Check,
  Code2,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink">
      <Navbar />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(248,250,252,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(248,250,252,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(35,74,138,0.36),transparent_62%)]" />

      <section
        id="home"
        className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 pb-20 pt-32 sm:px-6 lg:px-8"
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal className="relative">
            <div className="absolute -left-24 top-0 -z-10 size-72 rounded-full bg-primary/20 blur-3xl" />
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1 text-sm text-muted">
              <Sparkles className="size-3.5 text-blue-300" aria-hidden="true" />
              Everything started from curiosity.
            </p>
            <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[0.95] tracking-normal text-slate-50 sm:text-7xl lg:text-8xl">
              Diyorbek Sultanov
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Building digital products, experiments, and tools from Uzbekistan.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="#projects" className="button-primary">
                View Projects
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                <Code2 className="size-4" aria-hidden="true" />
                GitHub
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="hidden lg:block">
            <HeroPanel />
          </Reveal>
        </div>
      </section>

      <section id="projects" className="section">
        <Reveal className="section-heading">
          <p className="eyebrow">Featured Projects</p>
          <h2>Products, experiments, and systems.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <SpotlightCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="now" className="section">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal className="section-heading">
            <p className="eyebrow">Current Focus</p>
            <h2>Currently Building</h2>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {focusItems.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="flex min-h-24 items-center gap-4 rounded-lg border border-line bg-surface p-5 transition hover:border-secondary/60">
                  <span className="grid size-8 shrink-0 place-items-center rounded-md bg-primary/20 text-blue-200">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-medium leading-6 text-slate-100">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="timeline-title">
        <Reveal className="section-heading">
          <p className="eyebrow">Timeline</p>
          <h2 id="timeline-title">A focused building path.</h2>
        </Reveal>
        <div className="mt-12 max-w-3xl">
          {timeline.map((item, index) => (
            <Reveal key={item.year} delay={index * 0.05}>
              <div className="relative grid grid-cols-[76px_1fr] gap-5 pb-10 last:pb-0 sm:grid-cols-[112px_1fr]">
                <div className="text-lg font-semibold text-blue-200">{item.year}</div>
                <div className="relative border-l border-line pl-6">
                  <span className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-secondary shadow-[0_0_24px_rgba(46,92,168,0.8)]" />
                  <p className="rounded-lg border border-line bg-surface p-5 text-sm leading-7 text-muted">
                    {item.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="section pb-20">
        <Reveal>
          <div className="rounded-lg border border-line bg-surface p-6 shadow-card-glow sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="eyebrow">Contact</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-normal text-slate-50 sm:text-5xl">
                  Open to useful ideas and focused collaborations.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[520px]">
                <Link className="contact-link" href="https://github.com/" target="_blank" rel="noreferrer">
                  <Code2 className="size-4" aria-hidden="true" />
                  GitHub
                </Link>
                <Link className="contact-link" href="mailto:hello@sultanov.space">
                  <Mail className="size-4" aria-hidden="true" />
                  Email
                </Link>
                <Link className="contact-link" href="https://t.me/username" target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Telegram
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="relative border-t border-line py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Diyorbek Sultanov</p>
          <p>Built with curiosity.</p>
        </div>
      </footer>
    </main>
  );
}
