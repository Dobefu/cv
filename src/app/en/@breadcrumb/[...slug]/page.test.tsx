import { cleanup, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Breadcrumb, { generateMetadata } from './page'

describe('BreadcrumbMetadata', () => {
  it('Returns metadata', async () => {
    await generateMetadata({
      params: new Promise((resolve) => resolve({ slug: ['projects', 'cv'] })),
    })

    expect(screen).toBeDefined()
  })
})

describe('Breadcrumb', () => {
  afterEach(() => {
    cleanup()
  })

  it('Renders normally', () => {
    Breadcrumb({
      params: new Promise((resolve) => resolve({ slug: ['projects', 'cv'] })),
    })

    expect(screen).toBeDefined()
  })
})
