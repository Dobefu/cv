import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Projects from './page'

describe('Projects', () => {
  afterEach(() => {
    cleanup()
  })

  it('Renders normally', () => {
    render(Projects())

    expect(screen).toBeDefined()
  })
})
