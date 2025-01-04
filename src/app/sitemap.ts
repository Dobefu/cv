import { promises as fs } from 'fs'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const files = await fs.readdir(`${process.cwd()}/src/app`, {
    recursive: true,
  })

  const mdFiles = files.filter((file) => file.endsWith('.mdx'))
  const paths = mdFiles.map((file) => file.replace(/(\/page|)\.mdx$/, ''))

  return paths.map((path) => ({
    url: `${process.env.APP_URL}/${path}`,
  }))
}
