import Link from "next/link";
import type { SanityDocument } from "next-sanity";

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {
  return (
    <>
      {posts.map((post) => (
        <Link
          key={post._id}
          href={`/posts/${post.slug.current}`}
          className="flex flex-row gap-6 sm:gap-12 justify-between items-center text-sm rounded group py-4"
        >
          <div className="flex flex-col gap-1">
            <div className="text-gray-800 group-hover:text-gray-700 dark:text-gray-200 dark:group-hover:text-gray-300 font-medium line-clamp-2">
              {post.title}
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-normal line-clamp-1">
              {post.description}
            </div>
          </div>
          <div className="text-gray-600 dark:text-gray-400 font-normal whitespace-nowrap">
            {post.publishedAt}
          </div>
        </Link>
      ))}
    </>
  );
}
