'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { GraduationCap, PlusIcon } from 'lucide-react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogSubtitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from '@/components/ui/dialog'

import Block from '@/components/ui/block'
import AnimatedStar from '@/components/ui/AnimatedStar'

export function AmbasEducation() {
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
        <div className="mb-4 flex items-center gap-4">
          <AnimatedStar />
          <h1 className="text-xl font-semibold uppercase tracking-wider">
            Education Hub
          </h1>
        </div>
        <p className="text-muted-foreground mb-6 text-gray-600">
          Access comprehensive learning resources and training materials to enhance your knowledge of ZKM technology.
        </p>
        <div className="flex flex-grow flex-row items-end justify-between">
          <div>
            <DialogTitle className="text-zinc-950 dark:text-zinc-50">
              Education
            </DialogTitle>
            <DialogSubtitle className="text-zinc-700 dark:text-zinc-400">
              Explore learning resources
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
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden dark:bg-zinc-900 sm:w-[600px]"
        >
          <div className="p-6">
            <div className="mb-6 flex items-center gap-4">
              <AnimatedStar />
              <h1 className="text-xl font-semibold uppercase tracking-wider">
                Education Hub
              </h1>
            </div>
            <DialogDescription
              className="max-h-[60vh] overflow-y-auto pr-6"
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <p className="text-muted-foreground leading-relaxed text-gray-600">
                The Education Hub provides comprehensive resources for learning about:
              </p>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3">
                  <GraduationCap className="mt-1 h-5 w-5 text-orange-zkm" />
                  <div>
                    <h3 className="font-semibold">ZK Technology</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Deep dive into zero-knowledge proofs and their applications
                    </p>
                  </div>
                </li>
                {/* Add more educational topics as needed */}
              </ul>
              <div className="mt-6">
                <Button asChild className="w-full">
                  <a
                    href="https://www.zkm.io/education-hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <GraduationCap className="mr-2" />
                    Start Learning
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

export default AmbasEducation 