import { useState } from 'react'
import Section from '../components/Section'
import Button from '../components/Button'
import { motion } from 'framer-motion'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb
} from 'react-icons/si'

const techIconMap = {
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  'React.js': SiReact,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  MongoDB: SiMongodb,
}

const projects = [
  {
    title: 'GreenArc Commune',
    role: 'Frontend Developer',
    type: 'Public-facing Company Website',
    problem: 'Organization needed professional web presence to showcase trading courses',
    solution: 'Built official public website with clean UI, responsive design, and clear content structure',
    description: 'Built the official public website for GreenArc Commune to showcase the company\'s brand identity and promote its flagship trading courses. The website focuses on clean UI, responsive design, and clear content structure to ensure a smooth user experience across devices.',
    contributions: [
      'Designed and developed responsive UI using HTML, CSS, and JavaScript',
      'Implemented clean layouts to present company services and courses',
      'Ensured cross-device compatibility and basic performance optimization'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://greenarccommune.com',
    imageType: 'website'
  },
  {
    title: 'GreenArc LMS',
    role: 'Full Stack Developer (MERN)',
    type: 'Learning Management System',
    problem: 'Needed centralized system to manage students, courses, and administrative workflows',
    solution: 'Developing comprehensive LMS with secure authentication and role-based access control',
    description: 'Developing a Learning Management System to manage students, courses, and administrative workflows. The system includes secure authentication, role-based access control, and structured content delivery for a scalable learning platform.',
    contributions: [
      'Implemented student authentication and role-based access',
      'Built admin dashboard for course and user management',
      'Developed backend APIs using Node.js and Express',
      'Integrated MongoDB for structured data storage'
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    liveUrl: 'https://lms.greenarccommune.com',
    imageType: 'website'
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
  const [loadedImages, setLoadedImages] = useState({})

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }))
  }

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
            Featured Projects
          </motion.span>

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-white">Real solutions.</span>{' '}
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
            Production-grade applications built to solve real business challenges with modern web technologies.
          </motion.p>
        </motion.div>

        <div className="space-y-32 mb-32">
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
              <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* LEFT SIDE — UNCHANGED */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  {/* Project Header */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium tracking-wider uppercase text-purple-400/60">
                        {project.role}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
                    </div>

                    <h3 className="text-4xl md:text-5xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-sm text-purple-300/80 font-medium">
                      {project.type}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  {/* Problem & Solution */}
<div className="space-y-4">
  <div>
    <p className="text-sm font-medium text-purple-300 uppercase tracking-wider">
      Problem
    </p>
    <p className="text-gray-400 text-sm leading-relaxed">
      {project.problem}
    </p>
  </div>

  <div>
    <p className="text-sm font-medium text-purple-300 uppercase tracking-wider">
      Solution
    </p>
    <p className="text-gray-400 text-sm leading-relaxed">
      {project.solution}
    </p>
  </div>
</div>


                  <div className="space-y-3">
                    <p className="text-sm font-medium text-purple-300 uppercase tracking-wider">
                      Key Contributions
                    </p>
                    <ul className="space-y-2">
                      {project.contributions.map((contribution, cIndex) => (
                        <motion.li
                          key={cIndex}
                          className="flex items-start gap-3 text-gray-300 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + cIndex * 0.05, duration: 0.4 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                          <span>{contribution}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium text-purple-300 uppercase tracking-wider">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, tIndex) => {
                        const Icon = techIconMap[tech]
                        return (
                          <span
                            key={tIndex}
                            className="px-3 py-1 text-xs font-medium text-purple-300/80 bg-purple-500/10 border border-purple-500/20 rounded-full inline-flex items-center gap-2"
                          >
                            {Icon && <Icon className="text-purple-400 text-sm" />}
                            {tech}
                          </span>
                        )
                      })}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button href={project.liveUrl}>
                      View Live Website
                    </Button>
                  </div>
                </div>

                {/* RIGHT SIDE — ADDITIVE ONLY */}
                <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="aspect-video rounded-xl overflow-hidden border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-500 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />

                    {!loadedImages[index] && (
                      <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-br from-purple-800/30 to-blue-800/30 flex items-center justify-center">
                        <span className="text-sm text-purple-300/70">
                          Loading preview…
                        </span>
                      </div>
                    )}

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-20"
                    >
                      <img
                        src={`https://image.thum.io/get/width/1200/${project.liveUrl}`}
                        alt={`${project.title} Live Preview`}
                        onLoad={() => handleImageLoad(index)}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          loadedImages[index] ? 'blur-0 scale-100' : 'blur-md scale-105'
                        }`}
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <span className="px-4 py-2 text-sm font-medium text-white bg-purple-600/80 rounded-full backdrop-blur-sm">
                          View Live Website ↗
                        </span>
                      </div>
                    </a>

                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute inset-0 opacity-30">
                      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(168,85,247,0.1)" strokeWidth="0.5" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

{/* Client Reviews Section */}
        <motion.div
          className="border-t border-gray-800 pt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block mb-4 text-xs font-medium tracking-wider uppercase text-purple-300/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Client Feedback
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              What clients say
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="p-6 rounded-xl border border-purple-500/10 bg-gradient-to-br from-purple-900/5 to-blue-900/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    "Ritesh delivered a clean and responsive website as required. Communication was clear and project was completed smoothly."
                  </p>
                  <p className="text-sm text-purple-300/80 font-medium">
                    — GreenArc Commune Team
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-6 rounded-xl border border-purple-500/10 bg-gradient-to-br from-purple-900/5 to-blue-900/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    "Professional approach to development and good understanding of requirements. Looking forward to the LMS completion."
                  </p>
                  <p className="text-sm text-purple-300/80 font-medium">
                    — Project Coordinator
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>      </div>
    </Section>
  )
}
