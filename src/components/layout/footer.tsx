import iconBluesky from '@/icons/bluesky'
import iconDrupal from '@iconify/icons-devicon/drupal'
import iconGitlab from '@iconify/icons-devicon/gitlab'
import iconLinkedin from '@iconify/icons-devicon/linkedin'
import iconGithub from '@iconify/icons-mdi/github'
import iconRss from '@iconify/icons-mdi/rss'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import LocaleLink from '../utils/locale-link.client'

type Props = Readonly<{
  appName: string
}>

export default function Footer({ appName }: Props) {
  const footerLinks = [
    {
      title: 'Projects',
      to: '/projects',
    },
    {
      title: 'Sitemap',
      to: '/sitemap.xml',
    },
  ]

  const socialLinks = [
    {
      title: 'LinkedIn',
      to: 'https://www.linkedin.com/in/connor-van-spronssen/',
      icon: iconLinkedin,
    },
    {
      title: 'Github',
      to: 'https://github.com/Dobefu',
      icon: iconGithub,
    },
    {
      title: 'Bluesky',
      to: 'https://bsky.app/profile/connor.nl',
      icon: iconBluesky,
    },
    {
      title: 'Gitlab',
      to: 'https://gitlab.com/Dobefu',
      icon: iconGitlab,
    },
    {
      title: 'Drupal',
      to: 'https://drupal.org/u/Dobefu',
      icon: iconDrupal,
    },
    {
      title: 'RSS',
      to: '/rss.xml',
      icon: iconRss,
    },
  ]

  return (
    <footer
      className="w-full bg-zinc-100 px-4 py-10 shadow-[0_-4px_6px_-1px_rgb(0,0,0,.1)] dark:bg-zinc-950 print:hidden"
      style={{ viewTransitionName: 'footer' }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-5 text-center md:grid-cols-3">
        <div className="md:text-start">
          <LocaleLink
            aria-label={appName}
            className="flex-none text-xl font-semibold text-zinc-800 dark:text-white dark:focus:ring-1 dark:focus:ring-gray-600 dark:focus:outline-hidden"
            href="/"
          >
            {appName}
          </LocaleLink>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-center">
          {footerLinks.map((footerLink) => {
            const LinkTag = footerLink.to === '/sitemap.xml' ? Link : LocaleLink

            return (
              <LinkTag
                aria-label={footerLink.title}
                className="gap-x-2 text-sm text-gray-600 transition-colors hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:ring-1 dark:focus:ring-gray-600 dark:focus:outline-hidden"
                href={footerLink.to}
                key={footerLink.to}
              >
                {footerLink.title}
              </LinkTag>
            )
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:justify-end">
          {socialLinks.map((socialLink) => (
            <LocaleLink
              aria-label={socialLink.title}
              className="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-500 transition-colors hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-1 dark:focus:ring-gray-600 dark:focus:outline-hidden"
              href={socialLink.to}
              key={socialLink.to}
              target="_blank"
              title={socialLink.title}
            >
              <Icon className="size-5" icon={socialLink.icon} />
            </LocaleLink>
          ))}
        </div>
      </div>
    </footer>
  )
}
