import getLocales from '@/utils/get-locales'
import getTranslations from '@/utils/get-translations'
import type { Metadata } from 'next'
import getConfig from 'next/config'
import { TemplateString } from 'next/dist/lib/metadata/types/metadata-types'
import { Geist } from 'next/font/google'
import './globals.css'
import Providers from './providers'

// Make the layout dynamic, to ensure that CSP nonces get generated on every page load.
export const dynamic = 'force-dynamic'

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
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const pageLocale = (await params).locale
  const { locales } = getLocales()
  const locale = locales.find((loc) => (loc.code = pageLocale))!
  const translations = await getTranslations(locale.code)

  return (
    <html className="h-full" lang={locale.code}>
      <body
        className={`${geistSans.variable} flex min-h-full flex-col font-sans antialiased`}
      >
        <Providers locale={locale} translations={translations}>
          {children}
        </Providers>
      </body>
    </html>
  )
}
