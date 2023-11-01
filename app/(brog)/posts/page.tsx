import type { Metadata } from "next";
import BrogConfig from "@/brog.config";
import BlogPosts from "@/components/BlogPosts";

export const metadata: Metadata = {
  title: `文章列表｜${BrogConfig.WEB_TITLE}`,
};

export default async function PostsPage() {
  return (
    <>
      <section className="PostsPage">
        <BlogPosts limit={20} />
      </section>
    </>
  );
}

export const revalidate = 3600;