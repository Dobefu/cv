import { promises as fs } from 'fs'
import { logError } from './logger'

export default async function getTranslations(
  locale: string,
): Promise<Record<string, string>> {
  try {
    const file = await fs.readFile(
      `${process.cwd()}/src/i18n/${locale}.json`,
      'utf8',
    )

    return JSON.parse(file)
  } catch (err) {
    logError(err as string)
    return {}
  }
}
