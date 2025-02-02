import type { MetadataRoute } from 'next'
import getConfig from 'next/config'

export default function manifest(): MetadataRoute.Manifest {
  const { publicRuntimeConfig } = getConfig()
  const appName = publicRuntimeConfig.appName

  return {
    name: appName,
    short_name: appName,
    description: '',
    id: '/',
    start_url: '/',
    display: 'standalone',
    background_color: 'oklch(.92 .004 286.32)',
    theme_color: '#0d6488',
    icons: [
      {
        src: '/logo-maskable.png',
        purpose: 'maskable',
        sizes: '512x512',
      },
      {
        src: '/logo-72.png',
        sizes: '72x72',
      },
      {
        src: '/logo-96.png',
        sizes: '96x96',
      },
      {
        src: '/logo-128.png',
        sizes: '128x128',
      },
      {
        src: '/logo-144.png',
        sizes: '144x144',
      },
      {
        src: '/logo-152.png',
        sizes: '152x152',
      },
      {
        src: '/logo-192.png',
        sizes: '192x192',
      },
      {
        src: '/logo-256.png',
        sizes: '256x256',
      },
      {
        src: '/logo-384.png',
        sizes: '384x384',
      },
      {
        src: '/logo-512.png',
        sizes: '512x512',
      },
    ],
    screenshots: [
      {
        src: '/screenshot-wide.png',
        sizes: '1920x1080',
        form_factor: 'wide',
      },
      {
        src: '/screenshot-narrow.png',
        sizes: '480x960',
        form_factor: 'narrow',
      },
    ],
  }
}
