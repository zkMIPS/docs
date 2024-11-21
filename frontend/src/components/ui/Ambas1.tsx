'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { PersonStanding, Telescope, PlusIcon } from 'lucide-react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from '@/components/ui/dialog'

import Block from '@/components/ui/block'
import AnimatedStar from '@/components/ui/AnimatedStar'

const DotGrid = () => {
  return (
    <div className="relative my-4 mx-auto w-[90%] h-[60px]">
      <div className="absolute inset-0 grid grid-cols-5 gap-3">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-center"
          >
            <div 
              className={`
                ${i === 2 || i === 7
                  ? 'h-3 w-3 animate-pulse-bright bg-orange-zkm' 
                  : i % 2 === 0 
                    ? 'h-2.5 w-2.5 animate-pulse-slow bg-orange-zkm/50'
                    : 'h-2 w-2 animate-pulse-fade bg-orange-zkm/30'}`}
              style={{
                borderRadius: '50%',
                animationDelay: `${i * 120}ms`
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function Ambas1() {
  return (
    <Dialog
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: '12px',
        }}
        className="col-span-12 row-span-2 flex flex-col justify-between overflow-hidden rounded-base border-2 border-border bg-white p-6 shadow-light dark:border-darkBorder dark:bg-darkBg dark:shadow-dark lg:col-span-4"
      >
        <div className="flex items-center gap-4">
          <AnimatedStar />
          <h1 className="text-xl font-semibold uppercase tracking-wider">
            Ambassador Program
          </h1>
        </div>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Shape ZKM's tomorrow: A unique opportunity for creative
          visionaries and community champions to gain distinguished
          status and make a lasting impact.
        </p>
        <div className="flex flex-1 items-center -mx-6">
          <DotGrid />
        </div>
        <div className="flex flex-row items-end justify-between p-2">
          <div>
            <DialogTitle className="text-zinc-950 dark:text-zinc-50">
              ZKM
            </DialogTitle>
            <DialogSubtitle className="text-zinc-700 dark:text-zinc-400">
              Click to learn about our mission and team
            </DialogSubtitle>
          </div>
          <button
            type="button"
            className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
            aria-label="Open dialog"
          >
            <PlusIcon size={12} />
          </button>
        </div>
      </DialogTrigger>
      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: '24px',
          }}
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden dark:bg-zinc-900 sm:w-[500px]"
        >
          <div className="p-6">
            <div className="mb-6 flex items-center gap-4">
              <AnimatedStar />
              <h1 className="text-xl font-semibold uppercase tracking-wider">
                Ambassador Program
              </h1>
            </div>
            <DialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <p className="text-muted-foreground leading-relaxed text-gray-600">
                Shape ZKM&apos;s tomorrow: A unique opportunity for creative
                visionaries and community champions to gain distinguished
                status and make a lasting impact.
              </p>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3">
                  <PersonStanding className="mt-1 h-5 w-5 text-orange-zkm" />
                  <div>
                    <h3 className="font-semibold">Join Our Team</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Become part of our growing global community
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Telescope className="mt-1 h-5 w-5 text-orange-zkm" />
                  <div>
                    <h3 className="font-semibold">Explore Opportunities</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Discover ways to contribute and grow with ZKM
                    </p>
                  </div>
                </li>
              </ul>
              <div className="not-prose mt-6 flex flex-col gap-4 sm:flex-row md:mt-8">
                <Button asChild className="w-full text-left">
                  <a
                    href="https://www.zkm.io/team"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PersonStanding className="mr-2" />
                    Meet the Team
                  </a>
                </Button>
                <Button asChild className="w-full text-left">
                  <a
                    href="https://www.zkm.io/team"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Telescope className="mr-2" />
                    Explore More
                  </a>
                </Button>
              </div>
            </DialogDescription>
          </div>
          <DialogClose className="text-zinc-50" />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  )
}

export default Ambas1
