import BrogConfig from "@/brog.config";
import Post from "@/components/Post";
import { getPostPaths, getPost } from "@/sanity/lib/queries";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  const posts = await getPostPaths();
  return posts;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  return {
    title: `${post.title}｜${BrogConfig.WEB_TITLE}`,
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  return <Post post={post} />;
}

export const revalidate = 3600;
