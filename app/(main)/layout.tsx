import "../globals.css";
import type { Metadata } from "next";
import BrogConfig from "@/brog.config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(BrogConfig.SITE_URL),
  title: BrogConfig.WEB_TITLE,
  description: BrogConfig.WEB_DESCRIPTION,
  keywords: "yikZero,Zero,Roominess,设计工程师,开发者,设计师,细节控,创新",
  openGraph: {
    title: BrogConfig.WEB_TITLE,
    description: BrogConfig.WEB_DESCRIPTION,
    siteName: BrogConfig.WEB_TITLE,
    locale: 'zh_CN',
    type: 'website',
    url: BrogConfig.SITE_URL,
  },
  alternates: {
    canonical: BrogConfig.SITE_URL,
    types: {
      'application/rss+xml': [{ url: 'rss', title: BrogConfig.WEB_TITLE }],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-white dark:bg-gray-950 max-w-2xl 2xl:max-w-3xl flex flex-col gap-16 sm:gap-24 mx-4 sm:mx-auto overflow-y-scroll">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
