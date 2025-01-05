'use client'

import useLocale from '@/hooks/use-locale'
import getLocales from '@/utils/get-locales'
import { logError } from '@/utils/logger'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, useCallback, useMemo } from 'react'

type Locale = {
  code: string
  name: string
  url: string
}

export default function LocaleSwitcher() {
  const { locale: currentLocale, t } = useLocale()
  const { locales } = getLocales()

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const usableLocales = useMemo<Locale[]>(() => {
    const newLocales: Locale[] = []
    const pathParts = pathname.split('/')
    const pathWithoutLocale = pathParts.slice(2).join('/')

    for (const locale of locales) {
      let url = `/${locale.code}${pathWithoutLocale}`

      if (pathParts.length >= 2) {
        url = `/${pathWithoutLocale}`
      }

      newLocales.push({
        code: locale.code,
        name: t(`languages.${locale.code}`),
        url,
      })
    }

    return newLocales
  }, [t, locales, pathname])

  const onLocaleSelected = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const newLocale = e.target.value
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
    },
    [usableLocales, router, searchParams],
  )

  return (
    <select
      aria-label={t('locale_switcher.label')}
      className="rounded-lg border p-2 shadow-inner"
      defaultValue={currentLocale?.code}
      onChange={onLocaleSelected}
    >
      {usableLocales.map((locale) => (
        <option key={locale.code} value={locale.code}>
          {locale.name}
        </option>
      ))}
    </select>
  )
}
