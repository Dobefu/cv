import { Locale } from '@/types/locale'

export default function getLocales(): {
  defaultLocale: string
  locales: Locale[]
} {
  return {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English' },
      { code: 'nl', name: 'Nederlands' },
    ],
  }
}
