'use client'

import getLocales from '@/utils/get-locales'
import getTranslations from '@/utils/get-translations'
import { Analytics } from '@vercel/analytics/next'
import { ViewTransitions } from 'next-view-transitions'
import SkipToMain from '../utils/skip-to-main'
import Footer from './footer.client'
import './globals.css'
import Header from './header.client'
import Providers from './providers.client'

export type Props = Readonly<{
  breadcrumb: React.ReactNode
  children: React.ReactNode
  locale: string
}>

export function RootLayoutClient({
  breadcrumb,
  children,
  locale: pageLocale,
}: Props) {
  const { locales } = getLocales()
  const locale = locales.find((loc) => (loc.code = pageLocale))!
  const translations = getTranslations(locale.code)

  const url = process.env.NEXT_PUBLIC_APP_URL

  return (
    <>
      <link
        href={`${url}/${locale.code}/rss.xml`}
        rel="alternate"
        type="application/rss+xml"
      />

      <ViewTransitions>
        <html lang={locale.code}>
          <body>
            <Providers locale={locale} translations={translations}>
              <SkipToMain locale={locale.code} />

              <div className="flex flex-1 flex-col">
                <Header locale={locale} />

                {breadcrumb}

                <main id="main">{children}</main>

                <Footer />
              </div>
            </Providers>

            <Analytics />
          </body>
        </html>
      </ViewTransitions>
    </>
  )
}
