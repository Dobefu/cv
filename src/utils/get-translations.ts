export default function getTranslations(
  locale: string,
): Record<string, string> {
  return (
    {
      en: {},
      nl: {},
    }[locale] || {}
  )
}
