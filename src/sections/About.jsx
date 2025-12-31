import Section from '../components/Section'
import { motion } from 'framer-motion'

const problems = [
  'Slow or unreliable web applications',
  'Unstructured backend & APIs',
  'Poor authentication & security flow',
  "Codebases that don't scale"
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

export default function About() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left: Problems */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block mb-6 text-xs font-medium tracking-wider uppercase text-purple-300/70"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              What I Solve
            </motion.span>
            
            <div className="space-y-8">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8"
                  variants={fadeUp}
                  custom={index + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                    {problem}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Solution Statement */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-white">Clean architecture.</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Scalable systems.
              </span>
            </motion.h2>
            
            <motion.p
              className="text-lg md:text-xl text-gray-400/80 leading-relaxed mb-6 font-light"
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              I solve these challenges with clean, scalable MERN architecture.
              Every system I build is designed to grow with your business —
              not hold it back.
            </motion.p>

            <motion.div
              className="pt-6 border-t border-gray-800"
              variants={fadeUp}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                Approach
              </p>
              <p className="text-base text-gray-400 leading-relaxed font-light">
                Production-first mindset. Code that lasts. Systems that scale.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

