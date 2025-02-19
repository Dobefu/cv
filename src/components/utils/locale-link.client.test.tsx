import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import LocaleLink from './locale-link.client'

describe('LocaleLink', () => {
  const consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation(() => {})

  afterEach(() => {
    consoleWarnMock.mockReset()
    cleanup()
  })

  it('Renders', () => {
    render(<LocaleLink href="/" />)

    expect(screen.getByRole('link').getAttribute('href')).toBe('/en')
  })

  it('Renders with a locale override', () => {
    render(<LocaleLink href="/" localeOverride="nl" />)

    expect(screen.getByRole('link').getAttribute('href')).toBe('/nl')
  })

  it('Renders external links', () => {
    render(<LocaleLink href="https://example.com" />)

    expect(screen.getByRole('link').getAttribute('href')).toBe(
      'https://example.com',
    )
  })

  it('Renders mailto links', () => {
    render(<LocaleLink href="mailto:info@example.com" />)

    expect(screen.getByRole('link').getAttribute('href')).toBe(
      'mailto:info@example.com',
    )
  })

  it('Renders tel links', () => {
    render(<LocaleLink href="tel:0612345678" />)

    expect(screen.getByRole('link').getAttribute('href')).toBe('tel:0612345678')
  })
})
