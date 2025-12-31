import Section from '../components/Section'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Full Stack',
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN Stack']
  },
  {
    title: 'Backend & APIs',
    skills: ['REST APIs', 'Authentication', 'Authorization', 'Database Design']
  },
  {
    title: 'Performance',
    skills: ['Optimization', 'Code Refactoring', 'Bug Fixing', 'Scalability']
  },
  {
    title: 'Deployment',
    skills: ['Production Setup', 'CI/CD', 'Server Management', 'Monitoring']
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

export default function Skills() {
  return (
    <Section className="bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
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
            Technical Expertise
          </motion.span>
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-white">Built for</span>{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              production
            </span>
          </motion.h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="group relative p-8 rounded-xl border border-purple-500/10 bg-gradient-to-br from-purple-900/5 to-blue-900/5 hover:border-purple-500/30 hover:from-purple-900/10 hover:to-blue-900/10 transition-all duration-500"
              variants={fadeUp}
              custom={categoryIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 pb-4 border-b border-purple-500/10 group-hover:border-purple-500/30 transition-colors">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.08 + skillIndex * 0.05, duration: 0.4 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400/60 group-hover:bg-purple-400 transition-colors" />
                    <span className="text-gray-300 text-sm font-light">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

