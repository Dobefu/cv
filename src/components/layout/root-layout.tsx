import { generateMetadata as breadcrumbGenerateMetadata } from '@/components/layout/breadcrumbs'
import getLocales from '@/utils/get-locales'
import getTranslations from '@/utils/get-translations'
import { Analytics } from '@vercel/analytics/next'
import { ViewTransitions } from 'next-view-transitions'
import getConfig from 'next/config'
import { Geist } from 'next/font/google'
import SkipToMain from '../utils/skip-to-main'
import Footer from './footer'
import './globals.css'
import Header from './header'
import Providers from './providers.client'

export type Props = Readonly<{
  breadcrumb: React.ReactNode
  children: React.ReactNode
  locale: string
}>

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export async function generateMetadata(locale: string) {
  return breadcrumbGenerateMetadata({
    params: new Promise((resolve) =>
      resolve({
        slug: [locale],
      }),
    ),
  })
}

export async function RootLayout({
  breadcrumb,
  children,
  locale: pageLocale,
}: Props) {
  const { locales } = getLocales()
  const locale = locales.find((loc) => (loc.code = pageLocale))!
  const translations = getTranslations(locale.code)

  const { publicRuntimeConfig } = getConfig()
  const appName = publicRuntimeConfig.appName || ''

  return (
    <ViewTransitions>
      <html className="h-full" lang={locale.code}>
        <body
          className={`${geistSans.variable} flex min-h-full flex-col bg-zinc-200 font-sans text-zinc-900 antialiased dark:bg-zinc-900 dark:text-white contrast-more:dark:bg-black print:bg-transparent`}
        >
          <Providers locale={locale} translations={translations}>
            <SkipToMain locale={locale.code} />

            <div className="flex flex-1 flex-col">
              <Header appName={appName} locale={locale} />

              {breadcrumb}

              <main
                className="relative mx-auto mb-4 w-full flex-1"
                id="main-content"
              >
                {children}
              </main>

              <Footer appName={appName} />
            </div>
          </Providers>

          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  )
}
