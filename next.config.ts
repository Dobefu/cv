import bundleAnalyzer from '@next/bundle-analyzer'
import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

let nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
  poweredByHeader: false,
  publicRuntimeConfig: {
    appName: process.env.APP_NAME ?? '',
  },
  compiler: {
    removeConsole: {
      exclude: ['warn', 'error'],
    },
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
