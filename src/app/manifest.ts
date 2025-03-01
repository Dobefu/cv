import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  const appName = process.env.NEXT_PUBLIC_APP_NAME

  const purpose = 'maskable'

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
        src: '/logo-512.png',
        purpose,
        sizes: '512x512',
      },
      {
        src: '/logo-512.png',
        sizes: '512x512',
      },
      {
        src: '/logo-384.png',
        purpose,
        sizes: '384x384',
      },
      {
        src: '/logo-256.png',
        purpose,
        sizes: '256x256',
      },
      {
        src: '/logo-192.png',
        purpose,
        sizes: '192x192',
      },
      {
        src: '/logo-144.png',
        purpose,
        sizes: '144x144',
      },
      {
        src: '/logo-128.png',
        purpose,
        sizes: '128x128',
      },
      {
        src: '/logo-96.png',
        purpose,
        sizes: '96x96',
      },
      {
        src: '/logo-72.png',
        purpose,
        sizes: '72x72',
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
