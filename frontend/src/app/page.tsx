'use client'

import Hero from '@/sections/hero'
import Footer from '@/components/footer'
import Marquee from 'react-fast-marquee'

function Star3() {
  return (
    <svg
      className="h-12 w-12"
      viewBox="0 0 434 434"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M433.6 217.001L430.6 216.401C382.2 206.801 321.9 201.101 259.5 199.401C303.3 153.001 342.6 105.401 370.1 63.8008C328.5 91.3008 280.9 130.601 234.5 174.401C232.7 110.601 226.8 49.2008 216.9 0.300781C207 49.2008 201.1 110.601 199.3 174.401C152.9 130.601 105.3 91.3008 63.7002 63.8008C91.2002 105.401 130.5 153.001 174.3 199.401C110.5 201.201 49.1002 207.101 0.200195 217.001C49.1002 226.901 110.5 232.801 174.3 234.601C131.4 280.001 92.8002 326.601 65.4002 367.601L63.7002 370.201L66.3002 368.501C107.3 341.001 153.9 302.401 199.3 259.601C201.1 322.001 206.7 382.201 216.3 430.701L216.9 433.701L217.5 430.701C227.1 382.301 232.8 322.001 234.5 259.601C279.9 302.501 326.5 341.101 367.5 368.501L370.1 370.201L368.4 367.601C340.9 326.601 302.3 280.001 259.5 234.601C321.9 232.801 382.1 227.201 430.6 217.601L433.6 217.001Z"
        className="fill-text dark:fill-darkText"
      />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <div>
        <Marquee
          className="border-y-2 border-y-border bg-white py-3 font-base dark:border-darkBorder dark:border-y-darkBorder dark:bg-darkBg sm:py-5"
          direction="left"
        >
          {Array(10)
            .fill('xd')
            .map((x, index) => (
              <div className="flex items-center" key={index}>
                <span className="mx-10 text-xl font-heading sm:text-2xl lg:text-4xl">
                  ZKM
                </span>
                <Star3 />
              </div>
            ))}
        </Marquee>
      </div>
      <Footer />
    </>
  )
}
