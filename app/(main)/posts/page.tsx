import type { Metadata } from "next";
import BrogConfig from "@/brog.config";
import BlogPosts from "@/components/post/BlogPosts";
import { Suspense } from "react";
import Loadings from "@/components/Loadings";

export const metadata: Metadata = {
  title: `文章列表｜${BrogConfig.WEB_TITLE}`,
};

export default async function PostsPage() {
  return (
    <>
      <section className="PostsPage">
        <Suspense fallback={<Loadings limit={4} />}>
          <BlogPosts limit={20} />
        </Suspense>
      </section>
    </>
  );
}