import { describe, expect, it } from 'vitest'
import { GET } from './route'

describe('RSS', () => {
  it('Renders normally', async () => {
    const response = GET()

    expect(response).toBeDefined()
    expect(response.headers.get('Content-Type')).toContain('application/xml')
    expect(await response.text()).toContain(
      '<?xml version="1.0" encoding="utf-8"?>',
    )
  })
})
