const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    // 图片压缩
    formats: ["image/avif", "image/webp"],
    // 允许next/image加载的图片 域名
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.yikzero.com",
      },
      {
        protocol: "https",
        hostname: "*.vercel.app",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/rss",
        destination: "/feed.xml",
      },
      {
        source: "/rss.xml",
        destination: "/feed.xml",
      },
      {
        source: "/feed",
        destination: "/feed.xml",
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
