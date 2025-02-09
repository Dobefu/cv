'use client'

import { Locale } from '@/types/locale'
import React, { createContext, useMemo } from 'react'

export const LocaleContext = createContext<{
  locale?: Locale
}>({})

export default function Providers({
  children,
  locale,
}: Readonly<{
  children: React.ReactNode
  locale: Locale
  translations: Record<string, string> | null
}>) {
  const localeContextValue = useMemo(() => ({ locale }), [locale])

  return (
    <LocaleContext.Provider value={localeContextValue}>
      {children}
    </LocaleContext.Provider>
  )
}
