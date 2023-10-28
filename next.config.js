/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 图片压缩
    formats: ['image/avif', 'image/webp'],
    // 允许next/image加载的图片 域名
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gravatar.com'
      },
      {
        protocol: 'https',
        hostname: '*.yikzero.com'
      },
      {
        protocol: 'https',
        hostname: '*.vercel.app'
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ]
  },
};

module.exports = nextConfig
