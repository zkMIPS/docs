'use client'

// React and Next.js imports
import Link from 'next/link'
import Image from 'next/image'

// Third-party library imports
import { Camera } from 'lucide-react'
import {
  PersonStanding,
  Telescope,
  Eye,
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
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

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
          <Ambas2 />
          <Ambas3 />
          <Ambas4 />
          <Ambascohort />
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






function Ambas1() {
  return (
    <Block className="col-span-12 row-span-2 flex flex-col justify-between p-6 lg:col-span-4">
      <div className="mb-6">
        <Image
          src="/assets/ZKMLogoHorizontal.png"
          width={172}
          height={72}
          alt="Company Logo"
          className="not-prose mb-6 dark:invert md:mb-8"
        />
      </div>
      <p className="text-muted-foreground leading-relaxed text-gray-600">
        Shape ZKM&apos;s tomorrow: A unique opportunity for creative visionaries
        and community champions to gain distinguished status and make a lasting
        impact.
      </p>
      <div className="not-prose mt-6 flex flex-col gap-4 sm:flex-row md:mt-8">
        <Button asChild className="w-full py-3 text-left">
          <a
            href="https://www.zkm.io/team"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PersonStanding className="mr-2" />
            Meet the Team
          </a>
        </Button>
        <Button asChild className="w-full py-3 text-left">
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
    </Block>
  )
}

function Ambas2() {
  return (
    <Block className="col-span-12 row-span-2 p-6 lg:col-span-4">
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
          The purpose of the program
        </h1>
      </div>
      <p className="text-muted-foreground text-gray-500">
        ZKM&apos;s Ambassadors play an essential role in educating the wider
        community and collaborating with the core team on translations,
        community management, running meetups and local conferences, as well as
        a variety of different activities.
      </p>
      <div className="not-prose mt-6 flex gap-2 md:mt-12">
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
    </Block>
  )
}


function Ambas3() {
  return (
    <Block className="col-span-12 row-span-2 flex flex-col justify-between p-6 lg:col-span-4">
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
          Who are we looking for?
        </h1>
      </div>
      <p className="text-muted-foreground text-gray-500">
        Passionate advocates with blockchain knowledge, active in web3
        communities, and eager to promote ZKM’s mission. Ideal ambassadors are
        proactive, community-focused, and aligned with ZKM’s vision.
      </p>
      <div className="mt-6 flex flex-col gap-2 md:mt-12">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button asChild className="w-full">
              <a>
                <Split className="mr-2" />
                Role Breakdown
              </a>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Content Creator</AlertDialogTitle>
              <AlertDialogDescription>
                Producing blogs, videos, and educational materials about ZKM.
              </AlertDialogDescription>
              <AlertDialogTitle>Community Builder</AlertDialogTitle>
              <AlertDialogDescription>
                Leading discussions, managing online forums, and hosting events.
              </AlertDialogDescription>
              <AlertDialogTitle>Technical Advocate</AlertDialogTitle>
              <AlertDialogDescription>
                Engaging with developers, answering technical questions, and
                providing feedback on documentation.
              </AlertDialogDescription>
              <AlertDialogTitle>Event Organizer</AlertDialogTitle>
              <AlertDialogDescription>
                Running local meetups and hackathons to foster in-person
                engagement.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </Block>
  )
}


function Ambas4() {
  return (
    <Block className="col-span-12 row-span-1 lg:col-span-2">
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
          Alumni Program
        </h1>
      </div>
      <p className="text-muted-foreground text-gray-500">
        Stay connected with ZKM beyond the ambassador program. Alumni gain
        access to exclusive events, priority for new initiatives, and
        recognition for their past contributions.
      </p>
    </Block>
  )
}


function Ambascohort() {
  return (
    <Block className="col-span-12 row-span-4 flex flex-col justify-between p-8 lg:col-span-6">
      <Image
        src="/assets/ZKMLogoHorizontal.png"
        width={172}
        height={72}
        alt="Company Logo"
        className="not-prose mb-6 dark:invert md:mb-8"
      />
      <div className="mb-6 flex flex-col">
        <h2 className="text-xl font-heading text-darkBg dark:text-white">
          2025 Cohort Dates
        </h2>
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
          },
          {
            quarter: 'Q2',
            dates: 'March 1 – 8',
            announcement: 'March 14',
            isOpen: false,
          },
          {
            quarter: 'Q3',
            dates: 'March 1 – 8',
            announcement: 'March 14',
            isOpen: false,
          },
          {
            quarter: 'Q4',
            dates: 'March 1 – 8',
            announcement: 'March 14',
            isOpen: false,
          },
        ].map(({ quarter, dates, announcement, isOpen }, index) => (
          <div key={index} className="flex flex-col justify-between p-4">
            <Card className="relative mb-4 flex h-full flex-col rounded-base border-2 p-5 text-darkBg shadow-light dark:border-darkBorder dark:bg-darkBg dark:text-bg dark:shadow-dark">
              {isOpen && (
                <span className="absolute right-2 top-2 rounded-base border-2 border-border bg-main px-2 py-0.5 text-sm text-text dark:border-darkBorder">
                  Applications Open
                </span>
              )}
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mb-3 inline-block h-12 w-12 text-[#ffa800]"
                viewBox="0 0 24 24"
              >
                {index === 0 && (
                  <>
                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                  </>
                )}
                {index === 1 && (
                  <>
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                  </>
                )}
                {index === 2 && (
                  <>
                    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                  </>
                )}
                {index === 3 && (
                  <>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </>
                )}
              </svg>
              <h2 className="text-lg font-heading">
                {quarter} ({dates})
              </h2>
              <p className="text-sm font-base">{dates}</p>
              <p className="text-sm font-base">Announcement {announcement}</p>
            </Card>
          </div>
        ))}
      </div>
    </Block>
  )
}







function AmbasPerks() {
  return (
    <Block className="col-span-12 row-span-2 flex flex-col justify-between p-6 lg:col-span-4">
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
          Perks
        </h1>
      </div>
      <p className="text-muted-foreground mb-4 text-gray-500 md:mb-4">
        Our reward system is based on performance. Rewards given as swag,
        exclusive access and opportunities, and USDC rewards. Rewards are given
        out at the end of each monthly challenge.
      </p>
      <div className="flex flex-grow items-center justify-center">
        <Card className="relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased dark:bg-darkBg">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </Card>
      </div>
    </Block>
  )
}


function AmbasFAQs() {
  return (
    <Block className="col-span-12 row-span-3 lg:col-span-2">
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
          FAQs
        </h1>
      </div>
      <p className="text-muted-foreground text-gray-500">
        Here are key details for ZKM ambassadors, covering applications,
        responsibilities, support, and recognition to help you succeed in your
        role. For further assistance, reach out in our Discord.
      </p>
      <div className="not-prose mt-6 flex gap-2 md:mt-12">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button asChild className="w-full">
              <a>
                <Info className="mr-2" />
                More Info
              </a>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Q1: What is the purpose of the ZKM Ambassador Program?
              </AlertDialogTitle>
              <AlertDialogDescription>
                A: The program aims to engage passionate individuals who can
                promote ZKM&apos;s vision and technology, foster community
                growth, and enhance brand awareness within the ZK ecosystem.
              </AlertDialogDescription>
              <AlertDialogTitle>
                Q2: How can I apply to become an ambassador?
              </AlertDialogTitle>
              <AlertDialogDescription>
                A: Interested candidates can submit an application outlining
                their relevant experience and motivations. Details on the
                application process can be found in the Application Process
                section.
              </AlertDialogDescription>
              <AlertDialogTitle>
                Q3: What are the main responsibilities of ambassadors?
              </AlertDialogTitle>
              <AlertDialogDescription>
                A: Ambassadors are expected to promote ZKM, engage with the
                community, participate in events, and create YouTube content and
                in-depth articles that expand on our existing materials.
              </AlertDialogDescription>
              <AlertDialogTitle>
                Q4: What support will I receive as an ambassador?
              </AlertDialogTitle>
              <AlertDialogDescription>
                A: As an ambassador, you will receive access to our Resource
                Library, training from the team, and a private communication
                channel on Discord for direct support and collaboration.
                You&apos;ll also have marketing assets and opportunities to
                network with other ambassadors.
              </AlertDialogDescription>
              <AlertDialogTitle>
                Q5: How will my contributions be recognized?
              </AlertDialogTitle>
              <AlertDialogDescription>
                A: We recognize outstanding contributions through a
                performance-based reward system, which includes swag, exclusive
                access, USDC rewards, and opportunities to showcase your work.
                Rewards are distributed at the end of each monthly challenge,
                along with features in newsletters and recognition programs.
              </AlertDialogDescription>
              <AlertDialogTitle>
                Q6: Can I collaborate with other ambassadors on projects?
              </AlertDialogTitle>
              <AlertDialogDescription>
                A: Absolutely! We encourage collaboration and teamwork on
                initiatives to amplify our outreach and community engagement.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </Block>
  )
}



function AmbasApplication() {
  return (
    <Block className="col-span-12 row-span-2 flex flex-col justify-between p-6 lg:col-span-4">
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
          Application Process
        </h1>
      </div>
      <p className="text-muted-foreground leading-relaxed text-gray-600">
        Interested candidates should apply with their relevant experience and
        motivations. Selected ambassadors will complete a brief onboarding to
        understand ZKM&apos;s vision and goals.
      </p>
      <div className="not-prose mt-6 flex gap-2 md:mt-8">
        <Button asChild className="w-full py-3 text-center">
          <Link href="/">
            <Camera className="mr-2" />
            Apply Here
          </Link>
        </Button>
      </div>
    </Block>
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


const testimonials = [
  {
    quote: 'Swag',
    name: 'Exclusive ZKM Merchandise',
    title: 'Show your ZKM pride with branded hoodies, event swag, and more.',
  },
  {
    quote: 'Exclusive Access',
    name: 'VIP Perks & Early Access',
    title:
      'Get insider access to new features, private events, and Q&As with ZKM’s core team.',
  },
  {
    quote: 'Opportunities',
    name: 'Ambassador-Only Roles',
    title:
      'Participate in unique opportunities like content creation and co-hosting events.',
  },
  {
    quote: 'USDC Rewards',
    name: 'Monthly USDC Incentives',
    title:
      'Earn USDC rewards based on your performance in community challenges.',
  },
  {
    quote: 'Recognition',
    name: 'Top Ambassador Recognition',
    title:
      'Get recognized at the end of each month with special rewards and shout-outs.',
  },
]