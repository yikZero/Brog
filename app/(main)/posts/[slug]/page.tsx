import BrogConfig from "@/brog.config";
import Post from "@/components/post/Post";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.url,
  }));
}

function findPostBySlug(url: string) {
  return allPosts.find(function(post) { return post.url === url; });
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = findPostBySlug(params.slug);
  return {
    title: `${post!.title}｜${BrogConfig.WEB_TITLE}`,
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = findPostBySlug(params.slug);
  if (!post) {
    notFound();
  }
  return <Post post={post} />;
}
