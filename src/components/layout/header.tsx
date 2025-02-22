import { Locale } from '@/types/locale'
import Image from 'next/image'
import { Suspense } from 'react'
import LocaleLink from '../utils/locale-link.client'
import HeaderClient from './header.client'
import LocaleSwitcher from './locale-switcher.client'

type Props = Readonly<{
  appName: string
  locale: Locale
}>

export default function Header({ appName, locale }: Props) {
  return (
    <div className="sticky top-0 z-40 p-4 print:opacity-0">
      <HeaderClient>
        <div className="relative mx-auto flex max-w-5xl items-center gap-4 px-4 text-white">
          <div className="flex-1">
            <LocaleLink
              className="flex items-center py-2 text-2xl text-white max-md:text-xl max-sm:text-base"
              href="/"
            >
              <Image
                alt="Logo"
                className="mr-2 w-16 drop-shadow-md transition-all max-sm:mr-1 max-sm:-ml-1 max-sm:w-10 max-sm:p-0"
                height={56}
                loading="eager"
                priority
                src="/logo-white.svg"
                title={appName}
                width={56}
              />

              <span className="drop-shadow-md">{appName}</span>
            </LocaleLink>
          </div>

          <Suspense fallback={<div className="h-10 w-15" />}>
            <LocaleSwitcher locale={locale} />
          </Suspense>
        </div>
      </HeaderClient>
    </div>
  )
}
