import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import ProjectLayout from './project-layout'

describe('ProjectLayout', () => {
  afterEach(() => {
    cleanup()
  })

  it('Renders normally', () => {
    render(
      <ProjectLayout
        project={{
          title: 'Test Project',
          subtext: 'Test subtext',
          image: { src: 'test-image.png', alt: '' },
          tags: ['tag1', 'tag2'],
          repo: 'https://localhost',
          path: '/test-path',
          created: '',
          updated: '',
        }}
      >
        children
      </ProjectLayout>,
    )

    expect(screen).toBeDefined()
    expect(screen.getByRole('link').getAttribute('href')).toBe(
      'https://localhost',
    )
  })

  it('Renders Gitlab URLs differently', () => {
    render(
      <ProjectLayout
        project={{
          title: 'Test Project',
          subtext: 'Test subtext',
          image: { src: 'test-image.png', alt: '' },
          tags: ['tag1', 'tag2'],
          repo: 'https://gitlab.com',
          path: '/test-path',
          created: '',
          updated: '',
        }}
      >
        children
      </ProjectLayout>,
    )

    expect(screen).toBeDefined()
    expect(screen.getByRole('link').getAttribute('href')).toBe(
      'https://gitlab.com',
    )
  })
})
