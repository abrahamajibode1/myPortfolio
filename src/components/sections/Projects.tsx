import { projects } from "../../lib/data";
import Link from "next/link";

export function Projects() {
  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto flex flex-col items-center justify-center py-10 md:py-15"
    >
      <h2
        className="text-5xl text-slate-200 font-bold mb-4"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        Featured Projects
      </h2>
      <h3
        className="text-xl font-normal tracking-wider text-gray-300 text-center mb-10"
        style={{
          fontFamily: "var(--font-display)",
        }}
      >
        A few of my personal projects
      </h3>

      <div className="flex flex-col gap-5">
        {projects.map((project) => (
          <Link
            key={project.num}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`reveal group relative bg-slate-800 grid grid-cols-[56px_1fr] md:grid-cols-[80px_1fr_auto] items-center gap-6 md:gap-8 px-6 md:px-8 py-6 md:py-7 border-none rounded-2xl no-underline overflow-hidden cursor-pointer`}
          >

            <div
              className="text-4xl md:text-5xl leading-none text-slate-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.num}
            </div>

            {/* Info */}
            <div>
              <h3 className="text-lime-300 text-lg md:text-xl font-medium mb-2">
                {project.title}
              </h3>
              <p className="text-base text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags — hidden on mobile */}
            <div className="hidden md:flex flex-wrap gap-2 justify-end">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-wide uppercase px-3 py-1 border text-lime-300"
                  style={{
                    fontFamily: "var(--font-mono)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
