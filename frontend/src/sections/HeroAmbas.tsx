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
import AmbasSettlement from '@/components/ui/AmbasSettlement'
import AmbasCommunity from '@/components/ui/AmbasCommunity'
import AmbasEducation from '@/components/ui/AmbasEducation'
import AmbasResource from '@/components/ui/AmbasResource'
import AmbasInfo from '@/components/ui/AmbasInfo'

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
          <AmbasSettlement />
          <AmbasCommunity />
          <AmbasEducation />
          <AmbasResource />
          <AmbasInfo />
        </motion.div>
      </div>
    </section>
  )
}
