import { promises as fs } from 'fs'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!process.env.APP_URL) {
    return []
  }

  const files = await fs.readdir(`${process.cwd()}/src/app`, {
    recursive: true,
  })

  const mdFiles = files.filter((file) => {
    // Exclude catch-all routes.
    if (file.includes('[...')) return false

    return file.endsWith('page.mdx') || file.endsWith('page.tsx')
  })
  const paths = mdFiles.map((file) => file.replace(/(\/page|)\.(mdx|tsx)$/, ''))

  return paths.map((path) => ({
    url: `${process.env.APP_URL}/${path.replaceAll(/\(.{1,25}?\)/g, '').replaceAll(/\/\//g, '/')}`,
  }))
}
