'use client'

import * as React from 'react'
import Image from 'next/image'
import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogContainer } from '@/components/ui/dialog'
import Block from '@/components/ui/block'
import { PlusIcon, Clock, CheckCircle2, CircleDot } from 'lucide-react'
import { CalendarIcon } from '@/components/ui/StarVariants'

export function AmbasCohorts() {
  return (
    <Block className="col-span-12 row-span-4 flex flex-col justify-between p-8 lg:col-span-6">
      <div className="flex-grow">
        <Image
          src="/assets/ZKMLogoHorizontal.png"
          width={172}
          height={72}
          alt="Company Logo"
          className="not-prose mb-6 dark:invert md:mb-8"
        />
        <div className="mb-6 flex flex-col">
          <div className="flex items-center gap-4">
            <CalendarIcon className="h-8 w-8" />
            <h1 className="text-xl font-semibold uppercase tracking-wider">
              2025 Cohort Dates
            </h1>
          </div>
          <p>
            Get ready for the 2025 ZKM Ambassador cohort! Here are the key dates
            to mark on your calendar for applications and program kickoff.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2">
          {[
            {
              quarter: 'Q1',
              dates: 'March 1 – 8',
              announcement: 'March 14',
              isOpen: true,
              description: 'First quarter cohort focuses on community building and initial ambassador program launch.',
            },
            {
              quarter: 'Q2',
              dates: 'March 1 – 8',
              announcement: 'March 14',
              isOpen: false,
              description: 'Second quarter expands our reach with focus on technical education and developer relations.',
            },
            {
              quarter: 'Q3',
              dates: 'March 1 – 8',
              announcement: 'March 14',
              isOpen: false,
              description: 'Third quarter emphasizes scaling our impact through regional initiatives and partnerships.',
            },
            {
              quarter: 'Q4',
              dates: 'March 1 – 8',
              announcement: 'March 14',
              isOpen: false,
              description: 'Final quarter of the year focuses on measuring impact and planning for the next year.',
            },
          ].map(({ quarter, dates, announcement, isOpen, description }, index) => (
            <Dialog 
              key={index}
              transition={{
                type: 'spring',
                bounce: 0.05,
                duration: 0.25,
              }}
            >
              <DialogTrigger className="w-full">
                <div className="relative flex h-full flex-col rounded-base border-2 border-border bg-white p-5 text-darkBg shadow-light hover:border-main dark:border-darkBorder dark:bg-darkBg dark:text-bg dark:shadow-dark dark:hover:border-main">
                  {isOpen && (
                    <span className="absolute right-2 top-2 rounded-base border-2 border-border bg-main px-2 py-0.5 text-sm text-text dark:border-darkBorder">
                      Applications Open
                    </span>
                  )}
                  <CalendarIcon className="h-8 w-8" />
                  <h2 className="text-lg font-heading">
                    {quarter} ({dates})
                  </h2>
                  <p className="text-sm font-base">{dates}</p>
                  <p className="text-sm font-base">Announcement {announcement}</p>
                </div>
              </DialogTrigger>

              <DialogContainer>
                <DialogContent 
                  className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden rounded-xl bg-white p-6 dark:bg-darkBg sm:w-[500px]"
                  style={{
                    borderRadius: '24px',
                  }}
                >
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-darkBg dark:text-white">
                      {quarter} 2025 Cohort Details
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                      {description}
                    </p>
                    <div className="mt-6">
                      <h3 className="font-semibold">Important Dates:</h3>
                      <p className="mt-2">Application Period: {dates}</p>
                      <p>Announcement Date: {announcement}</p>
                    </div>
                  </div>
                  <DialogClose className="text-zinc-950 dark:text-zinc-50" />
                </DialogContent>
              </DialogContainer>
            </Dialog>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col border-t-2 border-border pt-6 dark:border-darkBorder">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-zinc-950 dark:text-zinc-50">
              Current Progress
            </h3>
            <p className="text-zinc-700 dark:text-zinc-400">
              Q1 2025 Cohort Timeline
            </p>
          </div>
          <Clock className="h-5 w-5 text-main" />
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center">
            <CheckCircle2 className="h-5 w-5 text-orange-zkm" />
            <div className="ml-2">
              <p className="text-sm font-medium">Applications Open</p>
              <p className="text-xs text-zinc-500">March 1</p>
            </div>
          </div>

          <div className="relative flex items-center">
            <div className="absolute hidden h-0.5 w-16 bg-orange-zkm/20 dark:bg-orange-zkm/20 sm:block" style={{ transform: 'translateX(-120%)' }}></div>
            <CircleDot className="h-5 w-5 text-orange-zkm" />
            <div className="ml-2">
              <p className="text-sm font-medium">Review Period</p>
              <p className="text-xs text-zinc-500">March 8-14</p>
            </div>
          </div>

          <div className="relative flex items-center">
            <div className="absolute hidden h-0.5 w-16 bg-orange-zkm/20 dark:bg-orange-zkm/20 sm:block" style={{ transform: 'translateX(-120%)' }}></div>
            <CircleDot className="h-5 w-5 text-zinc-300 dark:text-zinc-700" />
            <div className="ml-2">
              <p className="text-sm font-medium">Onboarding</p>
              <p className="text-xs text-zinc-500">March 15</p>
            </div>
          </div>
        </div>
      </div>
    </Block>
  )
}

export default AmbasCohorts
