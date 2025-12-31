import Section from '../components/Section'
import Button from '../components/Button'
import { motion } from 'framer-motion'

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

export default function Contact() {
  return (
    <Section className="relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-[#0B0F19] pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block mb-6 text-xs font-medium tracking-wider uppercase text-purple-300/70"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Let's Work Together
          </motion.span>
        </motion.div>
        
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="text-white">Ready to build</span>{' '}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            something great?
          </span>
        </motion.h2>
        
        <motion.p
          className="text-xl text-gray-400/80 mb-4 font-light max-w-2xl mx-auto"
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Quick response. Clear communication. No confusion.
        </motion.p>
        
        <motion.p
          className="text-base text-gray-500 mb-12 font-light"
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Let's discuss your project and see how we can work together.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={fadeUp}
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Button href="mailto:upadhyay07ritesh@gmail.com">
            Send Email
          </Button>
          <Button href="https://wa.me/919302010199" variant="secondary">
            WhatsApp
          </Button>
        </motion.div>

        <motion.div
          className="mt-16 pt-8 border-t border-gray-800"
          variants={fadeUp}
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500 font-light">
            Ritesh Upadhyay • Full Stack Developer (MERN)
          </p>
          <p className="text-xs text-gray-600 mt-2 font-light">
            upadhyayritesh.in
          </p>
        </motion.div>
      </div>
    </Section>
  )
}
