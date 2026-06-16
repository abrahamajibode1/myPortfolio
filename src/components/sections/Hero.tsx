import { personal } from "../../../lib/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-end px-8 md:px-10 pb-20 pt-32 relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 55% 45% at 82% 18%, rgba(212,255,71,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 45% 55% at 12% 82%, rgba(255,92,53,0.05) 0%, transparent 60%)
          `,
        }}
      />

      {/* Availability badge */}
      <div
        className="absolute top-28 right-8 md:right-10 flex items-center gap-2 opacity-0"
        style={{ animation: "fadeIn 0.8s 1.1s forwards", fontFamily: "var(--font-mono)" }}
      >
        <span
          className="w-[7px] h-[7px] rounded-full bg-green-400"
          style={{ animation: "pulseDot 2s infinite" }}
        />
        <span className="text-[11px] tracking-[2px] text-[#555] uppercase">
          {personal.availableText}
        </span>
      </div>

      {/* Location label */}
      <div
        className="opacity-0 mb-6"
        style={{ animation: "fadeUp 0.8s 0.3s forwards", fontFamily: "var(--font-mono)" }}
      >
        <span className="text-[11px] tracking-[3px] text-[#d4ff47] uppercase">
          {personal.title} — {personal.location}
        </span>
      </div>

      {/* Giant name */}
      <h1
        className="leading-[0.88] tracking-tight text-[#f2ede4] opacity-0"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(88px, 16vw, 210px)",
          animation: "fadeUp 0.8s 0.5s forwards",
        }}
      >
        {personal.name.slice(0, 4)}
        <span className="text-[#d4ff47]">{personal.name.slice(4, 5)}</span>
        <br />
        {personal.name.slice(5)}
      </h1>

      {/* Tagline */}
      <p
        className="mt-8 text-lg md:text-xl font-light text-[#555] max-w-[520px] opacity-0"
        style={{ animation: "fadeUp 0.8s 0.7s forwards" }}
      >
        Self-taught developer who turns{" "}
        <strong className="text-[#f2ede4] font-medium">
          ideas into interfaces
        </strong>
        . Passionate about crafting clean, fast, and beautiful web experiences
        with <strong className="text-[#f2ede4] font-medium">React</strong> &{" "}
        <strong className="text-[#f2ede4] font-medium">Next.js</strong>.
      </p>

      {/* CTA buttons */}
      <div
        className="flex flex-wrap gap-4 mt-10 opacity-0"
        style={{ animation: "fadeUp 0.8s 0.9s forwards" }}
      >
        <a
          href="#projects"
          className="px-7 py-3 bg-[#d4ff47] text-[#080808] text-[12px] tracking-[2px] uppercase font-medium transition-opacity hover:opacity-80"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          See my work
        </a>
        <a
          href="#contact"
          className="px-7 py-3 border border-[#242424] text-[#555] text-[12px] tracking-[2px] uppercase hover:border-[#f2ede4] hover:text-[#f2ede4] transition-all"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Get in touch
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute right-8 md:right-10 bottom-20 hidden md:flex flex-col items-center gap-3 opacity-0"
        style={{ animation: "fadeIn 0.8s 1.3s forwards" }}
      >
        <div
          className="w-px h-16 origin-top"
          style={{
            background: "linear-gradient(to bottom, #555, transparent)",
            animation: "scrollLine 2s ease-in-out infinite",
          }}
        />
        <span
          className="text-[10px] tracking-[3px] text-[#555] uppercase"
          style={{
            fontFamily: "var(--font-mono)",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
