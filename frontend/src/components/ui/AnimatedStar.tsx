'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function AnimatedStar({ className = "h-8 w-8" }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false)

  const starVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      className="relative inline-flex items-center justify-center"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-text/20 blur-sm dark:bg-darkText/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <motion.svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={starVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      >
        <path
          d="M12 2L14.4 8.8L21.6 9.8L16.8 14.9L18.2 22L12 18.7L5.8 22L7.2 14.9L2.4 9.8L9.6 8.8L12 2Z"
          className="fill-text stroke-text dark:fill-darkText dark:stroke-darkText"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.div>
  )
}

export default AnimatedStar 