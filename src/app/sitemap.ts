import getLocales from '@/utils/get-locales'
import getProjects from '@/utils/get-projects'
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

  const appUrl = process.env.NEXT_PUBLIC_APP_URL

  const paths = mdFiles.map((file) => file.replace(/(\/page|)\.(mdx|tsx)$/, ''))
  const sitemap: MetadataRoute.Sitemap = []

  for (const path of paths) {
    const cleanPath = path
      .replaceAll(/\(.{1,25}?\)/g, '')
      .replaceAll(/\/\//g, '/')
      .replace(/^page$/, '')
    const languages: Record<string, string> = {}

    localeCodes.forEach(
      (localeCode) =>
        (languages[localeCode] = `${appUrl}/${localeCode}/${cleanPath}`.replace(
          /\/$/,
          '',
        )),
    )

    sitemap.push({
      url: `${appUrl}/${defaultLocale}/${cleanPath}`.replace(/\/$/, ''),
      alternates: { languages },
      priority: 1,
      images: await getPathImages(path, defaultLocale, appUrl),
    })
  }

  return sitemap
}

async function getPathImages(
  path: string,
  locale: string,
  appUrl: string,
): Promise<string[]> {
  const imageBase = `${appUrl}/img/`
  const images: string[] = []

  if (path === 'page') {
    return [
      `${imageBase}avatar-transparent.png`,
      `${imageBase}home-hero-bg.png`,
    ]
  }

  const projects = getProjects(locale)

  if (path === 'projects') {
    return projects.map(
      (project) => `${imageBase}projects/${project.image.src}`,
    )
  }

  if (path.includes('(project)')) {
    const project = projects.find(
      (project) => project.path === path.split('/').toReversed()[0],
    )

    if (project) {
      return [`${imageBase}projects/${project.image.src}`]
    }
  }

  return images
}
