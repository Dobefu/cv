import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  pageExtensions: ['md', 'mdx', 'tsx'],
  poweredByHeader: false,
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

const withMDX = createMDX({})

export default withMDX(nextConfig)
