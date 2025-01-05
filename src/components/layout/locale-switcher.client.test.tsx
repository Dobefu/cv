import { Locale } from '@/types/locale'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { loadEnvFile } from 'node:process'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import LocaleSwitcher from './locale-switcher.client'

vi.mock('react', async () => {
  const actual = await vi.importActual('react')
  return {
    ...(actual as object),
    useContext: () => ({
      locale: {
        code: 'nl',
        name: 'Nederlands',
      } satisfies Locale,
    }),
  }
})

describe('LocaleSwitcher', () => {
  beforeEach(() => {
    loadEnvFile('.env')
    process.env.MOCK_PATHNAME = '/'
  })

  afterEach(() => {
    cleanup()
    loadEnvFile('.env')
    process.env.MOCK_PATHNAME = '/'
  })

  it('Renders normally', async () => {
    render(<LocaleSwitcher />)

    expect(
      screen
        .getAllByRole<HTMLElement>('button')[0]
        .getElementsByTagName('img')[0].alt,
    ).toBe('⚠ languages.nl ⚠')
  })

  it('Renders with the current locale as the only option', async () => {
    render(<LocaleSwitcher />)

    expect(
      screen
        .getAllByRole<HTMLElement>('button')[0]
        .getElementsByTagName('img')[0].alt,
    ).toBe('⚠ languages.nl ⚠')
  })

  it('Closes when clicking outside', async () => {
    render(<LocaleSwitcher />)

    fireEvent.click(screen.getAllByRole<HTMLButtonElement>('button')[0])
    fireEvent.click(document.documentElement)

    expect(
      screen
        .getAllByRole<HTMLElement>('button')[0]
        .getElementsByTagName('img')[0].alt,
    ).toBe('⚠ languages.nl ⚠')
  })

  it('Redirects the root path', async () => {
    render(<LocaleSwitcher />)

    fireEvent.click(screen.getAllByRole<HTMLButtonElement>('button')[0])
    fireEvent.click(screen.getAllByRole<HTMLButtonElement>('button')[2])

    expect(
      screen
        .getAllByRole<HTMLElement>('button')[0]
        .getElementsByTagName('img')[0].alt,
    ).toBe('⚠ languages.nl ⚠')
  })

  it('Redirects with a query parameter', async () => {
    process.env.MOCK_PATHNAME = '/?test=1'

    render(<LocaleSwitcher />)

    fireEvent.click(screen.getAllByRole<HTMLButtonElement>('button')[0])
    fireEvent.click(screen.getAllByRole<HTMLButtonElement>('button')[2])

    expect(
      screen
        .getAllByRole<HTMLElement>('button')[0]
        .getElementsByTagName('img')[0].alt,
    ).toBe('⚠ languages.nl ⚠')
  })
})
