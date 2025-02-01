'use client'

import useLocale from '@/hooks/use-locale'
import { cn } from '@/utils/cn'
import iconFileCode from '@iconify/icons-mdi/file-code'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import LocaleLink from '../utils/locale-link.client'
import LocaleSwitcher from './locale-switcher.client'

type Props = Readonly<{
  appName: string
}>

export default function Header({ appName }: Props) {
  const { t } = useLocale()

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
          'w-full rounded-2xl bg-[#0d6488cc] shadow-md backdrop-blur-lg transition-all duration-300 motion-reduce:transition-none contrast-more:bg-sky-600 contrast-more:dark:bg-sky-800',
          scrollY >= 112 &&
            '-m-4 !w-[calc(100%+2rem)] !rounded-none py-4 !shadow-2xl',
        )}
      >
        <div className="container relative mx-auto flex max-w-5xl items-center gap-4 px-4 text-white">
          <div className="flex-1">
            <LocaleLink
              className="m-0 inline-flex items-center py-2 text-2xl text-white max-md:text-xl max-sm:text-base"
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
            </LocaleLink>
          </div>

          <div>
            <LocaleLink className="flex items-center gap-1" href="/projects">
              <Icon className="h-5 w-5" icon={iconFileCode} ssr />
              {t('projects.title')}
            </LocaleLink>
          </div>

          <LocaleSwitcher />
        </div>
      </header>
    </div>
  )
}
