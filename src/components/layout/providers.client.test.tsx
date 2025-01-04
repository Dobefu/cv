import LocaleLink from '@/components/utils/locale-link.client'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Providers from './providers.client'

describe('providers', () => {
  afterEach(() => {
    cleanup()
  })

  it('Renders', () => {
    render(
      <Providers locale={{ code: 'en', name: 'English' }} translations={{}}>
        <LocaleLink href="/">Test</LocaleLink>
      </Providers>,
    )

    expect(screen.getByRole('link')).toBeDefined()
    expect(screen.getByRole('link').getAttribute('href')).toBe('/en')
  })
})
