import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Footer from './footer.client'

describe('Footer', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    cleanup()
  })

  it('Renders', () => {
    render(<Footer appName="Testing" />)

    expect(screen.getByRole('contentinfo')).toBeDefined()
  })
})
