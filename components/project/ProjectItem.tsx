import Link from "next/link";
import { LinkIcon } from "@/components/Icons";
import { Project } from "contentlayer/generated";
import DateFormatter from "@/utils/DateFormatter";

export default function PostItem ({ project }: { project: Project }) {

  return (
    <>
        <Link
          href={project.url}
          target="_blank"
          className="flex flex-row gap-6 sm:gap-12 justify-between items-center text-sm rounded group py-5"
        >
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-1 items-center">
              <div className="text-[0.9375rem] text-gray-800 group-hover:text-gray-700 dark:text-gray-200 dark:group-hover:text-gray-300 font-medium line-clamp-2">
                {project.title}
              </div>
              <LinkIcon className="w-4 h-4 fill-gray-600 dark:fill-gray-500" />
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-normal line-clamp-1">
              {project.description}
            </div>
          </div>
          <div className="text-gray-600 dark:text-gray-400 font-normal whitespace-nowrap">
            <DateFormatter date={project.publishedAt} showDay={false} />
          </div>
        </Link>
    </>
  );
}
