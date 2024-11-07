'use client'

import { MotionProps, motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { FiArrowRight, FiMail, FiMapPin } from 'react-icons/fi'
import { FaPlus } from 'react-icons/fa'
import { SiGithub, SiTiktok, SiYoutube } from 'react-icons/si'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { useState, useEffect } from 'react'
import GenerateProofBlock from '@/components/generate-proof'

export default function Content() {
  return (
    <section className="inset-0 flex h-full w-full flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] dark:bg-darkBg">
      <div className="mx-auto w-full max-w-full px-12 py-12  lg:py-[20px]">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          className="mx-auto grid grid-flow-dense grid-cols-12 gap-4"
        >
          <div className="col-span-6">
            <GenerateProofBlock />
          </div>
          <SocialsBlock />
        </motion.div>
      </div>
    </section>
  )
}

type BlockProps = {
  className?: string
} & MotionProps

function Block({ className, ...rest }: BlockProps) {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: 'spring',
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        'rounded-base border-2 border-border bg-white p-6 shadow-light dark:border-darkBorder dark:bg-darkBg dark:shadow-dark',
        className,
      )}
      {...rest}
    />
  )
}

function SocialsBlock() {
  return <>
    <Block
      whileHover={{
        rotate: '2.5deg',
        scale: 1.1,
      }}
      className="col-span-12 bg-main dark:bg-main md:col-span-3"
    >
      <img
        className="mb-6 h-40 w-full rounded object-cover object-center"
        src="https://dummyimage.com/720x400"
        alt="content"
      />
      <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
        Under Construction
      </h2>
    </Block>
    <Block
      whileHover={{
        rotate: '-2.5deg',
        scale: 1.1,
      }}
      className="col-span-12 bg-main dark:bg-main md:col-span-3"
    >
      <img
        className="mb-6 h-40 w-full rounded object-cover object-center"
        src="https://dummyimage.com/720x400"
        alt="content"
      />
      <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
        Under Construction
      </h2>
    </Block>
    <Block
      whileHover={{
        rotate: '-2.5deg',
        scale: 1.1,
      }}
      className="col-span-12 bg-darkText bg-zinc-50 dark:bg-darkText md:col-span-3"
    >
      <img
        className="mb-6 h-40 w-full rounded object-cover object-center"
        src="https://dummyimage.com/720x400"
        alt="content"
      />
      <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
        Under Construction
      </h2>
    </Block>
    <Block
      whileHover={{
        rotate: '2.5deg',
        scale: 1.1,
      }}
      className="col-span- bg-darkText dark:bg-darkText md:col-span-3"
    >
      <img
        className="mb-6 h-40 w-full rounded object-cover object-center"
        src="https://dummyimage.com/720x400"
        alt="content"
      />
      <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
        Under Construction
      </h2>
    </Block>
    <Block
      whileHover={{
        rotate: '2.5deg',
        scale: 1.1,
      }}
      className="col-span- bg-darkText dark:bg-darkText md:col-span-3"
    >
      <img
        className="mb-6 h-40 w-full rounded object-cover object-center"
        src="https://dummyimage.com/720x400"
        alt="content"
      />
      <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
        Under Construction
      </h2>
    </Block>
    <Block
      whileHover={{
        rotate: '2.5deg',
        scale: 1.1,
      }}
      className="col-span- bg-darkText dark:bg-darkText md:col-span-3"
    >
      <img
        className="mb-6 h-40 w-full rounded object-cover object-center"
        src="https://dummyimage.com/720x400"
        alt="content"
      />
      <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
        Under Construction
      </h2>
    </Block>
  </>
}
