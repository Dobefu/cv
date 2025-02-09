import { LocaleContext } from '@/components/layout/providers.client'
import { Locale } from '@/types/locale'
import { useContext } from 'react'

export default function useLocale(): {
  locale: Locale
} {
  const { locale } = useContext(LocaleContext)

  return { locale: locale! }
}
