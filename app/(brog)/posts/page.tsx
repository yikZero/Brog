import Posts from "@/app/components/Posts";
import type { Metadata } from "next";
import BrogConfig from "../../../brog.config";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "next-sanity";
import { postsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: `文章列表｜${BrogConfig.WEB_TITLE}`,
};

export default async function ProjectPage() {

  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });

  return (
    <>
      <section className="ProjectsPage">
        <Posts posts={posts} />
      </section>
    </>
  );
}
