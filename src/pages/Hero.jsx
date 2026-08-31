import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { SocialLinks } from "../Data/Data";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px]" />

      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Availability */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-4 py-2 text-sm text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Available for opportunities
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">Hi, I'm</span>
            <span className="block text-red-500">
              Akash Krishnan<span className="text-white">.</span>
            </span>
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-zinc-300 sm:text-3xl md:text-4xl">
            Full-Stack Developer
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            I build modern, responsive and scalable web applications using
            React, Node.js and modern web technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 font-medium transition hover:bg-red-600"
            >
              View Projects
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/10 px-6 py-3 font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-4">
            {SocialLinks.map((links, index) => (
              <a
                href={links.href}
                aria-label={links.label}
                key={links.id}
                className="rounded-full border border-white/10 p-3 text-zinc-500 transition hover:border-red-500/30 hover:text-white"
              >
                {links.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500"
        >
          <ArrowDown size={22} />
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
