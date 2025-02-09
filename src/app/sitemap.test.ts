import { beforeEach, describe, expect, it } from 'vitest'
import sitemap from './sitemap'

describe('sitemap', () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_APP_URL = 'http://localhost.test'
  })

  it('renders', async () => {
    const sitemapOutput = await sitemap()

    expect(sitemapOutput.length).toBeGreaterThanOrEqual(1)
    expect(sitemapOutput[0].url).toBeDefined()
  })

  it('returns early when the NEXT_PUBLIC_APP_URL variable is missing', async () => {
    delete process.env.NEXT_PUBLIC_APP_URL

    const sitemapOutput = await sitemap()

    expect(sitemapOutput).toMatchObject([])
  })
})
