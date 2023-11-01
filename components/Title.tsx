import Link from "next/link";

interface TitleProps {
  title: string;
  href?: string;
  showMore?: boolean;
}

export default function Title({ title, href, showMore = true }: TitleProps) {
  return (
    <div className={`flex flex-row justify-between items-center pb-2 ${(!href || !showMore) && 'justify-start'}`}>
      <h1 className="text-base text-gray-800 dark:text-gray-300 font-semibold">{title}</h1>
      {showMore && href && (
        <Link className="text-sm text-gray-600 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 relative before:absolute before:-inset-x-3 before:-inset-y-2" href={href}>更多</Link>
      )}
    </div>
  );
};