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
    <div className="sticky top-0 z-40 p-4 print:hidden">
      <HeaderClient>
        <div className="relative mx-auto flex max-w-5xl items-center gap-4 px-4 text-white">
          <div className="flex-1">
            <LocaleLink
              className="flex items-center gap-2 py-2 text-2xl text-white max-md:text-xl max-sm:text-base"
              href="/"
            >
              <Image
                alt="Logo"
                className="w-16 drop-shadow-md max-sm:w-8"
                height={56}
                loading="eager"
                priority
                src="/logo-white.svg"
                title={appName}
                width={56}
              />

              <p className="drop-shadow-md">{appName}</p>
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
