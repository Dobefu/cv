import { describe, expect, it } from 'vitest'
import manifest from './manifest'

describe('manifest', () => {
  it('renders', () => {
    const file = manifest()

    expect(file).toBeDefined()
  })
})
