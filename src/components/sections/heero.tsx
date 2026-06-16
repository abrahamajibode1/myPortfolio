import Image from "next/image";
import Link from "next/link";
import { personal } from "../../lib/data";

export function Heero() {
  return (
    <div className="px-8 md:px-10 pb-20 pt-20 md:pt-32 relative overflow-hidden">
      <div
        className="absolute top-28 right-8 md:right-10 flex items-center gap-2 opacity-0"
        style={{
          animation: "fadeIn 0.8s 1.1s forwards",
          fontFamily: "var(--font-mono)",
        }}
      >
        <span
          className="w-[7px] h-[7px] rounded-full bg-green-400"
          style={{ animation: "pulseDot 2s infinite" }}
        />
        <span className="text-[11px] tracking-[2px] text-[#555] uppercase">
          {personal.availableText}
        </span>
      </div>

      <div className="flex flex-col md:flex-row justify-between pt-20 md:pt-15">
        <div>
          <h1 className="text-2xl text-[#555] font-bold">
            Hi, I'm <br />
            <span className="text-6xl text-violet-500 uppercase">
              {personal.fullName}
            </span>
          </h1>

          <div
            className="opacity-0 mb-6"
            style={{
              animation: "fadeUp 0.8s 0.3s forwards",
              fontFamily: "var(--font-mono)",
            }}
          >
            <span className="text-[10px] tracking-[3px] text-[#555] uppercase">
              {personal.title} — {personal.location}
            </span>
          </div>

          <p className="text-xl text-[#555] mt-5 max-w-xl leading-7">
            {personal.briefBio}
          </p>

          <div className="flex mt-8 gap-x-5">
            <Link
              href="/project"
              className="px-7 py-3 bg-[#d4ff47] text-[#080808] text-[12px] tracking-[2px] uppercase font-medium transition-opacity hover:opacity-80"
            >
              See my work
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3 border border-[#242424] text-[#555] text-[12px] tracking-[2px] uppercase hover:border-[#f2ede4] hover:text-[#f2ede4] transition-all"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="hidden lg:inline-block relative w-[25rem] h-[25rem] rounded-full overflow-hidden border-2 border-zinc-800 shadow-[0_10px_35px_rgba(148,163,184,0.18)]">
          <Image
            src="/ab-photo.jpeg"
            alt="cover-photo"
            fill
            sizes="(max-width: 768px) 250px, 400px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
