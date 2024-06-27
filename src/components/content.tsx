'use client';

import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { SiGithub, SiTiktok, SiTwitter, SiYoutube  } from "react-icons/si";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { useState, useEffect } from 'react';



export default function Content() {
  return (
    <section className="dark:bg-darkBg inset-0 flex h-full w-full flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <div className="mx-auto w-full max-w-full px-12 py-12  lg:py-[150px]">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          className="mx-auto grid grid-flow-dense grid-cols-12 gap-4"
        >
        <div className="col-span-12">
            <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
                Lorem ipsum dolor sit amet consectetur adipisicing
            </h2>
        </div>
          <SocialsBlock />
        </motion.div>
      </div>
    </section>
  )
}



type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
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
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "border-border dark:border-darkBorder dark:bg-darkBg shadow-light dark:shadow-dark rounded-base border-2 bg-white p-6",
        className
      )}
      {...rest}
    />
  );
};


const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-12 bg-red-500 md:col-span-3"
    >
      <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-12 bg-green-600 md:col-span-3"
    >
      <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-12 bg-zinc-50 md:col-span-3"
    >
      <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span- bg-blue-500 md:col-span-3"
    >
      <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
    </Block>
  </>
);
