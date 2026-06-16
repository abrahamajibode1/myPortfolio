import { projects } from "../../lib/data";
import Link from "next/link";

export function Projects() {
  return (
    <section
    id="projects"
      className="flex flex-col items-center justify-center py-28 md:py-36"
    >
      <h2
        className="text-4xl font-bold tracking-[1px] mb-4"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        Featured Projects
      </h2>
      <h3
        className="text-xl font-normal tracking-[2px] text-[#555] mb-16"
        style={{
          fontFamily: "var(--font-display)",
        }}
      >
        A few of my personal projects
      </h3>

      <div className="flex flex-col gap-[20px]">
        {projects.map((project, i) => (
          <Link
            key={i}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`reveal group relative grid grid-cols-[56px_1fr] md:grid-cols-[80px_1fr_auto] items-center gap-6 md:gap-8 px-6 md:px-8 py-6 md:py-7 border-none rounded-2xl no-underline overflow-hidden cursor-pointer`}
            style={{
              background: "var(--color-bg)",
              borderColor: "var(--color-border)",
              color: "var(--color-ink)",
              transitionProperty: "background, border-color",
              transitionDuration: "300ms",
            }}
          >
            {/* Accent left bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"
              style={{ background: "var(--color-accent)" }}
            />

            {/* Number */}
            <div
              className="text-[40px] md:text-[52px] leading-none group-hover:text-[#d4ff47] transition-colors duration-300"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.num}
            </div>

            {/* Info */}
            <div>
              <h3 className="text-violet-500 text-[18px] md:text-[20px] font-medium mb-2">
                {project.title}
              </h3>
              <p className="text-[14px] text-[#555] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags — hidden on mobile */}
            <div className="hidden md:flex flex-wrap gap-2 justify-end">
              {project.tags.map((tag, j) => (
                <span
                  key={j}
                  className="text-[10px] tracking-[1px] uppercase px-3 py-1 border text-[#555] group-hover:border-[rgba(212,255,71,0.3)] group-hover:text-[#d4ff47] transition-all whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-mono)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Arrow */}
            <span className="absolute right-6 md:right-8 text-lg opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#d4ff47]">
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
