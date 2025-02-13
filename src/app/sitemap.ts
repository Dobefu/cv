import getLocales from '@/utils/get-locales'
import { promises as fs } from 'fs'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!process.env.NEXT_PUBLIC_APP_URL) {
    return []
  }

  const { defaultLocale, locales } = getLocales()
  const localeCodes = locales.map((locale) => locale.code)

  const files = await fs.readdir(`${process.cwd()}/src/app/${defaultLocale}`, {
    recursive: true,
  })

  const mdFiles = files.filter((file) => {
    // Exclude catch-all routes and parallel routes.
    if (file.includes('[...') || file.startsWith('@')) return false

    return file.endsWith('page.mdx') || file.endsWith('page.tsx')
  })

  const paths = mdFiles.map((file) => file.replace(/(\/page|)\.(mdx|tsx)$/, ''))

  return paths.map((path) => {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL
    const cleanPath = path
      .replaceAll(/\(.{1,25}?\)/g, '')
      .replaceAll(/\/\//g, '/')
      .replace(/^page$/, '')
    const languages: Record<string, string> = {}

    localeCodes
      .filter((localeCode) => localeCode !== defaultLocale)
      .forEach(
        (localeCode) =>
          (languages[localeCode] =
            `${appUrl}/${localeCode}/${cleanPath}`.replace(/\/$/, '')),
      )

    return {
      url: `${appUrl}/${defaultLocale}/${cleanPath}`.replace(/\/$/, ''),
      alternates: { languages },
      priority: 1,
    }
  })
}
