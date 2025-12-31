import Section from '../components/Section'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'GreenArc Commune',
    url: 'https://greenarccommune.com',
    description:
      'Public-facing platform with modern UI, scalable frontend architecture, optimized performance, and production deployment.',
  },
  {
    title: 'GreenArc LMS',
    url: 'https://lms.greenarccommune.com',
    description:
      'Learning Management System with authentication, role-based access, structured content delivery, and admin controls.',
  },
]

export default function SelectedWork() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Selected Work
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, index) => {
            const isReverse = index % 2 !== 0

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="
                  p-8 rounded-lg border border-purple-600/30
                  bg-gradient-to-br from-purple-900/10 to-blue-900/10
                  hover:from-purple-900/20 hover:to-blue-900/20
                  hover:border-purple-500/50
                  transition-all duration-300
                "
              >
                {/* CARD GRID */}
                <div
                  className={`
                    grid grid-cols-1 md:grid-cols-12 gap-6 items-center
                  `}
                >
                  {/* CONTENT */}
                  <div
                    className={`
                      md:col-span-8
                      ${isReverse ? 'md:order-2' : 'md:order-1'}
                    `}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div
                    className={`
                      md:col-span-4
                      flex
                      ${isReverse ? 'md:justify-start' : 'md:justify-end'}
                      ${isReverse ? 'md:order-1' : 'md:order-2'}
                    `}
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        px-6 py-3 rounded-md
                        border border-purple-500/40
                        text-purple-300
                        hover:text-white
                        hover:border-purple-400
                        hover:bg-purple-500/10
                        transition-all duration-300
                        group
                      "
                    >
                      View Project
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
