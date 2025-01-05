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
  })

  afterEach(() => {
    cleanup()
    loadEnvFile('.env')
  })

  it('Renders normally', async () => {
    process.env.MOCK_PATHNAME = '/'

    render(<LocaleSwitcher />)

    expect(screen.getByRole<HTMLSelectElement>('combobox').value).toBe('nl')
    expect(screen.getAllByRole('option').length).toBe(2)
  })

  it('Renders with the current locale as the only option', async () => {
    process.env.MOCK_PATHNAME = '/'

    render(<LocaleSwitcher />)

    expect(screen.getByRole<HTMLSelectElement>('combobox').value).toBe('nl')
    expect(screen.getAllByRole('option').length).toBe(2)
  })

  it('Redirects the root path', async () => {
    process.env.MOCK_PATHNAME = '/'

    render(<LocaleSwitcher />)

    fireEvent.change(screen.getByRole<HTMLSelectElement>('combobox'))
    expect(screen.getAllByRole('option').length).toBe(2)
  })

  it('Redirects with a query parameter', async () => {
    process.env.MOCK_PATHNAME = '/?test=1'

    render(<LocaleSwitcher />)

    fireEvent.change(screen.getByRole<HTMLSelectElement>('combobox'))
    expect(screen.getAllByRole('option').length).toBe(2)
  })
})
