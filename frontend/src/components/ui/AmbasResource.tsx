'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Bookmark, PlusIcon } from 'lucide-react'
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

export function AmbasResource() {
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
        className="col-span-12 row-span-2 flex flex-col justify-between overflow-hidden rounded-base border-2 border-border bg-white p-6 shadow-light dark:border-darkBorder dark:bg-darkBg dark:shadow-dark lg:col-span-6"
      >
        <div className="mb-4 flex items-center gap-4">
          <AnimatedStar />
          <h1 className="text-xl font-semibold uppercase tracking-wider">
            Resource Library
          </h1>
        </div>
        <p className="text-muted-foreground mb-6 text-gray-600">
          The ZKM Resource Library serves as a centralized repository of
          materials designed to support ambassadors in their outreach efforts.
        </p>
        <div className="flex flex-grow flex-row items-end justify-between">
          <div>
            <DialogTitle className="text-zinc-950 dark:text-zinc-50">
              Resources
            </DialogTitle>
            <DialogSubtitle className="text-zinc-700 dark:text-zinc-400">
              Access ambassador materials
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
                Resource Library
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
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    text: 'Brand Guidelines',
                    url: 'https://cdn.prod.website-files.com/649f0dfbf8603574bb225beb/66688e9a9bc6c97647cf9b07_ZKM%20Brandguidelines.pdf',
                  },
                  {
                    text: 'Our Blog',
                    url: 'https://www.zkm.io/blog',
                  },
                  {
                    text: 'ZKM Education Hub',
                    url: 'https://www.zkm.io/education-hub',
                  },
                  {
                    text: 'Prover Service',
                    url: 'https://www.zkm.io/apply',
                  },
                  {
                    text: 'Settlement Network',
                    url: 'https://settlement.network/',
                  },
                  {
                    text: 'Entangled Rollup',
                    url: 'https://www.zkm.io/entangled-rollup',
                  },
                  {
                    text: 'Whitepaper',
                    url: 'https://whitepaper.zkm.io/new_zkMIPS_white_paper-5.pdf',
                  },
                  {
                    text: 'Events',
                    url: 'https://www.zkm.io/events',
                  },
                  {
                    text: 'Community Forum',
                    url: 'https://www.zkm.io/forum',
                  },
                ].map((button, index) => (
                  <Button key={index} asChild className="w-full">
                    <a
                      href={button.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-start"
                    >
                      <Bookmark className="mr-2 text-orange-zkm" />
                      <span className="flex-1">{button.text}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </DialogDescription>
          </div>
          <DialogClose className="text-zinc-50" />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  )
}

export default AmbasResource 