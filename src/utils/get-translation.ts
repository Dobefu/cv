import getTranslations from './get-translations'
import { logWarning } from './logger'

export default function getTranslation(locale: string, source: string): string {
  const translations = getTranslations(locale)

  if (!translations || !(source in translations)) {
    logWarning(`The translation source "${source}" has no translation`)
    return `⚠ ${source} ⚠`
  }

  return translations[source]
}
