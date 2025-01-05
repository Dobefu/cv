import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Field from './field'

describe('Field', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    cleanup()
  })

  it('Renders', () => {
    render(<Field label="Test label" value="Test value" />)

    expect(screen.getByText('Test label')).toBeDefined()
    expect(screen.getByText('Test value')).toBeDefined()
  })
})