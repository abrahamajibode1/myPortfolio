import { timeline } from "../../lib/data";

export function Journey() {
  return (
    <section id="journey" className="px-8 md:px-10 py-28 md:py-36">
      <div className="flex flex-col items-center justify-center">
        <h2
          className="text-4xl font-bold tracking-[1px] mb-4"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Professional Experience
        </h2>
        <h3
          className="text-xl font-normal tracking-[2px] text-[#555] mb-16"
        >
          My journey in the tech industry so far
        </h3>
      </div>

      {/* Timeline */}
      <div
        className="relative pl-10 max-w-[680px] mx-auto"
        style={{
          borderLeft: "3px solid",
          borderImageSource:
            "linear-gradient(to bottom, #576b15, #2c2b2b, transparent)",
          borderImageSlice: 1,
        }}
      >
        {timeline.map((item, i) => (
          <div
            key={i}
            className="timeline-item relative mb-14 last:mb-0"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            {/* Dot */}
            <div
              className="absolute -left-[45px] top-[6px] w-2 h-2 rounded-full"
              style={{ background: "var(--color-accent)" }}
            />

            {/* Year */}
            <p
              className="text-[14px] tracking-[2px] uppercase text-violet-500 mb-2"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {item.year}
            </p>

            {/* Title */}
            <h3 className="text-[22px] font-medium mb-3 text-[#f2ede4]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-[17px] leading-[1.75] text-[rgba(242,237,228,0.6)]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
