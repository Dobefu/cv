import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import ContentContainer from './content-container'

describe('ContentContainer', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    cleanup()
  })

  it('Renders', () => {
    render(<ContentContainer>test</ContentContainer>)

    expect(screen.getByText('test')).toBeDefined()
  })
})
