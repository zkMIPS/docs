'use client'

// React and Next.js imports
import Link from 'next/link'
import Image from 'next/image'

// Third-party library imports
import { Camera } from 'lucide-react'
import {
  Split,
  Info,
  Bookmark,
} from 'lucide-react'
import { motion } from 'framer-motion'

// Local component imports
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Block from '@/components/ui/block'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Ambas1 from '@/components/ui/Ambas1'
import AmbasPurpose from '@/components/ui/AmbasPurpose'
import AmbasLooking from '@/components/ui/AmbasLooking'
import AmbasAlumni from '@/components/ui/AmbasAlumni'
import AmbasFAQs from '@/components/ui/AmbasFAQs'
import AmbasApplication from '@/components/ui/AmbasApplication'
import AmbasPerks from '@/components/ui/AmbasPerks'
import AmbasCohorts from '@/components/ui/AmbasCohort'

export default function HeroAmbas() {
  return (
    <section className="inset-0 flex min-h-[80dvh] w-full flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] px-5 dark:bg-darkBg">
      <div className="mx-auto w-full max-w-full px-12 py-12  lg:py-[150px]">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          className="mx-auto grid grid-flow-dense grid-cols-12 gap-4"
        >
          <Ambas1 />
          <AmbasPurpose />
          <AmbasLooking />
          <AmbasAlumni />
          <AmbasCohorts />
          <AmbasPerks />
          <AmbasFAQs />
          <AmbasApplication />
          <AmbasResource />
          <AmbasInfo />
        </motion.div>
      </div>
    </section>
  )
}









function AmbasResource() {
  return (
    <Block className="col-span-12 row-span-2 flex h-full flex-col justify-between p-6 lg:col-span-6">
      <div className="mb-6 flex items-center gap-4">
        <svg
          className="h-16 w-16"
          viewBox="0 0 434 434"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M433.6 217.001L430.6 216.401C382.2 206.801 321.9 201.101 259.5 199.401C303.3 153.001 342.6 105.401 370.1 63.8008C328.5 91.3008 280.9 130.601 234.5 174.401C232.7 110.601 226.8 49.2008 216.9 0.300781C207 49.2008 201.1 110.601 199.3 174.401C152.9 130.601 105.3 91.3008 63.7002 63.8008C91.2002 105.401 130.5 153.001 174.3 199.401C110.5 201.201 49.1002 207.101 0.200195 217.001C49.1002 226.901 110.5 232.801 174.3 234.601C131.4 280.001 92.8002 326.601 65.4002 367.601L63.7002 370.201L66.3002 368.501C107.3 341.001 153.9 302.401 199.3 259.601C201.1 322.001 206.7 382.201 216.3 430.701L216.9 433.701L217.5 430.701C227.1 382.301 232.8 322.001 234.5 259.601C279.9 302.501 326.5 341.101 367.5 368.501L370.1 370.201L368.4 367.601C340.9 326.601 302.3 280.001 259.5 234.601C321.9 232.801 382.1 227.201 430.6 217.601L433.6 217.001Z"
            className="fill-text dark:fill-darkText"
          />
        </svg>
        <h1 className="text-xl font-semibold uppercase tracking-wider">
          Resource Library
        </h1>
      </div>
      <div className="text-muted-foreground mb-6 text-gray-500">
        <p>
          The ZKM Resource Library serves as a centralized repository of
          materials designed to support ambassadors in their outreach efforts.
          This collection includes:
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Button data */}
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
            url: 'https://www.zkm.io/forum', // Add your actual link
          },
        ].map((button, index) => (
          <div
            key={index}
            className={
              button.text === 'Community Forum' ? 'hidden lg:block' : ''
            }
          >
            <Button asChild className="w-full">
              <a
                href={button.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-start rounded-md border p-4 text-left transition hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Bookmark className="mr-2" />
                <span className="flex-1">{button.text}</span>
              </a>
            </Button>
          </div>
        ))}
      </div>
    </Block>
  )
}

function AmbasInfo() {
  return (
    <Block className="col-span-12 row-span-2 flex h-full flex-col justify-between p-6 lg:col-span-6">
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
    </Block>
  )
}
