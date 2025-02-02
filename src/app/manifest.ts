import type { MetadataRoute } from 'next'
import getConfig from 'next/config'

export default function manifest(): MetadataRoute.Manifest {
  const { publicRuntimeConfig } = getConfig()
  const appName = publicRuntimeConfig.appName || ''

  return {
    name: appName,
    short_name: appName,
    description: '',
    start_url: '/',
    display: 'standalone',
    background_color: 'oklch(.92 .004 286.32)',
    theme_color: '#0d6488',
    icons: [
      {
        src: '/logo-maskable.png',
        purpose: 'maskable',
        type: 'image/png',
      },
      {
        src: '/logo-72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: '/logo-96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/logo-128.png',
        sizes: '128x128',
        type: 'image/png',
      },
      {
        src: '/logo-144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/logo-152.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        src: '/logo-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo-256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: '/logo-384.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: '/logo-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
