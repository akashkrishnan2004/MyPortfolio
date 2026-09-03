import { ArrowUp } from "lucide-react";
import Logo from "./Logo";
import { SocialLinks } from "../Data/Data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo */}
          <div>
            <Logo />

            <p className="mt-2 text-sm text-zinc-500">
              Building things with React & Node.js.
            </p>
          </div>

          {/* Social Links */}
          <div className="  flex items-center gap-3">
            {SocialLinks.map((links, index) => (
              <a
                href={links.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={links.label}
                key={links.id}
                className="rounded-full border border-white/10 p-3 text-zinc-500 transition hover:border-cyan-500/30 hover:text-white"
              >
                {links.icon}
              </a>
            ))}

            <a
              href="#home"
              aria-label="Back to top"
              className="rounded-full bg-cyan-500 p-3 text-white transition hover:bg-cyan-600"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-500">Akash Krishnan</span>. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
