import { describe, expect, it } from 'vitest'
import getTranslations from './get-translations'

describe('get-translations', () => {
  it('Returns the translations', () => {
    const translations = getTranslations('en')

    expect(Object.keys(translations).length).toBeGreaterThan(0)
  })

  it('Returns default translations on invalid locale', () => {
    const translations = getTranslations('bogus')

    expect(Object.keys(translations).length).toBe(0)
  })
})
