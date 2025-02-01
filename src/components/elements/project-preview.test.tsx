import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import ProjectPreview from './project-preview'

describe('ProjectPreview', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    cleanup()
  })

  it('Renders', () => {
    render(
      <ProjectPreview
        img="/img.png"
        label="Test label"
        link="/"
        subtext="Test subtext"
        tags={['go']}
      />,
    )

    expect(screen.getByText('Test label')).toBeDefined()
    expect(screen.getByText('Test subtext')).toBeDefined()
    expect(screen.getByText('Go')).toBeDefined()
  })
})
