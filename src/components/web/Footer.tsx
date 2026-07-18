import { personal } from "../../lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-8 md:px-10 py-10 mt-15 border-t border-gray-500 flex flex-col items-center justify-center gap-4">
      <p
        className="text-lg tracking-normal text-gray-300"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        © {year}{" "}
        <span className="text-lime-300">Ab_Dev</span>. All rights
        reserved.
      </p>
      <p
        className="text-sm tracking-normal text-gray-300"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        Built with{" "}
        <span className="text-lime-300">Next.js</span> &{" "}
        <span className="text-lime-300">Tailwind CSS</span>
      </p>
    </footer>
  );
}
