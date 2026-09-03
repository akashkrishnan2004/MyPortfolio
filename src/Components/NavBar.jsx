import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navLinks } from "../Data/Data";
import Logo from "./Logo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="mx-auto mt-4 flex w-[calc(100%-2rem)] max-w-7xl items-center justify-between rounded-full border border-white/10 bg-zinc-950/70 px-5 py-3 backdrop-blur-xl sm:w-[calc(100%-3rem)] lg:w-[calc(100%-5rem)]">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-cyan-500"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Let's Talk */}
        <a
          href="#contact"
          className="hidden shrink-0 rounded-full bg-cyan-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-cyan-600 md:block"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="shrink-0 text-zinc-300 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mx-4 mt-2 rounded-2xl border border-white/10 bg-zinc-950/95 p-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-zinc-300 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Let's Talk */}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-cyan-500 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-cyan-600"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
