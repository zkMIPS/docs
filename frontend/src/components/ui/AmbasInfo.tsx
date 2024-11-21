'use client'

import { PlusIcon } from 'lucide-react'
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
import { Card, CardTitle } from '@/components/ui/card'
import AnimatedStar from '@/components/ui/AnimatedStar'

export function AmbasInfo() {
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
            Program Information
          </h1>
        </div>
        <p className="text-muted-foreground mb-6 text-gray-600">
          Key details about the ZKM Ambassador Program structure, timeline, and evaluation process.
        </p>
        <div className="flex flex-grow flex-row items-end justify-between">
          <div>
            <DialogTitle className="text-zinc-950 dark:text-zinc-50">
              Details
            </DialogTitle>
            <DialogSubtitle className="text-zinc-700 dark:text-zinc-400">
              Learn about program structure
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
                Program Information
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
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                <Card className="bg-inherit p-6 text-darkBg dark:text-bg">
                  <CardTitle>
                    Our comprehensive program, running through 2025, will have
                    participants organized into four distinct cohorts for effective
                    evaluation and engagement.
                  </CardTitle>
                </Card>
                <Card className="bg-inherit p-6 text-darkBg dark:text-bg">
                  <CardTitle>
                    At the end of every quarter, we'll be evaluating the submissions
                    from the last three months and reaching out to selected parties.
                  </CardTitle>
                </Card>
                <Card className="bg-inherit p-6 text-darkBg dark:text-bg">
                  <CardTitle>
                    Once accepted, Ambassadors will remain with the program as new
                    Ambassadors are onboarded through the cohorts.
                  </CardTitle>
                </Card>
                <Card className="bg-inherit p-6 text-darkBg dark:text-bg">
                  <CardTitle>
                    The review process takes one week, followed by a week of exciting
                    onboarding to kick off your ambassador program!
                  </CardTitle>
                </Card>
              </div>
            </DialogDescription>
          </div>
          <DialogClose className="text-zinc-50" />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  )
}

export default AmbasInfo 