import { personal, stats } from "../../lib/data";
import Link from "next/link";

export function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center px-8 md:px-10 py-10 md:py-15"
    >
      <h2
        className="text-4xl text-slate-200 font-bold mb-4"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        About Me
      </h2>

      <h3 className="reveal max-w-3xl text-xl text-center text-gray-300 font-normal tracking-normal mb-10">
        {personal.tagline}
      </h3>

      {/* Grid */}
      <div>
        {/* Bio */}
        <div className="reveal reveal-delay-1 max-w-4xl mx-auto flex flex-col text-lg text-center gap-5">
          {personal.bio.map((para) => (
            <p key={para} className="text-lg text-gray-300 leading-normal">
              {para}
            </p>
          ))}
        </div>

        {/* Stats grid */}
        <div className="reveal reveal-delay-2 grid grid-cols-2 md:grid-cols-4 gap-12 pt-16">
          {stats.map((s) => (
            <Link
              href={s.href || "#"}
              key={s.label}
              className="text-center p-4 rounded-xl bg-slate-800 hover:bg-slate-900"
            >
              <div
                className="text-5xl leading-none text-lime-300 mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.number}
              </div>
              <div
                className="text-5 tracking-normal uppercase text-slate-200"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {s.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
