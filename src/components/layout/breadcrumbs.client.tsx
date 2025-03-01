import getProjectFromUrl from '@/utils/get-project-from-url'
import { Fragment } from 'react'
import LocaleLink from '../utils/locale-link.client'

export type Props = Readonly<{
  slug: string[]
}>

export default function BreadcrumbClient({ slug: fullSlug }: Props) {
  const url = process.env.NEXT_PUBLIC_APP_URL
  const slug = fullSlug.slice(1)
  const locale = fullSlug[0]

  slug.unshift('home')
  let path = ''

  if (!url) {
    console.warn('NEXT_PUBLIC_APP_URL is not set!')
    return
  }

  return (
    <>
      <meta content="article" name="og:type" />
      <meta content={`${url}/${slug.join('/')}`} name="og:url" />

      <div
        className="mx-auto flex w-full max-w-5xl flex-wrap gap-4 p-4 pb-8"
        style={{ viewTransitionName: 'b' }}
      >
        {slug.map((slugPart, idx) => {
          if (slugPart !== 'home') path += `/${slugPart}`

          let title = slugPart.charAt(0).toUpperCase() + slugPart.slice(1)
          const { project } = getProjectFromUrl(path, locale)

          if (project) {
            title = project.title
          }

          if (idx === slug.length - 1) {
            return (
              <div className="text-zinc-700 dark:text-zinc-300" key={slugPart}>
                {title}
              </div>
            )
          }

          return (
            <Fragment key={slugPart}>
              <LocaleLink
                className="font-medium text-sky-700 dark:text-sky-400"
                href={path}
              >
                {title}
              </LocaleLink>

              {'/'}
            </Fragment>
          )
        })}
      </div>
    </>
  )
}
