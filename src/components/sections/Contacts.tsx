import Link from "next/link";
import { personal, contactCopy } from "../../lib/data";
import { Mail, MapPin } from "lucide-react";
import { FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa6";

export function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-8 py-30 md:py-35 text-center rounded-2xl"
      style={{ background: "var(--color-surface)" }}
    >
      <h2
        className="text-6xl font-bold tracking-[1px] mb-4"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        Contact
      </h2>

      {/* Big heading */}
      <div
        className="text-4xl font-normal tracking-[2px] text-[#555] mb-16"
        style={{
          fontFamily: "var(--font-display)",
        }}
      >
        {contactCopy.heading1}{" "}
        <span className="text-violet-500">{contactCopy.heading2}</span>
      </div>

      {/* Description */}
      <p className="reveal reveal-delay-1 text-[20px] text-[#555] max-w-md mx-auto mb-12 leading-[1.75]">
        {contactCopy.desc}
      </p>

      {/* Buttons */}
      <div className="reveal reveal-delay-2 flex flex-col md:flex-row items-center justify-center gap-6 px-6 md:px-8">
        <Link
          href={`mailto:${personal.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-[#d4ff47] items-center gap-3 px-8 py-4 rounded-lg transition-all duration-300"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font bold">Contact information</h3>

            <div className="flex gap-5">
              <Mail className="w-7 h-7 text-violet-500 hover:text-[#d4ff47] transition cursor-pointer" />
              <div className="flex flex-col gap-1">
                <p className="text-start text-[#555] text-xl font-semibold">
                  Email
                </p>
                <p className="text-lg text-violet-600">{personal.email}</p>
              </div>
            </div>

            <div className="flex gap-5">
              <MapPin className="w-7 h-7 text-violet-500" />
              <div className="flex flex-col gap-1">
                <p className="text-start text-[#555] text-xl font-semibold">
                  Location
                </p>
                <p className="text-lg">{personal.location}</p>
              </div>
            </div>
          </div>
        </Link>

        <div
          className="bg-[#d4ff47] flex flex-col items-center justify-center gap-8 px-8 py-4 rounded-lg transition-all duration-300"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <h3 className="text-2xl font-bold">Connect with Me</h3>

          <div className="inline-flex items-center gap-5">
            <Link
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaGithub className="w-7 h-7 text-violet-500" />
            </Link>

            <Link
              href={personal.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaTwitter className="w-7 h-7 text-violet-500" />
            </Link>

            <Link
              href={personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaWhatsapp className="w-7 h-7 text-violet-500" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
