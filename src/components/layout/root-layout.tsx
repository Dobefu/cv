import getLocales from '@/utils/get-locales'
import getTranslations from '@/utils/get-translations'
import { Geist } from 'next/font/google'
import Footer from './footer'
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
        className={`${geistSans.variable} flex min-h-full flex-col bg-zinc-200 font-sans text-zinc-900 antialiased dark:bg-zinc-900 dark:text-white contrast-more:dark:bg-black`}
      >
        <Providers locale={locale} translations={translations}>
          <div className="flex flex-1 flex-col justify-between">
            <Header />

            <main
              className="relative mx-auto mb-4 w-full flex-1"
              id="main-content"
            >
              {children}
            </main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
