import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import SkipToMain from './skip-to-main'

describe('SkipToMain', () => {
  const consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation(() => {})

  afterEach(() => {
    consoleWarnMock.mockReset()
    cleanup()
  })

  it('Renders', () => {
    render(<SkipToMain locale="en" />)

    expect(screen.getByText('Skip to main content')).toBeDefined()
  })
})
