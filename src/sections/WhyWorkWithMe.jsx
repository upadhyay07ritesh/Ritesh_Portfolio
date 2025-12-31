import Section from '../components/Section'
import { motion } from 'framer-motion'

const reasons = [
  'Clean & scalable architecture',
  'Clear communication',
  'On-time delivery',
  'Long-term support mindset'
]

export default function WhyWorkWithMe() {
  return (
    <Section className="bg-gradient-to-b from-transparent to-blue-900/10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Work With Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4 p-6 rounded-lg border border-blue-600/30 bg-blue-900/5 hover:bg-blue-900/10 hover:border-blue-500/50 transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></div>
              <p className="text-xl text-gray-300">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

