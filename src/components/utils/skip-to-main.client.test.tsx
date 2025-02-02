import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import SkipToMain from './skip-to-main.client'

describe('SkipToMain', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    cleanup()
  })

  it('Renders', () => {
    render(<SkipToMain />)

    expect(screen.getByText('⚠ skip_to_main.title ⚠')).toBeDefined()
  })
})
