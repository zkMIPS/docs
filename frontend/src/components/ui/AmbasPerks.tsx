'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Split, PlusIcon, Gift, Trophy, Star, Crown, Rocket } from 'lucide-react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import Marquee from '@/components/ui/marquee'
import Block from '@/components/ui/block'

export function AmbasPerks() {
  const perks = [
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Exclusive Swag",
      description: "Receive exclusive ZKM merchandise including hoodies, t-shirts, and limited edition items.",
      details: "Get special access to ZKM-branded merchandise before anyone else. Our ambassador-exclusive swag helps you represent ZKM at events and in your community."
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "USDC Rewards",
      description: "Earn monthly USDC rewards based on your contributions and engagement.",
      details: "Performance-based rewards distributed monthly, with opportunities to earn additional bonuses for exceptional contributions."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Early Access",
      description: "Be the first to test new features and provide feedback to the core team.",
      details: "Get insider access to upcoming features, products, and initiatives. Your feedback helps shape ZKM's future."
    },
    {
      icon: <Crown className="h-6 w-6" />,
      title: "Recognition",
      description: "Gain visibility through our various recognition programs and channels.",
      details: "Monthly spotlight features, special badges, and opportunities to be featured in ZKM's official communications."
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Growth Opportunities",
      description: "Access exclusive learning resources and networking opportunities.",
      details: "Participate in ambassador-only workshops, training sessions, and networking events with industry leaders."
    }
  ];

  const reviews = [
    {
      name: 'Recognition',
      description: 'Monthly spotlights & badges',
    },
    {
      name: 'USDC Rewards',
      description: 'Monthly performance rewards',
    },
    {
      name: 'Opportunities',
      description: 'Content & event hosting',
    },
    {
      name: 'Exclusive Access',
      description: 'Early features & events',
    },
    {
      name: 'Swag',
      description: 'ZKM branded merch',
    },
  ];

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

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
        className="col-span-12 row-span-2 flex flex-col justify-between overflow-hidden rounded-base border-2 border-border bg-white p-6 shadow-light dark:border-darkBorder dark:bg-darkBg dark:shadow-dark lg:col-span-4"
      >
        <Header />
        <p className="text-muted-foreground mb-6 leading-relaxed text-gray-600">
          Our reward system is based on performance. Rewards given as swag,
          exclusive access and opportunities, and USDC rewards. Rewards are
          given out at the end of each monthly challenge.
        </p>
        
        <div className="relative flex h-40 w-full flex-col items-center justify-center overflow-hidden mb-6">
          <Marquee pauseOnHover className="[--duration:30s] mb-4">
            {firstRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
        </div>

        <div className="flex flex-grow flex-row items-end justify-between mt-auto">
          <div>
            <DialogTitle className="text-zinc-950 dark:text-zinc-50">
              Rewards
            </DialogTitle>
            <DialogSubtitle className="text-zinc-700 dark:text-zinc-400">
              View ambassador benefits
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
                Ambassador Perks
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
              <div className="space-y-6">
                {perks.map((perk, index) => (
                  <div key={index} className="flex items-start gap-4 border-b border-gray-200 pb-6 last:border-0 dark:border-gray-700">
                    <div className="rounded-lg border border-gray-200 p-2 dark:border-gray-700">
                      {perk.icon}
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-darkBg dark:text-white">
                        {perk.title}
                      </h3>
                      <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                        {perk.description}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {perk.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild className="w-full">
                  <a
                    href="https://docs.zkm.io/introduction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Split className="mr-2" />
                    Learn More About Benefits
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

function ReviewCard({
  name,
  description,
}: {
  name: string
  description: string
}) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Recognition':
        return <Crown className="h-5 w-5 text-yellow-500" />
      case 'USDC Rewards':
        return <Trophy className="h-5 w-5 text-green-500" />
      case 'Opportunities':
        return <Rocket className="h-5 w-5 text-purple-500" />
      case 'Exclusive Access':
        return <Star className="h-5 w-5 text-blue-500" />
      case 'Swag':
        return <Gift className="h-5 w-5 text-pink-500" />
      default:
        return null
    }
  }

  return (
    <figure
      className={cn(
        'relative mx-2 flex h-[70px] w-[200px] cursor-pointer items-center rounded-xl border p-3',
        'border-gray-200 bg-white hover:bg-gray-50 hover:shadow-sm',
        'dark:border-darkBorder dark:bg-darkBg dark:hover:bg-darkBorder',
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex shrink-0 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 p-1.5 dark:border-gray-800 dark:bg-gray-800">
          {getIcon(name)}
        </div>
        <div className="min-w-0 flex-1">
          <figcaption className="text-sm font-semibold leading-tight text-gray-900 dark:text-gray-100">
            {name}
          </figcaption>
          <p className="text-xs leading-snug text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </figure>
  )
}

function Header() {
  return (
    <div className="mb-4 flex items-center gap-4">
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
      <h1 className="text-xl font-semibold uppercase tracking-wider">Perks</h1>
    </div>
  )
}

export default AmbasPerks
