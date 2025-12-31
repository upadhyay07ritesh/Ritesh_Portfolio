import { useEffect } from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Work from './sections/Work'
import Process from './sections/Process'
import Contact from './sections/Contact'
import CustomCursor from './components/CustomCursor'
import GridBackground from './components/GridBackground'
import './App.css'

function App() {
  // Section color theme mapping
  const sectionColorMap = {
    hero: { grid: 'purple', cursor: 'purple' },
    about: { grid: 'blue', cursor: 'blue' },
    skills: { grid: 'cyan', cursor: 'cyan' },
    work: { grid: 'emerald', cursor: 'emerald' },
    process: { grid: 'blue', cursor: 'blue' },
    contact: { grid: 'purple', cursor: 'purple' }
  }

  // Track which section is in view and update CSS variables for colors
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            const sectionId = entry.target.getAttribute('data-section') || 'hero'
            const colors = sectionColorMap[sectionId] || sectionColorMap.hero
            const root = document.documentElement
            
            // Map color names to RGB values
            const colorValues = {
              purple: { r: 168, g: 85, b: 247 },
              blue: { r: 59, g: 130, b: 246 },
              cyan: { r: 6, g: 182, b: 212 },
              emerald: { r: 16, g: 185, b: 129 }
            }
            
            const gridColor = colorValues[colors.grid]
            const cursorColor = colorValues[colors.cursor]
            
            // Set grid and cursor accent colors
            root.style.setProperty('--grid-accent', `${gridColor.r}, ${gridColor.g}, ${gridColor.b}`)
            root.style.setProperty('--cursor-accent', `${cursorColor.r}, ${cursorColor.g}, ${cursorColor.b}`)
          }
        })
      },
      { threshold: [0.3, 0.7] }
    )

    const sections = document.querySelectorAll('[data-section]')
    sections.forEach((section) => observer.observe(section))

    // Initialize with hero colors
    const root = document.documentElement
    root.style.setProperty('--grid-accent', '168, 85, 247')
    root.style.setProperty('--cursor-accent', '168, 85, 247')

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <GridBackground />
      <div className="snap-container relative z-0">
        <div data-section="hero">
          <Hero />
        </div>
        <div data-section="about">
          <About />
        </div>
        <div data-section="skills">
          <Skills />
        </div>
        <div data-section="work">
          <Work />
        </div>
        <div data-section="process">
          <Process />
        </div>
        <div data-section="contact">
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App
