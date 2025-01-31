export default function getTranslations(
  locale: string,
): Record<string, string> {
  return (
    {
      en: {
        'layout.skip_to_main': 'Skip to main content',
        'locale_switcher.label': 'Choose a language',
        'languages.en': 'English',
        'languages.nl': 'Dutch',
        'languages.en.alt': 'English flag',
        'languages.nl.alt': 'Dutch flag',
        'projects.title': 'Projects',
      },
      nl: {
        'layout.skip_to_main': 'Naar hoofdinhoud gaan',
        'locale_switcher.label': 'Kies een taal',
        'languages.en': 'Engels',
        'languages.nl': 'Nederlands',
        'languages.en.alt': 'Engelse vlag',
        'languages.nl.alt': 'Nederlandse vlag',
        'projects.title': 'Projecten',
      },
    }[locale] || {}
  )
}
