import Link from "next/link";
import { LinkIcon } from "@/components/Icons";
import { type Project } from "@/sanity/schemas/project";

export default function PostItem ({ project }: { project: Project }) {

  const { title, description, publishedAt, url } = project;

  return (
    <>
        <Link
          href={url}
          target="_blank"
          className="flex flex-row gap-6 sm:gap-12 justify-between items-center text-sm rounded group py-4"
        >
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-1 items-center">
              <div className="text-gray-800 group-hover:text-gray-700 dark:text-gray-200 dark:group-hover:text-gray-300 font-medium line-clamp-2">
                {title}
              </div>
              <LinkIcon className="w-4 h-4 fill-gray-300 dark:fill-gray-700" />
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-normal line-clamp-1">
              {description}
            </div>
          </div>
          <div className="text-gray-600 dark:text-gray-400 font-normal whitespace-nowrap">
            {publishedAt.slice(0, 7)}
          </div>
        </Link>
    </>
  );
}
