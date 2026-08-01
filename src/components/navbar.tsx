"use client";

import { Code2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Now", href: "#now" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line/80 bg-ink/88 backdrop-blur-xl"
          : "border-transparent bg-ink/35"
      }`}
    >
      <nav
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <Link
          href="#home"
          className="group flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-100 outline-none transition focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          <span className="grid size-7 place-items-center rounded-md border border-line bg-surface text-xs text-slate-50 shadow-card-glow">
            DS
          </span>
          <span>Sultanov.Space</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex size-10 items-center justify-center rounded-md border border-line bg-surface/80 text-slate-200 transition hover:border-secondary/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          aria-label="Open GitHub"
        >
          <Code2 className="size-4" aria-hidden="true" />
        </Link>
      </nav>
    </header>
  );
}
