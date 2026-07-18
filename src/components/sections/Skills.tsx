import { skills, marqueeItems } from "../../lib/data";

export function Skills() {
  // Duplicate for seamless loop
  const marquee = [...marqueeItems, ...marqueeItems];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center py-10 md:py-15"
    >
      <h2 className="text-4xl text-slate-200 font-bold mb-4">
        Skills and Expertise
      </h2>
      <h3 className="reveal text-xl text-center font-normal tracking-normal text-gray-300 mb-10">
        Technologies and tools I work with
      </h3>

      {/* Marquee */}
      <div className="max-w-5xl mx-auto w-full px-4 md:px-6 lg:px-8">
        <div
          className="overflow-hidden border-y-2 border-gray-300 rounded-3xl py-4 mb-16"
        >
          <div
            className="flex gap-12 whitespace-nowrap"
            style={{ animation: "marquee 22s linear infinite" }}
          >
            {marquee.map((item, i) => (
              <span
                key={i}
                className="text-2xl tracking-wider shrink-0"
                style={{
                  fontFamily: "var(--font-display)",
                  color: item.accent ? "#d4ff47" : "white",
                }}
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
        {skills.map((skill) => (
          <div
            key={skill.icon}
            className={`reveal reveal-delay-${(skill % 4) + 1} group relative bg-slate-800 overflow-hidden p-7 cursor-pointer`}
          >
            <div
              className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-[400ms] ease-[cubic-bezier(.16,1,.3,1)]"
              style={{ background: "var(--color-accent)" }}
            />
            <div className="relative">
              <div className="text-3xl mb-2">{skill.icon}</div>
              <div className="text-xl text-lime-300 font-medium mb-2 group-hover:text-black transition-colors duration-300">
                {skill.name}
              </div>
              <div
                className="text-xs tracking-wider uppercase text-gray-300 group-hover:text-black group-hover:opacity-60 transition-colors duration-300"
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
