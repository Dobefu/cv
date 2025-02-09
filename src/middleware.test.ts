import { cleanup } from '@testing-library/react'
import { NextRequest, NextResponse } from 'next/server'
import { afterEach, describe, expect, it, vitest } from 'vitest'
import { middleware } from './middleware'

describe('middleware', () => {
  const redirectSpy = vitest.spyOn(NextResponse, 'redirect')

  afterEach(() => {
    cleanup()
    redirectSpy.mockReset()
  })

  it("doesn't redirect for valid locales", () => {
    middleware(new NextRequest(new URL('http://localhost:3000/en')))
    expect(redirectSpy).not.toHaveBeenCalled()

    middleware(new NextRequest(new URL('http://localhost:3000/en/homepage')))
    expect(redirectSpy).not.toHaveBeenCalled()
  })

  it('redirects for invalid locales', () => {
    middleware(new NextRequest(new URL('http://localhost:3000/invalid/')))
    expect(redirectSpy).toHaveBeenCalledWith(
      new URL('http://localhost:3000/en/invalid/'),
    )
  })
})
