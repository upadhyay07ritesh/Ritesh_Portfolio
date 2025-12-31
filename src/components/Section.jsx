import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * Section - Scroll-driven section with continuous reactivity
 * Enhanced with consistent visual treatment matching Hero quality
 */
export default function Section({ children, className = '', snap = false }) {
  const ref = useRef(null)
  
  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // Continuous opacity - smoother, less dramatic fade
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.7, 1, 1, 0.7]
  )
  
  // Subtle vertical parallax movement - consistent with Hero
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [20, -20]
  )

  return (
    <motion.section
      ref={ref}
      className={`relative py-32 md:py-40 px-6 md:px-12 ${snap ? 'snap-section' : ''} ${className}`}
      style={{
        opacity,
        y
      }}
    >
      {children}
    </motion.section>
  )
}

