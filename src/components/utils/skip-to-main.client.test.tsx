import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import SkipToMain from './skip-to-main.client'

describe('SkipToMain', () => {
  const consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation(() => {})

  afterEach(() => {
    consoleWarnMock.mockReset()
    cleanup()
  })

  it('Renders', () => {
    render(<SkipToMain />)

    expect(screen.getByText('⚠ skip_to_main.title ⚠')).toBeDefined()
  })
})
