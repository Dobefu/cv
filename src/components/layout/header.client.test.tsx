import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Header from './header.client'

describe('Header', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    cleanup()
  })

  it('Renders', () => {
    render(<Header appName="Testing" />)

    expect(screen.getByRole('banner')).toBeDefined()
  })
})
