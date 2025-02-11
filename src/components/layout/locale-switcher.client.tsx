'use client'

import { Locale } from '@/types/locale'
import getLocales from '@/utils/get-locales'
import getTranslation from '@/utils/get-translation'
import { logError } from '@/utils/logger'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import {
  SyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

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

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const buttonRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLAnchorElement>(null)
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

  const onLocaleSelected = useCallback(
    (e: SyntheticEvent<HTMLButtonElement>) => {
      e.preventDefault()

      const newLocale = (e.target as HTMLDivElement).dataset.locale
      const newLocaleObject = usableLocales.find(
        (usableLocale) => usableLocale.code === newLocale,
      )

      /* v8 ignore start */
      if (!newLocaleObject) {
        // This should never actually happen.
        logError('Failed to switch the locale')
        return
      }
      /* v8 ignore stop */

      let path = newLocaleObject.url

      if (searchParams.size) {
        path = `${path}?${searchParams}`
      }

      router.push(`/${newLocale}${path}`)
      setIsMenuOpen(false)
    },
    [usableLocales, router, searchParams],
  )

  return (
    <>
      <button
        className="flex cursor-pointer items-center gap-2 align-middle"
        onClick={toggleMenuIsOpen}
        ref={buttonRef}
        style={{ viewTransitionName: 'locale-switcher' }}
      >
        <Image
          alt={getTranslation(
            currentLocale.code,
            `languages.${currentLocale?.code}.alt`,
          )}
          className="h-12 w-12 rounded-full object-cover drop-shadow-md transition-all max-sm:h-10 max-sm:w-10"
          height={48}
          priority
          quality="90"
          sizes="sm:40px md:56px"
          src={`/flags/${currentLocale?.code}.gif`}
          unoptimized
          width={48}
        />
        &#9660;
      </button>

      <a
        aria-expanded={isMenuOpen}
        aria-label={getTranslation(currentLocale.code, 'locale_switcher.label')}
        className="absolute top-16 right-3 z-40 mt-8 origin-[6rem_0] scale-0 rounded-2xl bg-white/80 shadow-md backdrop-blur-lg transition-all ease-out before:absolute before:-top-4 before:right-10 before:origin-bottom before:scale-0 before:border-8 before:border-transparent before:border-b-white/80 before:backdrop-blur-lg before:transition-all aria-expanded:scale-100 aria-expanded:ease-[cubic-bezier(.2,.8,.6,1.3)] aria-expanded:before:scale-100 max-sm:right-0 max-sm:mt-2 max-sm:before:right-12 dark:bg-neutral-900/90 dark:before:border-b-neutral-900/90"
        href="#"
        ref={dropdownRef}
        tabIndex={-1}
      >
        <div className="overflow-hidden rounded-2xl">
          {locales.map((locale) => (
            <button
              className="flex w-full cursor-pointer items-center gap-4 p-4 align-middle text-lg text-black transition-all hover:bg-gray-300/90 dark:text-white dark:hover:bg-neutral-900/90"
              data-locale={locale.code}
              key={locale.code}
              onClick={onLocaleSelected}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              <Image
                alt={getTranslation(
                  currentLocale.code,
                  `languages.${locale?.code}.alt`,
                )}
                className="w-12 drop-shadow-md transition-all max-sm:w-10"
                data-locale={locale.code}
                height={33}
                quality="90"
                src={`/flags/${locale.code}.gif`}
                unoptimized
                width={48}
              />
              {getTranslation(currentLocale.code, `languages.${locale?.code}`)}
            </button>
          ))}
        </div>
      </a>
    </>
  )
}
