import bundleAnalyzer from '@next/bundle-analyzer'
import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

let nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
  poweredByHeader: false,
  compiler: {
    reactRemoveProperties: true,
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
            exclude: ['warn', 'error'],
          }
        : false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
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
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/en/home',
        destination: '/en',
        statusCode: 301,
      },
      {
        source: '/nl/home',
        destination: '/nl',
        statusCode: 301,
      },
    ]
  },
}

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

nextConfig = withBundleAnalyzer(nextConfig)
nextConfig = withMDX(nextConfig)

const wrappedNextConfig = nextConfig
export default wrappedNextConfig
