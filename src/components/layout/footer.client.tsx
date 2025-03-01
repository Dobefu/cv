'use client'

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
      to: 'https://www.drupal.org/u/Dobefu',
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
      className="bg-white px-4 py-10 dark:bg-black print:hidden"
      style={{ viewTransitionName: 'f' }}
    >
      <div className="center mx-auto flex max-w-5xl justify-between gap-4 max-md:flex-col">
        <LocaleLink aria-label={appName} className="text-xl" href="/">
          {appName}
        </LocaleLink>

        <div className="flex gap-8">
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
              className="center flex size-8 rounded-full text-zinc-500 transition-colors hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700"
              href={socialLink.to}
              key={socialLink.to}
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
