import Link from "next/link";

interface PostListProps {
  title: string;
  summary: string;
  date: string;
  slug: string;
}

export default function PostList({
  title,
  summary = "",
  date,
  slug,
}: PostListProps) {
  return (
    <>
      <Link
        href={`/posts/${slug}`}
        className="flex flex-row gap-6 sm:gap-12 justify-between items-center text-sm rounded group py-4"
      >
        <div className="flex flex-col gap-1">
          <div className="text-gray-800 group-hover:text-gray-700 dark:text-gray-200 dark:group-hover:text-gray-300 font-medium line-clamp-2">
            {title}
          </div>
          <div className="text-gray-600 dark:text-gray-400 font-normal line-clamp-1">
            {summary}
          </div>
        </div>
        <div className="text-gray-600 dark:text-gray-400 font-normal whitespace-nowrap">
          {date}
        </div>
      </Link>
    </>
  );
}
