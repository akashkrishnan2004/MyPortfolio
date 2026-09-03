import { motion } from "framer-motion";
import { skillCategories } from "../Data/Data";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-red-500">
            My Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Technologies I work with
          </h2>

          <p className="mt-5 max-w-2xl text-zinc-400">
            A collection of technologies and tools I use to design, develop and
            deploy modern web applications.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-white/[0.04]"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 transition group-hover:bg-red-500 group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>

                    <p className="text-sm text-zinc-500">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-zinc-400 transition hover:border-red-500/30 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="flex flex-col items-center justify-center rounded-lg border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-zinc-400 transition hover:border-red-500/30 hover:text-white"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.label}
                        className="h-7 w-7 object-contain"
                      />

                      <h1 className="mt-1 text-sm font-medium">
                        {skill.label}
                      </h1>
                    </span>
                  ))}
                </div> */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
