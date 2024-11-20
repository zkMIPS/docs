'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Split, PlusIcon } from 'lucide-react'
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

import Block from '@/components/ui/block'

export function AmbasFAQs() {
  const faqs = [
    {
      question: "What is the purpose of the ZKM Ambassador Program?",
      answer: "The program aims to engage passionate individuals who can promote ZKM's vision and technology, foster community growth, and enhance brand awareness within the ZK ecosystem."
    },
    {
      question: "How can I apply to become an ambassador?",
      answer: "Interested candidates can submit an application outlining their relevant experience and motivations. Details on the application process can be found in the Application Process section."
    },
    {
      question: "What are the main responsibilities of ambassadors?",
      answer: "Ambassadors are expected to promote ZKM, engage with the community, participate in events, and create YouTube content and in-depth articles that expand on our existing materials."
    },
    {
      question: "What support will I receive as an ambassador?",
      answer: "As an ambassador, you will receive access to our Resource Library, training from the team, and a private communication channel on Discord for direct support and collaboration. You'll also have marketing assets and opportunities to network with other ambassadors."
    },
    {
      question: "How will my contributions be recognized?",
      answer: "We recognize outstanding contributions through a performance-based reward system, which includes swag, exclusive access, USDC rewards, and opportunities to showcase your work. Rewards are distributed at the end of each monthly challenge."
    },
    {
      question: "Can I collaborate with other ambassadors on projects?",
      answer: "Absolutely! We encourage collaboration and teamwork on initiatives to amplify our outreach and community engagement."
    }
  ];

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
        className="col-span-12 row-span-3 flex flex-col justify-between overflow-hidden rounded-base border-2 border-border bg-white p-6 shadow-light dark:border-darkBorder dark:bg-darkBg dark:shadow-dark lg:col-span-2"
      >
        <div className="flex items-center gap-4 mb-4">
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
        <p className="text-muted-foreground leading-relaxed text-gray-600">
          Here are key details for ZKM ambassadors, covering applications,
          responsibilities, support, and recognition to help you succeed in your
          role. For further assistance, reach out in our Discord.
        </p>
        <div className="flex flex-grow flex-row items-end justify-between p-2">
          <div>
            <DialogTitle className="text-zinc-950 dark:text-zinc-50">
              Info
            </DialogTitle>
            <DialogSubtitle className="text-zinc-700 dark:text-zinc-400">
              Find answers
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
                Frequently Asked Questions
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
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0 dark:border-gray-700">
                    <h3 className="mb-2 text-lg font-semibold text-darkBg dark:text-white">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </DialogDescription>
          </div>
          <DialogClose className="text-zinc-50" />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  )
}

export default AmbasFAQs
