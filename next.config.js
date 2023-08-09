/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    ...nextConfig,
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],    
    formats: ['image/avif', 'image/webp'],
  },
  eslint:{
    ignoreDuringBuilds: true
  }
}
