import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import BreadCrumb from './page'

describe('Breadcrumb', () => {
  afterEach(() => {
    cleanup()
  })

  it('Renders normally', () => {
    render(BreadCrumb())

    expect(screen).toBeDefined()
  })
})
