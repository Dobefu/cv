import {
  generateMetadata as breadcrumbGenerateMetadata,
  viewport as breadcrumbViewport,
} from '@/components/layout/breadcrumbs'
import './globals.css'
import { RootLayoutClient } from './root-layout.client'

export type Props = Readonly<{
  breadcrumb: React.ReactNode
  children: React.ReactNode
  locale: string
}>

export const viewport = breadcrumbViewport

export async function generateMetadata(locale: string) {
  return breadcrumbGenerateMetadata({
    params: Promise.resolve({
      slug: [locale],
    }),
  })
}

export async function RootLayout({ breadcrumb, children, locale }: Props) {
  return (
    <RootLayoutClient breadcrumb={breadcrumb} locale={locale}>
      {children}
    </RootLayoutClient>
  )
}
