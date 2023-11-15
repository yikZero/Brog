const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 允许next/image加载的图片域名
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
  experimental: {
    webpackBuildWorker: true
},
};

module.exports = withContentlayer(nextConfig);
