import { Metadata, Viewport } from 'next'
import BreadcrumbClient from './breadcrumbs.client'

export type Props = Readonly<{
  params: Promise<{ slug: string[] }>
}>

export const viewport: Viewport = {
  themeColor: '#0d6488',
}

export async function generateMetadata({ params }: Props) {
  const url = process.env.NEXT_PUBLIC_APP_URL
  const slug = (await params).slug

  if (!url) {
    console.warn('NEXT_PUBLIC_APP_URL is not set!')
    return
  }

  const pathPartsWithoutLocale = slug.slice(1)

  if (pathPartsWithoutLocale.length > 0) {
    pathPartsWithoutLocale.unshift('')
  }

  return {
    metadataBase: new URL(url),
    alternates: {
      canonical: slug.join('/'),
      languages: {
        en: `/en${pathPartsWithoutLocale.join('/')}`,
        nl: `/nl${pathPartsWithoutLocale.join('/')}`,
      },
    },
    icons: { apple: '/logo-192.png' },
  } satisfies Metadata
}

export default async function Breadcrumb({ params }: Props) {
  const slug = (await params).slug

  return <BreadcrumbClient slug={slug} />
}
