import { cleanup, render, screen } from '@testing-library/react'
import { act } from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import Header from './header.client'

describe('Header', () => {
  const consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation(() => {})

  beforeEach(() => {
    process.env.MOCK_PATHNAME = '/'
  })

  afterEach(() => {
    consoleWarnMock.mockReset()
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
