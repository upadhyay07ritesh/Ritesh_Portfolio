import Section from '../components/Section'
import { motion } from 'framer-motion'

const problems = [
  'Slow or unreliable web applications',
  'Unstructured backend & APIs',
  'Poor authentication & security flow',
  "Codebases that don't scale"
]

export default function WhatISolve() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What I Solve
        </motion.h2>
        
        <div className="space-y-6 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="text-xl md:text-2xl text-gray-300 pl-6 border-l-2 border-purple-600"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {problem}
            </motion.div>
          ))}
        </div>
        
        <motion.p
          className="text-xl md:text-2xl text-center text-gray-400 italic"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          "I solve these with clean, scalable MERN architecture."
        </motion.p>
      </div>
    </Section>
  )
}

