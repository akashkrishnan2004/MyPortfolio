import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, MapPin } from "lucide-react";

import { experience } from "../Data/Data";

function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-red-500">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Where I've worked
          </h2>

          <p className="mt-5 max-w-2xl text-zinc-400">
            My professional experience and the opportunities that helped me grow
            as a developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-14 ml-3 border-l border-white/10 pl-8 sm:ml-5 sm:pl-10">
          {experience.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="relative mb-10 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-6 flex h-5 w-5 items-center justify-center rounded-full border-4 border-zinc-950 bg-red-500 sm:-left-[51px]">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>

              {/* Card */}
              <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-white/[0.04]">
                {/* Top */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
                      <BriefcaseBusiness size={13} />
                      {item.year}
                    </span>

                    <h3 className="mt-4 text-xl font-semibold text-white sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-zinc-400">
                      {item.organization}
                    </p>

                    <div className="mt-2 flex items-center gap-1.5 text-xs text-zinc-600">
                      <MapPin size={13} />
                      {item.location}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden rounded-full border border-white/10 p-2 text-zinc-500 transition group-hover:border-red-500/30 group-hover:text-red-500 sm:block">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Description */}
                <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-500">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/5 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
