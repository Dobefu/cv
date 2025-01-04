import { cleanup, render, screen } from '@testing-library/react'
import { nextTick } from 'node:process'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Header from './header'

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
