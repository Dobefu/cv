import { loadEnvFile } from 'process'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import sitemap from './sitemap'

describe('sitemap', () => {
  beforeEach(() => {
    loadEnvFile('.env')
  })

  afterEach(() => {
    loadEnvFile('.env')
  })

  it('renders', async () => {
    const sitemapOutput = await sitemap()

    expect(sitemapOutput.length).toBeGreaterThanOrEqual(1)
    expect(sitemapOutput[0].url).toBeDefined()
  })

  it('returns early when the APP_URL variable is missing', async () => {
    delete process.env.APP_URL

    const sitemapOutput = await sitemap()

    expect(sitemapOutput).toMatchObject([])
  })
})
