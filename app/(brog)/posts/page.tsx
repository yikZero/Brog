import PostItem from "@/app/components/PostItem";
import { getPosts } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import BrogConfig from "../../../brog.config";


export const metadata: Metadata = {
  title: `文章列表｜${BrogConfig.WEB_TITLE}`,
};

export default async function ProjectPage() {

  const posts = await getPosts();

  return (
    <>
      <section className="ProjectsPage">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </section>
    </>
  );
}

export const revalidate = 3600;