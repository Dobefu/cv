import type { NextConfig } from 'next'
import { fetchLocales } from './src/fetch-locales'

const { defaultLocale, locales } = fetchLocales()

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    DEFAULT_LOCALE: defaultLocale ?? 'en',
    LOCALES: JSON.stringify(locales),
  },
  publicRuntimeConfig: {
    appName: process.env.APP_NAME ?? '',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ]
  },
}

export default nextConfig
