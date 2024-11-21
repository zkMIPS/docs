'use client'

import { motion } from 'framer-motion'

export function StarBurst({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <motion.svg
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L14.4 8.8L21.6 9.8L16.8 14.9L18.2 22L12 18.7L5.8 22L7.2 14.9L2.4 9.8L9.6 8.8L12 2Z"
        className="fill-text stroke-text dark:fill-darkText dark:stroke-darkText"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  )
}

export function RewardIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <motion.svg
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L14.4 8.8L21.6 9.8L16.8 14.9L18.2 22L12 18.7L5.8 22L7.2 14.9L2.4 9.8L9.6 8.8L12 2Z"
        className="fill-text stroke-text dark:fill-darkText dark:stroke-darkText"
        strokeWidth="1"
      />
    </motion.svg>
  )
}

export function FAQIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <motion.svg
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L14.4 8.8L21.6 9.8L16.8 14.9L18.2 22L12 18.7L5.8 22L7.2 14.9L2.4 9.8L9.6 8.8L12 2Z"
        className="fill-text stroke-text dark:fill-darkText dark:stroke-darkText"
        strokeWidth="1"
      />
    </motion.svg>
  )
}

export function CalendarIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <motion.svg
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L14.4 8.8L21.6 9.8L16.8 14.9L18.2 22L12 18.7L5.8 22L7.2 14.9L2.4 9.8L9.6 8.8L12 2Z"
        className="fill-text stroke-text dark:fill-darkText dark:stroke-darkText"
        strokeWidth="1"
      />
    </motion.svg>
  )
}

export function CommunityIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <motion.svg
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L14.4 8.8L21.6 9.8L16.8 14.9L18.2 22L12 18.7L5.8 22L7.2 14.9L2.4 9.8L9.6 8.8L12 2Z"
        className="fill-text stroke-text dark:fill-darkText dark:stroke-darkText"
        strokeWidth="1"
      />
    </motion.svg>
  )
} 