import { personal, stats } from "../../lib/data";

export function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center px-8 md:px-10 py-28 md:py-36"
    >

      <h2
        className="text-4xl font-bold tracking-[1px] mb-4"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        About Me
      </h2>

      <h3
        className="reveal text-xl font-normal tracking-[2px] text-[#555] mb-16"
      >
        {personal.tagline}
      </h3>

      {/* Grid */}
      <div>
        {/* Bio */}
        <div className="reveal reveal-delay-1 flex flex-col text-center gap-5">
          {personal.bio.map((para, i) => (
            <p key={i} className="text-lg leading-[1.5] text-[rgba(242,237,228,0.72)]">
              {para}
            </p>
          ))}
        </div>

        {/* Stats grid */}
        <div className="reveal reveal-delay-2 grid grid-cols-2 gap-[3rem] pt-[4rem]">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-xl bg-[var(--color-surface2)] hover:bg-[var(--color-surface)]"
            >
              <div
                className="text-[56px] leading-none text-violet-400 mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.number}
              </div>
              <div
                className="text-[10px] tracking-[2px] uppercase text-[#555]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
