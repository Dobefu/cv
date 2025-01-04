import { cleanup, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Header from './components/layout/header'
import { useMDXComponents } from './mdx-components'

describe('useMDXComponents', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    cleanup()
  })

  it('Renders', () => {
    const components = useMDXComponents({ wrapper: Header })

    expect(Object.keys(components)).toContain('wrapper')
  })
})
