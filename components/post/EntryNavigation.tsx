import { Post } from "contentlayer/generated";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function EntryNavigation({
  prevPost,
  nextPost,
}: {
  prevPost: Post | null;
  nextPost: Post | null;
}) {
  
  if (!prevPost && !nextPost) {
    return null;
  }

  return (
    <>
      <div className="not-prose flex flex-row justify-between mt-16">
        {prevPost ? (
          <Link
            href={`/posts/${prevPost.url}`}
            className="group no-underline flex flex-row justify-start items-end gap-1"
          >
            <div className="w-5 h-5 flex justify-center items-center">
              <ChevronLeft className="w-4 h-4 group-hover:text-blue-600 group-hover:dark:blue-500" />
            </div>
            <div className="flex flex-col">
              <div className="text-xs text-gray-400 dark:text-gray-600 pb-2">
                上一篇
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 group-hover:dark:blue-500">
                {prevPost.title}
              </div>
            </div>
          </Link>
        ) : (
          <div></div>
        )}

        {nextPost ? (
          <Link
            href={`/posts/${nextPost.url}`}
            className="group no-underline flex flex-row justify-end items-end gap-1"
          >
            <div className="flex flex-col items-end">
              <div className="text-xs text-gray-400 dark:text-gray-600 pb-2">
                下一篇
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 group-hover:dark:blue-500">
                {nextPost.title}
              </div>
            </div>
            <div className="w-5 h-5 flex justify-center items-center">
              <ChevronRight className="w-4 h-4 group-hover:text-blue-600 group-hover:dark:blue-500" />
            </div>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
