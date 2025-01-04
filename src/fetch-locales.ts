export function fetchLocales(): {
  defaultLocale: string
  locales: { code: string; name: string }[]
} {
  return {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English' },
      { code: 'nl', name: 'Nederlands' },
    ],
  }
}
