import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextURL } from 'next/dist/server/web/next-url'
import { type NextRequest, NextResponse } from 'next/server'
import getLocales from './utils/get-locales'

export function middleware(request: NextRequest) {
  const redirectUrl = handleLocaleDetection(request)

  if (redirectUrl) {
    return NextResponse.redirect(redirectUrl)
  }

  const response = getCspResponse(request)

  response.headers.append('x-url', request.url)

  return response
}

function handleLocaleDetection(request: NextRequest): NextURL | undefined {
  const { defaultLocale, locales } = getLocales()

  const localeCodes = locales.map((locale) => locale.code)

  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale: { code: string; name: string }) =>
      pathname.startsWith(`/${locale.code}/`) || pathname === `/${locale.code}`,
  )

  if (pathnameHasLocale) return

  const headers: Record<string, string> = { 'accept-language': 'en' }
  request.headers.forEach((value, key) => (headers[key] = value))

  const languages = new Negotiator({ headers }).languages()
  const matchedLocale = match(languages, localeCodes, defaultLocale)

  request.nextUrl.pathname = `/${matchedLocale}${pathname}`
  return request.nextUrl
}

function getCspResponse(request: Request): NextResponse {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')

  const csp: Record<string, string[]> = {
    'default-src': ["'self'"],
    'script-src': [
      "'self'",
      `'nonce-${nonce}'`,
      "'strict-dynamic'",
      'https://api.unisvg.com',
      'https://api.simplesvg.com',
      'https://api.iconify.design',
    ],
    'connect-src': [
      "'self'",
      'https://api.unisvg.com',
      'https://api.simplesvg.com',
      'https://api.iconify.design',
    ],
    'style-src': ["'self'", `'unsafe-inline'`],
    'img-src': ["'self'", 'blob:', 'data:'],
    'font-src': ["'self'"],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
    'frame-ancestors': ["'none'"],
  }

  if (process.env.NODE_ENV !== 'production') {
    csp['script-src'].push("'unsafe-eval'")
    csp['upgrade-insecure-requests'] = []
  }

  const cspString = parseCsp(csp)

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  response.headers.set('Content-Security-Policy', cspString)

  return response
}

function parseCsp(csp: Record<string, string[]>): string {
  const output = []

  for (const [key, value] of Object.entries(csp)) {
    output.push(`${key} ${value.join(' ')}`.trimEnd())
  }

  return output.join('; ') + ';'
}

export const config = {
  matcher: [
    {
      source:
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.+.svg|.+.png|.+.jpg|.+.gif).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
