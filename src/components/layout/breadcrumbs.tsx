import getProjectFromUrl from '@/utils/get-project-from-url'
import { Metadata } from 'next'
import { Fragment } from 'react'
import LocaleLink from '../utils/locale-link.client'

export type Props = Readonly<{
  params: Promise<{ slug: string[] }>
}>

export async function generateMetadata({ params }: Props) {
  const url = process.env.NEXT_PUBLIC_APP_URL
  const slug = (await params).slug

  if (!url) {
    console.warn('NEXT_PUBLIC_APP_URL is not set!')
    return {}
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
  const slug = (await params).slug.slice(1)
  slug.unshift('home')
  let path = ''

  return (
    <div className="px-4" style={{ viewTransitionName: 'breadcrumbs' }}>
      <div className="mx-auto flex w-full max-w-5xl flex-wrap gap-4 pt-4 pb-8">
        {slug.map((slugPart, idx) => {
          if (slugPart !== 'home') path += `/${slugPart}`

          let title = slugPart.charAt(0).toUpperCase() + slugPart.slice(1)
          const { project } = getProjectFromUrl(path, 'en')

          if (project) {
            title = project.title
          }

          if (idx === slug.length - 1) {
            return (
              <div className="text-gray-700 dark:text-gray-300" key={slugPart}>
                {title}
              </div>
            )
          }

          return (
            <Fragment key={slugPart}>
              <LocaleLink
                className="font-medium text-sky-700 dark:text-sky-500 contrast-more:dark:text-sky-400"
                href={path}
              >
                {title}
              </LocaleLink>

              {'/'}
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}
