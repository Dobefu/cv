import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Hero from './hero'

describe('Hero', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    cleanup()
  })

  it('Renders without any images', () => {
    render(<Hero subtitle="Test subtitle" title="Test title" />)

    expect(screen.getAllByRole('heading')[0].textContent).toBe('Test title')
    expect(screen.getAllByRole('heading')[1].textContent).toBe('Test subtitle')
  })

  it('Renders with images', () => {
    render(
      <Hero
        img={{
          src: '/src2',
          alt: 'alt2',
          height: 20,
          width: 20,
        }}
        imgBg={{
          src: '/src1',
          alt: 'alt1',
        }}
        subtitle="Test subtitle"
        title="Test title"
      />,
    )

    expect(screen.getAllByRole('heading')[0].textContent).toBe('Test title')
    expect(screen.getAllByRole('heading')[1].textContent).toBe('Test subtitle')
    expect(screen.getAllByRole('img')[0].getAttribute('src')).toContain('src1')
    expect(screen.getAllByRole('img')[1].getAttribute('src')).toContain('src2')
    expect(screen.getAllByRole('img')[0].getAttribute('alt')).toContain('alt1')
    expect(screen.getAllByRole('img')[1].getAttribute('alt')).toContain('alt2')
  })
})
