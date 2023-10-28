import { SanityDocument } from "next-sanity";
import Post from "@/app/components/Post";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { client } from "@/sanity/lib/client";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {

  const posts = await client.fetch(postPathsQuery);

  return posts;
}

export default async function Page({ params }: { params: any }) {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params });

  return <Post post={post} />;
}