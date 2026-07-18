import { timeline } from "../../lib/data";

export function Journey() {
  return (
    <section
      id="journey"
      className="max-w-5xl mx-auto py-10 md:py-15"
    >
      <div className="flex flex-col items-center justify-center">
        <h2
          className="text-5xl text-center text-slate-200 font-bold mb-4"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Professional Experience
        </h2>
        <h3 className="text-xl font-normal tracking-wider text-gray-300 text-center mb-10">
          My journey in the tech industry so far
        </h3>
      </div>

      {/* Timeline */}
      <div
        className="relative pl-10 max-w-170 mx-auto"
        style={{
          borderLeft: "3px solid",
          borderImageSource:
            "linear-gradient(to bottom, #576b15, #2c2b2b, transparent)",
          borderImageSlice: 1,
        }}
      >
        {timeline.map((item) => (
          <div
            key={item.year}
            className="timeline-item relative mb-14 last:mb-0"
            style={{ transitionDelay: `${item * 0.08}s` }}
          >
            {/* Dot */}
            <div
              className="absolute -left-11.25 top-1.2 w-2 h-2 rounded-full"
              style={{ background: "var(--color-accent)" }}
            />

            {/* Year */}
            <p
              className="text-sm tracking-wider uppercase text-lime-300 mb-2"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {item.year}
            </p>

            {/* Title */}
            <h3 className="text-xl font-medium mb-3 text-slate-200">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-lg leading-[1.75] text-[rgba(242,237,228,0.6)]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
