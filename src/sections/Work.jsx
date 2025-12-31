import Section from '../components/Section'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'GreenArc Commune',
    url: 'https://greenarccommune.com',
    type: 'Public Platform',
    description: 'Public-facing platform with modern UI, scalable frontend architecture, optimized performance, and production deployment.',
    highlights: ['Modern UI/UX', 'Scalable Architecture', 'Performance Optimized', 'Production Ready']
  },
  {
    title: 'GreenArc LMS',
    url: 'https://lms.greenarccommune.com',
    type: 'Learning Management System',
    description: 'Learning Management System with authentication, role-based access, structured content delivery, and admin controls.',
    highlights: ['Secure Authentication', 'Role-Based Access', 'Content Management', 'Admin Dashboard']
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
}

export default function Work() {
  return (
    <Section>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="inline-block mb-4 text-xs font-medium tracking-wider uppercase text-purple-300/70"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Selected Work
          </motion.span>
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-white">Real systems.</span>{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Real impact.
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400/80 max-w-2xl font-light"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Production-grade applications built for scale, performance, and long-term growth.
          </motion.p>
        </motion.div>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group"
              variants={fadeUp}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left: Content */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-medium tracking-wider uppercase text-purple-400/60">
                        {project.type}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-lg text-gray-400/80 leading-relaxed font-light">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 pt-4">
                      {project.highlights.map((highlight, hIndex) => (
                        <span
                          key={hIndex}
                          className="px-4 py-1.5 text-xs font-medium text-purple-300/80 bg-purple-500/10 border border-purple-500/20 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Right: Visual/CTA */}
                  <div className="relative">
                    <div className="aspect-video rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-500 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10 flex items-center gap-3 text-purple-300 group-hover:text-purple-200 transition-colors">
                        <span className="text-sm font-medium">View Project</span>
                        <motion.svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </motion.svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

