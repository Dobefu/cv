'use client'

import Image from 'next/image'
import { Suspense, useEffect, useState } from 'react'
import LocaleLink from '../utils/locale-link.client'
import LocaleSwitcher from './locale-switcher.client'

type Props = Readonly<{
  appName: string
}>

export default function Header({ appName }: Props) {
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
    <div className="sticky top-0 z-40 p-4 print:opacity-0">
      <header
        className="w-full rounded-2xl bg-[#0d6488cc] shadow-md backdrop-blur-lg transition-all duration-300 data-[full]:-m-4 data-[full]:w-[calc(100%+2rem)] data-[full]:rounded-none data-[full]:py-4 data-[full]:shadow-2xl motion-reduce:transition-none contrast-more:bg-sky-600 contrast-more:dark:bg-sky-800"
        data-full={scrollY >= 112 ? '' : undefined}
      >
        <div className="relative mx-auto flex max-w-5xl items-center gap-4 px-4 text-white">
          <div className="flex-1">
            <LocaleLink
              className="m-0 inline-flex items-center py-2 text-2xl text-white max-md:text-xl max-sm:text-base"
              href="/"
            >
              <Image
                alt="Logo"
                className="mr-2 w-16 p-1 drop-shadow-md transition-all max-sm:mr-1 max-sm:-ml-1 max-sm:w-10 max-sm:p-0"
                height={56}
                src="/logo-white.svg"
                width={56}
              />

              <span className="drop-shadow-md">{appName}</span>

              <slot />
            </LocaleLink>
          </div>

          <Suspense>
            <LocaleSwitcher />
          </Suspense>
        </div>
      </header>
    </div>
  )
}
