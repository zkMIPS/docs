'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Eye, PlusIcon } from 'lucide-react'
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
    <div className="relative my-4 mx-auto w-[85%] h-[60px]">
      <div className="absolute inset-0 grid grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-center"
          >
            <div 
              className={`
                ${i === 1 || i === 4
                  ? 'h-3 w-3 animate-pulse-bright bg-orange-zkm' 
                  : 'h-2.5 w-2.5 animate-pulse-slow bg-orange-zkm/50'}`}
              style={{
                borderRadius: '50%',
                animationDelay: `${i * 250}ms`
              }}
            />
          </div>
        ))}
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
                  <Eye className="mt-1 h-5 w-5 text-cyan-500" />
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
