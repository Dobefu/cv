import { Icon } from '@iconify/react'
import Link from 'next/link'

type Props = Readonly<{
  appName: string
}>

export default function Footer({ appName }: Props) {
  const footerLinks = [
    {
      title: 'Sitemap',
      to: '/sitemap.xml',
    },
  ]

  const socialLinks = [
    {
      title: 'LinkedIn',
      to: 'https://www.linkedin.com/in/connor-van-spronssen/',
      icon: 'bi:linkedin',
    },
    {
      title: 'Github',
      to: 'https://github.com/Dobefu',
      icon: 'bi:github',
    },
    {
      title: 'Bluesky',
      to: 'https://bsky.app/profile/connor.nl',
      icon: 'simple-icons:bluesky',
    },
    {
      title: 'Gitlab',
      to: 'https://gitlab.com/Dobefu',
      icon: 'bi:gitlab',
    },
    {
      title: 'Drupal',
      to: 'https://drupal.org/u/Dobefu',
      icon: 'simple-icons:drupal',
    },
  ]

  return (
    <footer className="w-full bg-zinc-100 px-4 py-10 shadow-[0_-4px_6px_-1px_rgb(0,0,0,.1)] dark:bg-zinc-950">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-5 text-center md:grid-cols-3">
        <div className="md:text-start">
          <Link
            aria-label={appName}
            className="flex-none text-xl font-semibold text-zinc-800 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="/"
          >
            {appName}
          </Link>
        </div>

        <div className="text-center">
          {footerLinks.map((footerLink) => (
            <Link
              aria-label={footerLink.title}
              className="gap-x-2 text-sm text-gray-500 transition-colors hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href={footerLink.to}
              key={footerLink.to}
            >
              {footerLink.title}
            </Link>
          ))}
        </div>

        <div className="space-x-2 md:text-end">
          {socialLinks.map((socialLink) => (
            <Link
              aria-label={socialLink.title}
              className="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-500 transition-colors hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href={socialLink.to}
              key={socialLink.to}
              target="_blank"
              title={socialLink.title}
            >
              <Icon className="h-5 w-5" icon={socialLink.icon} ssr />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
