'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Eye, PlusIcon, Target, Lightbulb, Flag } from 'lucide-react'
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
    <div className="relative my-4 mx-auto w-[85%] h-[70px]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 grid grid-cols-12 gap-1">
          {Array.from({ length: 48 }).map((_, i) => (
            <div 
              key={i} 
              className="h-1 w-1 rounded-full dark:bg-white/10 bg-orange-zkm/10 animate-pulse-fade"
              style={{ animationDelay: `${Math.random() * 2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Connecting Lines */}
      <div className="absolute inset-0">
        {/* Left to Center Line */}
        <div className="absolute left-[25%] top-1/2 w-[20%] h-[2px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-zkm/70 to-orange-zkm/50 animate-pulse-slow" />
          {/* Decorative dots */}
          <div className="absolute -left-1 -top-1 h-2 w-2 bg-orange-zkm/80 rounded-full animate-pulse-fade" />
          <div className="absolute left-1/2 -top-1 h-2 w-2 bg-orange-zkm/80 rounded-full animate-pulse-fade" 
            style={{ animationDelay: '0.3s' }}
          />
        </div>
        
        {/* Center to Right Line */}
        <div className="absolute right-[25%] top-1/2 w-[20%] h-[2px]">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-orange-zkm/70 to-orange-zkm/50 animate-pulse-slow"
            style={{ animationDelay: '0.5s' }}
          />
          {/* Decorative dots */}
          <div className="absolute -right-1 -top-1 h-2 w-2 bg-orange-zkm/80 rounded-full animate-pulse-fade"
            style={{ animationDelay: '0.6s' }}
          />
          <div className="absolute right-1/2 -top-1 h-2 w-2 bg-orange-zkm/80 rounded-full animate-pulse-fade"
            style={{ animationDelay: '0.9s' }}
          />
        </div>
      </div>

      <div className="absolute inset-0 grid grid-cols-3 gap-8">
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-2 bg-orange-zkm/20 rounded-lg animate-pulse-slow" />
            <Lightbulb className="h-5 w-5 text-orange-zkm animate-pulse-slow" />
            <div className="absolute -bottom-2 -right-2 h-2 w-2 bg-orange-zkm/80 rounded-full animate-pulse-fade" />
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute w-16 h-16 bg-orange-zkm/20 rounded-full animate-pulse-slow" />
          <div className="absolute w-12 h-12 bg-orange-zkm/30 rounded-full animate-pulse-fade" />
          <Target className="h-8 w-8 text-orange-zkm animate-pulse-bright" />
        </div>

        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-2 bg-orange-zkm/20 rounded-lg animate-pulse-slow" />
            <Flag className="h-5 w-5 text-orange-zkm animate-pulse-slow" />
            <div className="absolute -top-2 -left-2 h-2 w-2 bg-orange-zkm/80 rounded-full animate-pulse-fade" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function AmbasPurpose() {
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
            The purpose of the program
          </h1>
        </div>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Building a strong community through dedicated ambassadors who share our vision and values.
        </p>
        <div className="flex flex-1 items-center -mx-6">
          <DotGrid />
        </div>
        <div className="flex flex-row items-end justify-between p-2">
          <div>
            <DialogTitle className="text-zinc-950 dark:text-zinc-50">
              Purpose
            </DialogTitle>
            <DialogSubtitle className="text-zinc-700 dark:text-zinc-400">
              Discover our program's core objectives
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
                The purpose of the program
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
                ZKM&apos;s Ambassadors play an essential role in educating the
                wider community and collaborating with the core team on
                translations, community management, running meetups and local
                conferences, as well as a variety of different activities.
              </p>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3">
                  <Eye className="mt-1 h-5 w-5 text-orange-zkm" />
                  <div>
                    <h3 className="font-semibold">Our Vision</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Building a decentralized future through community collaboration
                    </p>
                  </div>
                </li>
              </ul>
              <div className="not-prose mt-6 flex flex-col gap-4 sm:flex-row md:mt-8">
                <Button asChild className="w-full text-left">
                  <a
                    href="https://docs.zkm.io/introduction"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye className="mr-2" />
                    Vision & Mission
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


export default AmbasPurpose
