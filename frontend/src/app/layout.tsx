import '../../styles/globals.css'
import React from 'react'
import { DM_Sans } from 'next/font/google'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { ThemeProvider } from '@/components/theme-provider'

const dmSans = DM_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  )
}
