import { SanityDocument } from "next-sanity";
import BrogConfig from "@/brog.config";
import Post from "@/app/components/Post";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { client } from "@/sanity/lib/client";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts;
}

async function fetchPost(params: any) {
  return await sanityFetch<SanityDocument>({ query: postQuery, params });
}

export async function generateMetadata({ params }: { params: any }) {
  const post = await fetchPost(params);
  return {
    title: `${post.title}｜${BrogConfig.WEB_TITLE}`,
  };
}

export default async function PostPage({ params }: { params: any }) {
  const post = await fetchPost(params);
  return <Post post={post} />;
}
