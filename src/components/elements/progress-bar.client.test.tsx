import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import ProgressBar from './progress-bar.client'

describe('ProgressBar', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
    cleanup()
  })

  it('Renders', () => {
    render(<ProgressBar label="Testing" percentage={40} />)

    expect(screen.getByText('Testing')).toBeDefined()
  })
})
