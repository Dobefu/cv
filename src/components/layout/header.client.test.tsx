import { cleanup, render, screen } from '@testing-library/react'
import { act } from 'react'
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

  it('Renders differently after a scroll threshold', () => {
    render(<Header appName="Testing" />)

    act(() => {
      window.scrollY = 112
      window.dispatchEvent(new CustomEvent('scroll'))
    })

    expect(screen.getByRole('banner')).toBeDefined()
  })
})
