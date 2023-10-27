import Link from "next/link";

interface MenuProps {
  title: string;
  slug: string;
}

export default function MenuList({ title, slug }: MenuProps) {
  return (
    <>
      <Link
        href={slug.startsWith("http") ? `${slug}` : `/${slug}`}
        target={slug.startsWith("http") ? "_blank" : "_self"}
        className="text-gray-700 hover:text-gray-500 dark:text-gray-300 hover:dark:text-gray-200 font-normal py-3"
      >
        {title}
      </Link>
    </>
  );
}
