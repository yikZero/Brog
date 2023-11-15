import BrogConfig from "@/brog.config";
import Post from "@/components/post/Post";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

function findPostBySlug(url: string) {
  return allPosts.find(function (post) {
    return post.url === url;
  });
}

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.url,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = findPostBySlug(params.slug);
  if (!post) {
    return {};
  }
  return {
    title: `${post.title}｜${BrogConfig.WEB_TITLE}`,
    description: post.description,
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = findPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const sortedPosts = allPosts.sort(
    (a, b) =>
      new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
  );
  const currentIndex = sortedPosts.findIndex((p) => p.url === post.url);
  const prevPost = sortedPosts[currentIndex + 1] || null;
  const nextPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;

  return <Post post={post} prevPost={prevPost} nextPost={nextPost} />;
}
