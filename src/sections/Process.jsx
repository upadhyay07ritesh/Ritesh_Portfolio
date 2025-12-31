import Section from '../components/Section'
import { motion } from 'framer-motion'

const principles = [
  {
    title: 'Clean & Scalable Architecture',
    description: 'Every system is built with future growth in mind. Code that lasts, not quick fixes.'
  },
  {
    title: 'Clear Communication',
    description: 'Regular updates, transparent process, no surprises. You always know where we stand.'
  },
  {
    title: 'On-Time Delivery',
    description: 'Deadlines matter. I plan, execute, and deliver — consistently and reliably.'
  },
  {
    title: 'Long-Term Support',
    description: 'Your success is my success. I build systems that grow with you, not against you.'
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
}

export default function Process() {
  return (
    <Section className="bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="inline-block mb-4 text-xs font-medium tracking-wider uppercase text-blue-300/70"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Why Work With Me
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
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              the long term
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400/80 max-w-2xl mx-auto font-light"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Not just code. A partnership built on trust, quality, and results.
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              className="group relative p-8 rounded-xl border border-blue-500/10 bg-gradient-to-br from-blue-900/5 to-purple-900/5 hover:border-blue-500/30 hover:from-blue-900/10 hover:to-purple-900/10 transition-all duration-500"
              variants={fadeUp}
              custom={index + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0 group-hover:bg-blue-300 transition-colors" />
                <h3 className="text-xl font-semibold text-white flex-1">
                  {principle.title}
                </h3>
              </div>
              <p className="text-gray-400/80 leading-relaxed font-light pl-6">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

