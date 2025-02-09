import { Locale } from '@/types/locale'
import { afterEach, describe, expect, it, vi } from 'vitest'
import useLocale from './use-locale'

describe('useLocale', () => {
  const consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation(() => {})

  vi.mock('react', async () => {
    const actual = await vi.importActual('react')
    return {
      ...(actual as object),
      useContext: () => ({
        locale: {
          code: 'en',
          name: 'English',
        } satisfies Locale,
        translations: {
          'test.source': 'Translation',
        } satisfies Record<string, string>,
      }),
    }
  })

  afterEach(() => {
    consoleWarnMock.mockReset()
  })

  it('renders', () => {
    const { locale } = useLocale()

    expect(locale).toBeDefined()
  })
})
