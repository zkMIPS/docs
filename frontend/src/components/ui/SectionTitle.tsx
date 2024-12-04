'use client'

import { motion } from 'framer-motion'
import { AnimatedStar } from './AnimatedStar'

interface SectionTitleProps {
  title: string
  subtitle?: string
  icon?: React.ReactNode
  className?: string
}

export function SectionTitle({ 
  title, 
  subtitle,
  icon = <AnimatedStar />,
  className = "" 
}: SectionTitleProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-3"
      >
        {icon}
        <div>
          <h2 className="text-xl font-semibold tracking-wide text-foreground">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default SectionTitle 