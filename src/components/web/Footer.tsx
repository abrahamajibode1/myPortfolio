import { personal } from "../../lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-8 md:px-10 py-10 mt-[65px] border-t border-[#242424] flex flex-col items-center justify-center gap-4">
      <p
        className="text-[17px] tracking-[1px] text-[#555]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        © {year}{" "}
        <span className="text-violet-500">Ab_Dev</span>. All rights
        reserved.
      </p>
      <p
        className="text-[13px] tracking-[1px] text-[#555]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        Built with{" "}
        <span className="text-violet-500">Next.js</span> &{" "}
        <span className="text-violet-500">Tailwind CSS</span>
      </p>
    </footer>
  );
}
