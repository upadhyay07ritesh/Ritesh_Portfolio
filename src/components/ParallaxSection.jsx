import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * ParallaxSection - Scroll-driven section with continuous parallax effects
 * 
 * Features:
 * - Continuous scroll-based opacity and position transforms
 * - Subtle parallax movement for depth
 * - No one-time animations - always reactive to scroll
 */
export default function ParallaxSection({ 
  children, 
  className = '', 
  snap = false,
  parallaxIntensity = 0.2,
  fadeIntensity = 0.5
}) {
  const ref = useRef(null)
  
  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // Transform values based on scroll progress
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3]
  )
  
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [50 * parallaxIntensity, -50 * parallaxIntensity]
  )
  
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.98, 1, 0.98]
  )

  return (
    <motion.section
      ref={ref}
      className={`py-32 md:py-40 px-6 md:px-12 ${snap ? 'snap-section' : ''} ${className}`}
      style={{
        opacity,
        y,
        scale
      }}
    >
      {children}
    </motion.section>
  )
}

