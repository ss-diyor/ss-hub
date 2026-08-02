import Link from "next/link";
import { projects, socials } from "@/lib/content";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-10 py-16 sm:px-16 sm:py-20">
      <div className="flex-1">
        {/* Identity */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            diyorbek sultanov
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            builds things from uzbekistan
          </p>
        </div>

        {/* Project links */}
        <nav className="mt-14 flex flex-col gap-5" aria-label="Projects">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={project.href ?? "#"}
              target={project.href ? "_blank" : undefined}
              rel={project.href ? "noreferrer" : undefined}
              className="w-fit text-xl text-neutral-400 transition-colors duration-100 hover:text-white"
            >
              {project.slug}
            </Link>
          ))}
        </nav>
      </div>

      {/* Social links */}
      <footer className="mt-20">
        <div className="border-t border-neutral-800 pt-6">
          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-neutral-600 transition-colors duration-100 hover:text-neutral-300"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
