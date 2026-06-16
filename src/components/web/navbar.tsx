"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#about",    label: "About"    },
  { href: "#skills",   label: "Skills"   },
  { href: "#projects", label: "Projects" },
  { href: "#journey",  label: "Journey"  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  return (
    <nav className="w-full py-4 sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" onClick={() => setMobileOpen(false)}>
          <h1 className="text-2xl font-bold">
            Ab<span className="text-violet-500">_Dev</span>
          </h1>
        </Link>

        <div className="hidden lg:flex items-center gap-8 font-light text-2xl text-[#555]">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}

          <Link
            href="#contact"
            className="text-[11px] tracking-[2px] uppercase px-5 py-2 border-3 border-violet-500 rounded-sm text-violet-500 hover:bg-violet-500 hover:text-[#080808] transition-all duration-200"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Hire me
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-1 rounded-md"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5 -translate-y-0.5" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {mobileOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/40 flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
