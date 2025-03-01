'use client'

import { Locale } from '@/types/locale'
import Image from 'next/image'
import React, { Suspense, useEffect, useState } from 'react'
import LocaleLink from '../utils/locale-link.client'
import LocaleSwitcher from './locale-switcher.client'

type Props = Readonly<{
  locale: Locale
}>

export default function HeaderClient({ locale }: Props) {
  const appName = process.env.NEXT_PUBLIC_APP_NAME
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="sticky top-0 z-40 p-4 print:hidden">
      <header
        className="w-full rounded-2xl bg-[#0d6488cc] shadow-md backdrop-blur-lg transition-all duration-300 data-full:-m-4 data-full:w-[calc(100%+2rem)] data-full:rounded-none data-full:py-4"
        data-full={scrollY >= 112 ? '' : undefined}
        style={{ viewTransitionName: 'h' }}
      >
        <div className="center relative mx-auto flex max-w-5xl gap-4 px-4 text-white">
          <div className="flex-1">
            <LocaleLink
              className="flex items-center gap-2 py-2 text-2xl text-white max-md:text-xl max-sm:text-base"
              href="/"
            >
              <Image
                alt="Logo"
                className="w-16 max-sm:w-8"
                height={56}
                loading="eager"
                priority
                src="/logo-white.svg"
                title={appName}
                width={56}
              />

              {appName}
            </LocaleLink>
          </div>

          <Suspense fallback={<div className="h-10 w-15" />}>
            <LocaleSwitcher locale={locale} />
          </Suspense>
        </div>
      </header>
    </div>
  )
}
