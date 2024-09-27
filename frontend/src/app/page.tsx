import Hero from '@/sections/hero'
import Footer from '@/components/footer'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ZKM Docs',
  description: 'The documentation for zkMIPS',
  icons: {
    icon: '/icon.ico',
  },
  openGraph: {
    images: [{ url: 'https://docs.zkm.io/assets/zkm-main.jpg' }],
  },
  twitter: {
    images: [{ url: 'https://docs.zkm.io/assets/zkm-main.jpg' }],
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee
        className="border-y-2 border-y-border bg-white py-3 font-base dark:border-darkBorder dark:border-y-darkBorder dark:bg-darkBg sm:py-5"
        direction="left"
      >
        {Array(16)
          .fill('xd')
          .map((x, index) => (
            <div className="flex items-center" key={index}>
              {/* <span className="mx-10 text-xl font-heading sm:text-2xl lg:text-4xl">
                  ZKM
                </span>
                <Star3 /> */}
              <Image
                alt="ZKM Logo"
                className="dark:invert"
                width={120}
                height={120}
                style={{ marginLeft: '50px' }}
                src="/assets/ZKMLogoHorizontal.png"
              />
            </div>
          ))}
      </Marquee>
      <Footer />
    </>
  )
}
