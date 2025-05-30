import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { type NextRequest, NextResponse } from 'next/server'
import getLocales from './utils/get-locales'

let cachedCspString: string | undefined
let localeCodes: string[] | undefined

export function middleware(request: NextRequest) {
  const redirectUrl = handleLocaleDetection(request)

  if (redirectUrl) {
    return NextResponse.redirect(redirectUrl, { status: 302 })
  }

  const response = getCspResponse()

  return response
}

function handleLocaleDetection(request: NextRequest): URL | undefined {
  const { defaultLocale, locales } = getLocales()

  localeCodes ??= locales.map((locale) => locale.code)

  const { pathname } = request.nextUrl
  const pathnameHasLocale = localeCodes.some((code) => {
    return pathname.startsWith(`/${code}/`) || pathname === `/${code}`
  })

  if (pathnameHasLocale) {
    return
  }

  const headers: Record<string, string> = { 'accept-language': 'en' }
  request.headers.forEach((value, key) => (headers[key] = value))

  const languages = new Negotiator({ headers }).languages()
  const matchedLocale = match(languages, localeCodes, defaultLocale)

  const url = new URL(request.nextUrl.origin)
  url.pathname = `/${matchedLocale}${pathname.replace(/\/$/, '')}`

  return url
}

function getCspResponse(): NextResponse {
  const response = NextResponse.next()

  if (cachedCspString) {
    response.headers.set('Content-Security-Policy', cachedCspString)
    return response
  }

  const csp: Record<string, string[]> = {
    'default-src': ["'self'"],
    'script-src': [
      "'self'",
      "'unsafe-inline'",
      'https://va.vercel-scripts.com',
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
  cachedCspString = cspString

  response.headers.set('Content-Security-Policy', cspString)

  return response
}

function parseCsp(csp: Record<string, string[]>): string {
  const output = []

  for (const [key, value] of Object.entries(csp)) {
    output.push(`${key} ${value.join(' ')}`)
  }

  return output.join('; ') + ';'
}

export const config = {
  matcher: [
    {
      source:
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|manifest.json|manifest.webmanifest|.+.svg|.+.png|.+.jpg|.+.gif).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
