'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Split, PlusIcon, Search, Users, Medal } from 'lucide-react'
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
      <div className="absolute inset-0 grid grid-cols-3 gap-8">
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-orange-zkm/30 to-zinc-500/20 rounded-lg shadow-lg" />
            <Search className="h-5 w-5 text-orange-zkm shadow-[0_0_15px_rgba(0,0,0,0.2)] animate-pulse-slow z-[2]" />
            <div className="absolute -bottom-2 -right-2 h-2 w-2 bg-orange-zkm/60 shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-full animate-pulse-fade" />
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute w-16 h-16 bg-gradient-to-br from-orange-zkm/30 to-zinc-500/20 rounded-full animate-pulse-slow shadow-lg" />
          <div className="absolute w-12 h-12 bg-gradient-to-br from-orange-zkm/40 to-zinc-500/30 rounded-full animate-pulse-fade shadow-lg" />
          <Medal className="h-8 w-8 text-orange-zkm shadow-[0_0_15px_rgba(0,0,0,0.2)] animate-pulse-bright z-[2]" />
        </div>

        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-orange-zkm/30 to-zinc-500/20 rounded-lg shadow-lg" />
            <Users className="h-5 w-5 text-orange-zkm shadow-[0_0_15px_rgba(0,0,0,0.2)] animate-pulse-slow z-[2]" />
            <div className="absolute -top-2 -left-2 h-2 w-2 bg-orange-zkm/60 shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-full animate-pulse-fade" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function AmbasLooking() {
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
            Who are we looking for?
          </h1>
        </div>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Passionate advocates with blockchain knowledge, active in web3
          communities, and eager to promote ZKM's mission.
        </p>
        <div className="flex flex-1 items-center -mx-6">
          <DotGrid />
        </div>
        <div className="flex flex-row items-end justify-between p-2">
          <div>
            <DialogTitle className="text-zinc-950 dark:text-zinc-50">
              Ideal
            </DialogTitle>
            <DialogSubtitle className="text-zinc-700 dark:text-zinc-400">
              See if you match our ambassador profile
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
                Who are we looking for?
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
                Passionate advocates with blockchain knowledge, active in web3
                communities, and eager to promote ZKM's mission. Ideal
                ambassadors are proactive, community-focused, and aligned with
                ZKM's vision.
              </p>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3">
                  <Split className="mt-1 h-5 w-5 text-orange-zkm" />
                  <div>
                    <h3 className="font-semibold">Ambassador Profile</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Key qualities and responsibilities of ZKM ambassadors
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
                    <Split className="mr-2" />
                    Role Breakdown
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

export default AmbasLooking
