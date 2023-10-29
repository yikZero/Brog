import Link from "next/link";
import { type Post } from "@/sanity/schemas/post";

export default function PostItem({ post }: { post: Post }) {
  const { title, description, publishedAt, slug } = post;

  return (
    <>
      <Link
        href={`/posts/${slug.current}`}
        className="flex flex-row gap-6 sm:gap-12 justify-between items-center text-sm rounded group py-4"
      >
        <div className="flex flex-col gap-1">
          <div className="text-gray-800 group-hover:text-gray-700 dark:text-gray-200 dark:group-hover:text-gray-300 font-medium line-clamp-2">
            {title}
          </div>
          <div className="text-gray-600 dark:text-gray-400 font-normal line-clamp-1">
            {description}
          </div>
        </div>
        <div className="text-gray-600 dark:text-gray-400 font-normal whitespace-nowrap">
          {publishedAt}
        </div>
      </Link>
    </>
  );
}
