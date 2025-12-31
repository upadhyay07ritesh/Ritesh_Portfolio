import { motion } from 'framer-motion'

export default function Button({ children, href, variant = 'primary', ...props }) {
  const baseClasses = 'px-8 py-3.5 rounded-lg font-medium transition-all duration-300 text-base inline-flex items-center justify-center gap-2 relative overflow-hidden group'
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30',
    secondary: 'bg-transparent border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-200 backdrop-blur-sm'
  }

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      )}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`${baseClasses} ${variants[variant]}`}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {buttonContent}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]}`}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {buttonContent}
    </motion.button>
  )
}

