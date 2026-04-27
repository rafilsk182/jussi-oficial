import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  ...(isProd && { output: 'export' }),
  trailingSlash: true,
  basePath: isProd ? '/jussi-oficial' : '',
  assetPrefix: isProd ? '/jussi-oficial/' : '',
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
}
export default nextConfig
