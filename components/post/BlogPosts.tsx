import BrogConfig from "@/brog.config";
import PostItem from "@/components/post/PostItem";
import { compareDesc } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

export default async function BlogPosts({
  limit = BrogConfig.HOMEPAGE_POST_NUMBER,
}) {

  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

  return (
    <>
      {posts.slice(0, Number(limit)).map((post: Post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </>
  );
}
