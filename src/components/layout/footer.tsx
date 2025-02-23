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
      className="w-full bg-zinc-100 px-4 py-10 shadow-md dark:bg-zinc-950 print:hidden"
      style={{ viewTransitionName: 'footer' }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 text-center max-md:flex-col">
        <div>
          <LocaleLink
            aria-label={appName}
            className="text-xl font-medium text-zinc-800 dark:text-white"
            href="/"
          >
            {appName}
          </LocaleLink>
        </div>

        <div className="flex justify-center gap-8 text-center">
          {footerLinks.map((footerLink) => {
            const LinkTag = footerLink.to === '/sitemap.xml' ? Link : LocaleLink

            return (
              <LinkTag
                aria-label={footerLink.title}
                className="gap-2 text-sm text-zinc-600 transition-colors hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-200"
                href={footerLink.to}
                key={footerLink.to}
              >
                {footerLink.title}
              </LinkTag>
            )
          })}
        </div>

        <div className="flex justify-center gap-2">
          {socialLinks.map((socialLink) => (
            <LocaleLink
              aria-label={socialLink.title}
              className="flex size-8 items-center justify-center gap-2 rounded-full text-zinc-500 transition-colors hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-700"
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
