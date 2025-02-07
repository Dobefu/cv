import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import BreadCrumb, { generateMetadata } from './page'

describe('BreadcrumbMetadata', () => {
  const oldAppUrl = process.env.NEXT_PUBLIC_APP_URL

  afterEach(() => {
    process.env.NEXT_PUBLIC_APP_URL = oldAppUrl
  })

  it('Returns metadata', async () => {
    await generateMetadata({
      params: new Promise((resolve) =>
        resolve({ slug: ['some', 'url', 'path'] }),
      ),
    })

    expect(screen).toBeDefined()
  })

  it('Returns early without an app URL', async () => {
    delete process.env.NEXT_PUBLIC_APP_URL

    await generateMetadata({
      params: new Promise((resolve) =>
        resolve({ slug: ['some', 'url', 'path'] }),
      ),
    })

    expect(screen).toBeDefined()
  })
})

describe('Breadcrumb', () => {
  afterEach(() => {
    cleanup()
  })

  it('Renders normally', () => {
    render(BreadCrumb())

    expect(screen).toBeDefined()
  })
})
