'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HelpCircle, MessageCircle, PlusIcon, LineChart, TrendingUp } from 'lucide-react'
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

const DotGrid = () => {
  return (
    <div className="relative my-4 mx-auto w-[80%] h-[120px]">
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-4">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-center"
          >
            <div 
              className={`
                ${i === 2 || i === 5 || i === 9
                  ? 'h-2.5 w-2.5 animate-pulse-bright bg-orange-zkm dark:bg-orange-zkm' 
                  : i % 3 === 0 
                    ? 'h-2.5 w-2.5 animate-pulse-slow bg-orange-zkm/70 dark:bg-orange-zkm/50'
                    : 'h-2 w-2 animate-pulse-fade bg-orange-zkm/50 dark:bg-orange-zkm/30'}`}
              style={{
                borderRadius: '50%',
                animationDelay: `${i * 150}ms`
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function AmbasFAQs() {
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
        className="col-span-12 row-span-3 flex flex-col overflow-hidden rounded-base border-2 border-border bg-white p-6 shadow-light dark:border-darkBorder dark:bg-darkBg dark:shadow-dark lg:col-span-2"
      >
        <div className="flex items-center gap-4">
          <AnimatedStar />
          <h1 className="text-xl font-semibold uppercase tracking-wider">
            FAQs
          </h1>
        </div>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Find answers to common questions about the Ambassador Program and get the support you need.
        </p>
        <div className="flex flex-1 items-center -mx-6">
          <DotGrid />
        </div>
        <div className="flex flex-row items-end justify-between p-2">
          <div>
            <DialogTitle className="text-zinc-950 dark:text-zinc-50">
              Questions
            </DialogTitle>
            <DialogSubtitle className="text-zinc-700 dark:text-zinc-400">
              Get quick answers
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
                Frequently Asked Questions
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
                Get answers to common questions about the Ambassador Program:
              </p>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3">
                  <HelpCircle className="mt-1 h-5 w-5 text-orange-zkm" />
                  <div>
                    <h3 className="font-semibold">Common Questions</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Find answers about requirements, benefits, and responsibilities
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-1 h-5 w-5 text-orange-zkm" />
                  <div>
                    <h3 className="font-semibold">Additional Support</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Get help with specific questions not covered in FAQs
                    </p>
                  </div>
                </li>
              </ul>
              <div className="not-prose mt-6 flex flex-col gap-4 sm:flex-row md:mt-8">
                <Button asChild className="w-full text-left">
                  <a
                    href="https://www.zkm.io/faq"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HelpCircle className="mr-2 text-orange-zkm" />
                    View All FAQs
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

export default AmbasFAQs
