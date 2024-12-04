'use client'

import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'


export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string
    name: string
    title: string
    image?: string
  }[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [])
  const [start, setStart] = useState(false)

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        )
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        )
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20  max-w-full overflow-hidden',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full flex-nowrap gap-4 py-2',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map((item, idx) => (
          <Card
            className="relative w-[350px] max-w-full flex-shrink-0 border border-b-0 border-white px-8 py-6 md:w-[450px]"
            style={{
              background:
                'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
            }}
            key={item.name}
          >
            <blockquote className="flex flex-col items-center text-center">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              {item.image && (
                <div className="relative z-20 mb-6 flex justify-center">
                  <div className="h-24 w-24 overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.name}'s profile`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              )}
              <span className="text-muted-foreground relative z-20 text-sm font-normal leading-[1.6] text-gray-500">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-col items-center">
                <span className="text-muted-foreground text-sm font-normal leading-[1.6] text-gray-500">
                  {item.name}
                </span>
                <span className="text-muted-foreground text-sm font-normal leading-[1.6] text-gray-500">
                  {item.title}
                </span>
              </div>
            </blockquote>
          </Card>
        ))}
      </ul>
    </div>
  )
}