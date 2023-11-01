import BrogConfig from "@/brog.config";
import PostItem from "@/components/PostItem";
import { getPosts } from "@/sanity/lib/queries";
import { type Post } from "@/sanity/schemas/post";

export default async function BlogPosts({
  limit = BrogConfig.HOMEPAGE_POST_NUMBER,
}) {
  const posts = await getPosts(limit);

  return (
    <>
      {posts.map((post: Post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </>
  );
}
