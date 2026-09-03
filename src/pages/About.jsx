import { motion } from "framer-motion";

import { highlights } from "../Data/Data";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-red-500">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Building things with
            <span className="text-zinc-500"> curiosity & code.</span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400">
            I'm an Information Technology student and full-stack developer
            passionate about building modern web applications. I enjoy learning
            new technologies, solving problems and turning ideas into useful
            products.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-red-500/30 hover:bg-white/[0.04]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

