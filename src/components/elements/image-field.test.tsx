import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import ImageField from './image-field'

describe('ImageField', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    cleanup()
  })

  it('Renders', () => {
    render(
      <ImageField
        img={{
          src: '/',
          alt: '',
          title: '',
        }}
        label="Test label"
        link="/"
        subtext="Test subtext"
        text="Test text"
      />,
    )

    expect(screen.getByText('Test label')).toBeDefined()
    expect(screen.getByText('Test text')).toBeDefined()
    expect(screen.getByText('Test subtext')).toBeDefined()
  })

  it('Renders without an image', () => {
    render(
      <ImageField
        label="Test label"
        link="/"
        subtext="Test subtext"
        text="Test text"
      />,
    )

    expect(screen.getByText('Test label')).toBeDefined()
    expect(screen.getByText('Test text')).toBeDefined()
    expect(screen.getByText('Test subtext')).toBeDefined()
  })

  it('Renders without a link', () => {
    render(
      <ImageField
        img={{
          src: '/',
          alt: '',
          title: '',
        }}
        label="Test label"
        subtext="Test subtext"
        text="Test text"
      />,
    )

    expect(screen.getByText('Test label')).toBeDefined()
    expect(screen.getByText('Test text')).toBeDefined()
    expect(screen.getByText('Test subtext')).toBeDefined()
  })

  it('Renders without any optional fields', () => {
    render(
      <ImageField label="Test label" subtext="Test subtext" text="Test text" />,
    )

    expect(screen.getByText('Test label')).toBeDefined()
    expect(screen.getByText('Test text')).toBeDefined()
    expect(screen.getByText('Test subtext')).toBeDefined()
  })
})
