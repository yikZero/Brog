import type { Metadata } from "next";
import "./globals.css";
import BrogConfig from "../brog.config";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: BrogConfig.WEB_TITLE,
  description: "Next.js Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-gray-50 dark:bg-gray-950 max-w-2xl flex flex-col gap-16 sm:gap-24 mx-4 sm:mx-auto overflow-y-scroll">
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
