import { describe, expect, it } from 'vitest'
import Image from './opengraph-image'

describe('Opengraph Image', () => {
  it('Renders normally', async () => {
    const imgResponse = await Image()

    expect(imgResponse.headers.get('content-type')).toBe('image/png')
  })
})
