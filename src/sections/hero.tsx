
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
import Content from "@/components/content";



export default function Hero() {
  return (
    <section className="mb-14 px-5 dark:bg-darkBg inset-0 flex min-h-[80dvh] w-full flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <div className="mx-auto w-full max-w-full px-12 py-12  lg:py-[150px]">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          className="mx-auto grid grid-flow-dense grid-cols-12 gap-4"
        >
          <HeaderBlock />
          <AboutBlock2 />
          <SocialsBlock />
          <ProjectBlock />
          <AboutBlock />
          <LocationBlock />
          <EmailListBlock />
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

{/* <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    /> */}

const HeaderBlock = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <Card>
        <CardHeader>
          <CardTitle>Introduction to ZKM</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <p>Token</p>
              </div>
              <div className="flex flex-col space-y-1.5">
                <p>Proof Status</p>
                <Progress value={progress} className="w-[60%]" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Details</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </Block>
  );
};

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-red-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiYoutube />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-600 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiTiktok />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiTwitter />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-8 text-3xl leading-snug">
    <p>
      Let's get you started today!<br/>
      <span className="text-zinc-400">
        ZKM is fully open source and available for anyone to build upon leveraging the MIPS instruction set. 
      </span>
    </p>
  </Block>
);

const AboutBlock2 = () => (
  <Block className="col-span-12">
    <Content />
  </Block>
);

const Star4 = () => {
  return (
    <svg
      className="h-12 w-12"
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.1666 0.399963L37.1738 37.4635L51.3643 3.22402L37.1873 37.4691L63.4002 11.2663L37.1975 37.4793L71.4426 23.3023L37.2031 37.4928L74.2666 37.5L37.2031 37.5071L71.4426 51.6976L37.1975 37.5206L63.4002 63.7335L37.1873 37.5308L51.3643 71.7759L37.1738 37.5365L37.1666 74.6L37.1595 37.5365L22.969 71.7759L37.146 37.5308L10.933 63.7335L37.1358 37.5206L2.89071 51.6976L37.1301 37.5071L0.0666504 37.5L37.1301 37.4928L2.89071 23.3023L37.1358 37.4793L10.933 11.2663L37.146 37.4691L22.969 3.22402L37.1595 37.4635L37.1666 0.399963Z"
        className="stroke-text dark:stroke-darkText"
        strokeWidth="2.47333"
      />
    </svg>
  )
}

const ProjectBlock = () => (
  <Block className="col-span-2 md:col-span-6 text-3xl leading-snug">
    <div className=" flex flex-col gap-3 p-5">
      <Star4 />
      <h4 className="mt-2 text-xl font-heading"></h4>
       <p>text</p>
    </div>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Cyberspace</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Join our mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Join the list
      </button>
    </form>
  </Block>
);

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};
