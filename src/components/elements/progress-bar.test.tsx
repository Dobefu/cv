import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import ProgressBar from './progress-bar'

describe('ProgressBar', () => {
  afterEach(() => {
    cleanup()
  })

  it('Renders', () => {
    render(<ProgressBar label="Testing" percentage={40} />)

    expect(screen.getByText('Testing')).toBeDefined()
  })
})
