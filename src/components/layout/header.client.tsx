'use client'

import { cn } from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
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
    <div className="sticky top-0 z-50 p-4 print:opacity-0">
      <header
        className={cn(
          'w-full rounded-2xl bg-[#0e7599cc] shadow-md backdrop-blur-lg transition-all duration-300 motion-reduce:transition-none contrast-more:bg-sky-600 contrast-more:dark:bg-sky-800',
          scrollY >= 112 &&
            '-m-4 !w-[calc(100%+2rem)] !rounded-none py-4 !shadow-2xl',
        )}
      >
        <div className="container relative mx-auto flex max-w-5xl items-center px-4 text-white">
          <div className="flex-1">
            <Link
              className="m-0 inline-flex items-center py-2 pr-4 text-2xl text-white max-md:text-xl max-sm:text-base"
              href="/"
            >
              <Image
                alt="Logo"
                className="mr-2 w-16 p-1 drop-shadow-md transition-all max-sm:-ml-1 max-sm:mr-1 max-sm:w-10 max-sm:p-0"
                height={56}
                src="/logo-white.svg"
                width={56}
              />

              <span className="drop-shadow-md">{appName}</span>

              <slot />
            </Link>
          </div>

          <LocaleSwitcher />
        </div>
      </header>
    </div>
  )
}
