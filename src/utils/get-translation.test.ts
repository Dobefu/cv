import { describe, expect, it } from 'vitest'
import getTranslation from './get-translation'

describe('get-translations', () => {
  it('Returns the translations', () => {
    const translation = getTranslation('en', 'languages.en')

    expect(translation).toBe('English')
  })

  it('Returns default translations on invalid locale', () => {
    const translation = getTranslation('en', 'bogus')

    expect(translation).toBe('⚠ bogus ⚠')
  })
})
