import getLocales from '@/utils/get-locales'
import getTranslations from '@/utils/get-translations'
import type { Metadata } from 'next'
import getConfig from 'next/config'
import { TemplateString } from 'next/dist/lib/metadata/types/metadata-types'
import { Geist } from 'next/font/google'
import './globals.css'
import Header from './header'
import Providers from './providers'

type Props = Readonly<{
  children: React.ReactNode
  locale: string
}>

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const { publicRuntimeConfig } = getConfig()
const appName = publicRuntimeConfig.appName || ''

export const metadata: Metadata = {
  title: {
    default: appName,
    template: `%s | ${appName}`,
  } satisfies TemplateString,
}

export default async function RootLayout({
  children,
  locale: pageLocale,
}: Props) {
  const { locales } = getLocales()
  const locale = locales.find((loc) => (loc.code = pageLocale))!
  const translations = getTranslations(locale.code)

  return (
    <html className="h-full" lang={locale.code}>
      <body
        className={`${geistSans.variable} flex min-h-full flex-col font-sans antialiased`}
      >
        <Providers locale={locale} translations={translations}>
          <div className="flex flex-1 flex-col justify-between gap-4">
            <Header />

            <main className="flex-1 px-8" id="main-content">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
