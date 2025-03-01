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
      <header data-full={scrollY >= 112 ? '' : undefined}>
        <div className="relative mx-auto flex max-w-5xl justify-between gap-4 px-4 text-white">
          <LocaleLink
            className="flex items-center gap-2 py-2 text-2xl text-white max-sm:text-base"
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

          <Suspense fallback={<div className="h-10 w-15" />}>
            <LocaleSwitcher locale={locale} />
          </Suspense>
        </div>
      </header>
    </div>
  )
}
