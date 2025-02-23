import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import LocaleSwitcher from './locale-switcher.client'

describe('LocaleSwitcher', () => {
  const consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation(() => {})

  const locale = {
    code: 'nl',
    name: 'Nederlands',
  }

  beforeEach(() => {
    process.env.MOCK_PATHNAME = '/'
  })

  afterEach(() => {
    consoleWarnMock.mockReset()
    cleanup()
  })

  it('Renders normally', async () => {
    render(<LocaleSwitcher locale={locale} />)

    expect(
      screen
        .getAllByRole<HTMLElement>('button')[0]
        .getElementsByTagName('img')[0].alt,
    ).toBe('Nederlandse vlag')
  })

  it('Renders with the current locale as the only option', async () => {
    render(<LocaleSwitcher locale={locale} />)

    expect(
      screen
        .getAllByRole<HTMLElement>('button')[0]
        .getElementsByTagName('img')[0].alt,
    ).toBe('Nederlandse vlag')
  })

  it('Closes when clicking outside', async () => {
    render(<LocaleSwitcher locale={locale} />)

    fireEvent.click(screen.getAllByRole<HTMLButtonElement>('button')[0])
    fireEvent.click(document.documentElement)

    expect(
      screen
        .getAllByRole<HTMLElement>('button')[0]
        .getElementsByTagName('img')[0].alt,
    ).toBe('Nederlandse vlag')
  })
})
