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

  return NextResponse.next()
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

export const config = {
  matcher: [
    {
      source:
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
