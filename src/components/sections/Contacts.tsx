import Link from "next/link";
import { personal, contactCopy } from "../../lib/data";
import { Mail, MapPin } from "lucide-react";
import { FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa6";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-10 md:py-15 items-center justify-center"
    >
      <h2
        className="text-5xl text-slate-200 text-center font-bold mb-4"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        Contact
      </h2>

      {/* Big heading */}
      <div
        className="text-xl font-normal tracking-wider text-gray-300 text-center mb-7"
        style={{
          fontFamily: "var(--font-display)",
        }}
      >
        {contactCopy.heading1}{" "}
        <span className="text-lime-300">{contactCopy.heading2}</span>
      </div>

      {/* Description */}
      <p className="reveal reveal-delay-1 text-lg text-gray-300 text-center max-w-md mx-auto mb-10 leading-normal">
        {contactCopy.desc}
      </p>

      {/* Buttons */}
      <div className="reveal reveal-delay-2 flex flex-col md:flex-row items-center justify-center gap-6 px-6 md:px-8">
        <Link
          href={`mailto:${personal.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-slate-800 items-center gap-3 px-8 py-4 rounded-lg transition-all duration-300"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl text-slate-200 font bold">Contact information</h3>

            <div className="flex gap-5">
              <Mail className="w-7 h-7 text-lime-300 transition cursor-pointer" />
              <div className="flex flex-col gap-1">
                <p className="text-start text-gray-300 text-xl font-semibold">
                  Email
                </p>
                <p className="text-lg text-lime-300">{personal.email}</p>
              </div>
            </div>

            <div className="flex gap-5">
              <MapPin className="w-7 h-7 text-lime-300" />
              <div className="flex flex-col gap-1">
                <p className="text-start text-gray-300 text-xl font-semibold">
                  Location
                </p>
                <p className="text-lg text-lime-300">{personal.location}</p>
              </div>
            </div>
          </div>
        </Link>

        <div
          className="bg-slate-800 flex flex-col items-center justify-center gap-8 px-8 py-15 rounded-lg transition-all duration-300"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <h3 className="text-2xl text-slate-200 font-bold">Connect with Me</h3>

          <div className="inline-flex items-center gap-5">
            <Link
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaGithub className="w-7 h-7 text-lime-300" />
            </Link>

            <Link
              href={personal.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaTwitter className="w-7 h-7 text-lime-300" />
            </Link>

            <Link
              href={personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaWhatsapp className="w-7 h-7 text-lime-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
