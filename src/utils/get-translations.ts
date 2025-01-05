export default function getTranslations(
  locale: string,
): Record<string, string> {
  return (
    {
      en: {
        'layout.skip_to_main': 'Skip to main content',
      },
      nl: {
        'layout.skip_to_main': 'Naar hoofdinhoud gaan',
      },
    }[locale] || {}
  )
}
