import { cleanup } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Header from './components/layout/header.client'
import { useMDXComponents } from './mdx-components'

describe('useMDXComponents', () => {
  afterEach(() => {
    cleanup()
  })

  it('Renders', () => {
    const components = useMDXComponents({ wrapper: Header })

    expect(Object.keys(components)).toContain('wrapper')
  })
})
