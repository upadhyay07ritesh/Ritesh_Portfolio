import Section from '../components/Section'
import { motion } from 'framer-motion'

const services = [
  'MERN Full Stack Development',
  'REST APIs & Backend Systems',
  'Authentication & Authorization',
  'Performance Optimization & Bug Fixing'
]

export default function Services() {
  return (
    <Section className="bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Services
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-lg border border-purple-600/30 bg-purple-900/5 hover:bg-purple-900/10 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-gray-200 mb-2">
                {service}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

