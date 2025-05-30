'use client'

import { Locale } from '@/types/locale'
import getLocales from '@/utils/get-locales'
import getTranslation from '@/utils/get-translation'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type LocaleWithUrl = {
  code: string
  name: string
  url: string
}

export type Props = Readonly<{
  locale: Locale
}>

export default function LocaleSwitcher({ locale: currentLocale }: Props) {
  const { locales } = getLocales()

  const pathname = usePathname()
  const searchParams = useSearchParams()

  const buttonRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLButtonElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const usableLocales = useMemo<LocaleWithUrl[]>(() => {
    const newLocales: LocaleWithUrl[] = []
    const pathParts = pathname.split('/')
    const pathWithoutLocale = pathParts.slice(2).join('/')

    for (const locale of locales) {
      let url = `/${locale.code}${pathWithoutLocale}`

      if (pathParts.length >= 2) {
        url = `/${pathWithoutLocale}`
      }

      newLocales.push({
        code: locale.code,
        name: getTranslation(locale.code, `languages.${locale.code}`),
        url,
      })
    }

    return newLocales
  }, [locales, pathname])

  const toggleMenuIsOpen = useCallback(() => {
    setIsMenuOpen(!isMenuOpen)
  }, [isMenuOpen])

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (
        !isMenuOpen ||
        dropdownRef.current?.parentElement?.contains(e.target as HTMLElement)
      ) {
        return
      }

      setIsMenuOpen(false)
    }

    window.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [dropdownRef, isMenuOpen])

  const getLocaleHref = (locale: string) => {
    const localeObject = usableLocales.find(
      (usableLocale) => usableLocale.code === locale,
    )

    let path = localeObject!.url

    if (searchParams.size) {
      path = `${path}?${searchParams}`
    }

    return `/${locale}${path}`
  }

  return (
    <>
      <button
        className="center flex cursor-pointer gap-2 py-4"
        onClick={toggleMenuIsOpen}
        ref={buttonRef}
        style={{ viewTransitionName: 'ls' }}
      >
        <Image
          alt={getTranslation(
            currentLocale.code,
            `languages.${currentLocale?.code}.alt`,
          )}
          className="size-12 rounded-full"
          height={48}
          loading="eager"
          priority
          quality="90"
          src={`/flags/${currentLocale?.code}.svg`}
          title={getTranslation(
            currentLocale.code,
            `languages.${currentLocale?.code}`,
          )}
          unoptimized
          width={48}
        />
        &#9660;
      </button>

      <button
        aria-expanded={isMenuOpen}
        aria-label={getTranslation(currentLocale.code, 'locale_switcher.label')}
        className="absolute end-3 top-16 mt-8 origin-[6rem_0] scale-0 rounded-2xl bg-white shadow-md transition-all before:absolute before:end-10 before:-top-4 before:origin-bottom before:scale-0 before:border-8 before:border-transparent before:border-b-white before:transition-all aria-expanded:scale-100 aria-expanded:before:scale-100 dark:bg-zinc-900 dark:before:border-b-zinc-900"
        ref={dropdownRef}
        tabIndex={-1}
      >
        <div className="overflow-hidden rounded-2xl">
          {locales.map((locale) => (
            <Link
              className="flex w-full items-center gap-4 p-4 text-lg text-black transition-all hover:bg-zinc-200 dark:text-white dark:hover:bg-zinc-700"
              href={getLocaleHref(locale.code)}
              key={locale.code}
              scroll
              tabIndex={isMenuOpen ? 0 : -1}
            >
              <Image
                alt={getTranslation(
                  currentLocale.code,
                  `languages.${locale?.code}.alt`,
                )}
                className="size-12 rounded-full"
                height={48}
                loading="eager"
                priority
                quality="90"
                src={`/flags/${locale.code}.svg`}
                title={getTranslation(
                  currentLocale.code,
                  `languages.${locale?.code}`,
                )}
                unoptimized
                width={48}
              />
              {getTranslation(currentLocale.code, `languages.${locale?.code}`)}
            </Link>
          ))}
        </div>
      </button>
    </>
  )
}
