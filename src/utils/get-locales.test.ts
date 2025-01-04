import { describe, expect, it } from 'vitest'
import getLocales from './get-locales'

describe('get-locales', () => {
  it('Returns the locales', () => {
    const locales = getLocales()

    expect(locales).toBeDefined()
  })
})
