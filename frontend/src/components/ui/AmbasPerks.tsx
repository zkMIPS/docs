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
import AnimatedStar from '@/components/ui/AnimatedStar'
import { RewardIcon } from '@/components/ui/StarVariants'

export function AmbasPerks() {
  const perks = [
    {
      icon: <Gift className="h-6 w-6 text-orange-zkm" />,
      title: "Exclusive Swag",
      description: "Receive exclusive ZKM merchandise including hoodies, t-shirts, and limited edition items.",
      details: "Get special access to ZKM-branded merchandise before anyone else. Our ambassador-exclusive swag helps you represent ZKM at events and in your community."
    },
    {
      icon: <Trophy className="h-6 w-6 text-orange-zkm" />,
      title: "USDC Rewards",
      description: "Earn monthly USDC rewards based on your contributions and engagement.",
      details: "Performance-based rewards distributed monthly, with opportunities to earn additional bonuses for exceptional contributions."
    },
    {
      icon: <Star className="h-6 w-6 text-orange-zkm" />,
      title: "Early Access",
      description: "Be the first to test new features and provide feedback to the core team.",
      details: "Get insider access to upcoming features, products, and initiatives. Your feedback helps shape ZKM's future."
    },
    {
      icon: <Crown className="h-6 w-6 text-orange-zkm" />,
      title: "Recognition",
      description: "Gain visibility through our various recognition programs and channels.",
      details: "Monthly spotlight features, special badges, and opportunities to be featured in ZKM's official communications."
    },
    {
      icon: <Rocket className="h-6 w-6 text-orange-zkm" />,
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
        <div className="flex flex-col justify-between h-full p-6">
          <div className="mb-4 flex items-center gap-4">
            <RewardIcon className="h-8 w-8 text-orange-zkm" />
            <h1 className="text-xl font-semibold uppercase tracking-wider">
              Perks
            </h1>
          </div>
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
              <RewardIcon className="h-8 w-8 text-orange-zkm" />
              <h1 className="text-xl font-semibold uppercase tracking-wider">
                Ambassador Perks & Benefits
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
        return <Crown className="h-5 w-5 text-orange-zkm" />
      case 'USDC Rewards':
        return <Trophy className="h-5 w-5 text-orange-zkm" />
      case 'Opportunities':
        return <Rocket className="h-5 w-5 text-orange-zkm" />
      case 'Exclusive Access':
        return <Star className="h-5 w-5 text-orange-zkm" />
      case 'Swag':
        return <Gift className="h-5 w-5 text-orange-zkm" />
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
        <div className="flex shrink-0 items-center justify-center rounded-lg border border-gray-100 bg-gray-50/50 p-1.5 dark:border-gray-800 dark:bg-gray-800/50">
          {getIcon(name)}
        </div>
        <div className="min-w-0 flex-1">
          <figcaption className="text-sm font-semibold leading-tight text-darkBg dark:text-white">
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

export default AmbasPerks
