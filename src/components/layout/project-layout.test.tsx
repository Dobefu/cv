import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import ProjectLayout from './project-layout'

describe('ProjectLayout', () => {
  afterEach(() => {
    cleanup()
  })

  it('Renders normally', () => {
    render(
      ProjectLayout({
        children: <>children</>,
        project: {
          title: 'Test Project',
          subtext: 'Test subtext',
          image: 'test-image.png',
          tags: ['tag1', 'tag2'],
          repo: 'http://localhost',
          path: '/test-path',
        },
      }),
    )

    expect(screen).toBeDefined()
  })
})
