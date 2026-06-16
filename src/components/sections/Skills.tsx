import { skills, marqueeItems } from "../../lib/data";

export function Skills() {
  // Duplicate for seamless loop
  const marquee = [...marqueeItems, ...marqueeItems];

  return (
    <section id="skills" className="flex flex-col items-center justify-center py-10 md:py-15">
      <h2
        className="text-4xl font-bold tracking-[1px] mb-4"
      >
        Skills and Expertise
      </h2>
      <h3
        className="reveal text-xl [font-family:var(--font-geist-sans)] font-normal tracking-[2px] text-violet-500 mb-16"
      >
        Technologies and tools I work with
      </h3>

      {/* Marquee */}
      <div className="max-w-6xl mx-auto w-full px-4 md:px-6 lg:px-8">
        <div
          className="overflow-hidden border-y-4 rounded-3xl py-4 mb-16"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div
            className="flex gap-12 whitespace-nowrap"
            style={{ animation: "marquee 22s linear infinite" }}
          >
            {marquee.map((item, i) => (
              <span
                key={i}
                className="text-[28px] tracking-[3px] shrink-0"
                style={{
                  fontFamily: "var(--font-display)",
                  color: item.accent ? "#d4ff47" : "#242424",
                }}
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[10px]">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden border p-7 cursor-pointer`}
            style={{
              background: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <div
              className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-[400ms] ease-[cubic-bezier(.16,1,.3,1)]"
              style={{ background: "var(--color-accent)" }}
            />
            <div className="relative">
              <div className="text-[26px] mb-3">{skill.icon}</div>
              <div
                className="text-[15px] font-medium mb-1 group-hover:text-[#080808] transition-colors duration-300"
              >
                {skill.name}
              </div>
              <div
                className="text-[10px] tracking-[1px] uppercase text-[#555] group-hover:text-[#080808] group-hover:opacity-60 transition-colors duration-300"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {skill.level}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
