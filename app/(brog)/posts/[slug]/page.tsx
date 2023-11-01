import BrogConfig from "@/brog.config";
import Post from "@/components/Post";
import { getPostPaths, getPost } from "@/sanity/lib/queries";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  const posts = await getPostPaths();
  return posts;
}

async function fetchPost(params: any) {
  const post = await getPost(params.slug);
  return post;
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
