import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import BreadCrumb, { generateMetadata } from './breadcrumbs'

describe('BreadcrumbMetadata', () => {
  const oldAppUrl = process.env.NEXT_PUBLIC_APP_URL
  const consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation(() => {})

  afterEach(() => {
    process.env.NEXT_PUBLIC_APP_URL = oldAppUrl
    consoleWarnMock.mockReset()
  })

  it('Returns metadata', () => {
    generateMetadata({
      params: new Promise((resolve) =>
        resolve({ slug: ['some', 'url', 'path'] }),
      ),
    })

    expect(screen).toBeDefined()
  })

  it('Returns early without an app URL', () => {
    delete process.env.NEXT_PUBLIC_APP_URL

    generateMetadata({
      params: new Promise((resolve) =>
        resolve({ slug: ['some', 'url', 'path'] }),
      ),
    })

    expect(screen).toBeDefined()
  })
})

describe('Breadcrumb', () => {
  const oldAppUrl = process.env.NEXT_PUBLIC_APP_URL

  afterEach(() => {
    process.env.NEXT_PUBLIC_APP_URL = oldAppUrl
    cleanup()
  })

  it('Renders normally', async () => {
    render(
      await BreadCrumb({
        params: new Promise((resolve) => resolve({ slug: ['projects', 'cv'] })),
      }),
    )

    expect(screen).toBeDefined()
  })

  it('Returns early without an app URL', async () => {
    delete process.env.NEXT_PUBLIC_APP_URL

    render(
      await BreadCrumb({
        params: new Promise((resolve) => resolve({ slug: ['projects', 'cv'] })),
      }),
    )

    expect(screen).toBeDefined()
  })
})
