import Link from "next/link";
import type { SanityDocument } from "next-sanity";

export default function Menus({ menus = [] }: { menus: SanityDocument[] }) {
  return (
    <>
      {menus.map((menu) => (
        <Link
          key={menu._id}
          href={
            menu.slug.current.startsWith("http")
              ? `${menu.slug.current}`
              : `/${menu.slug.current}`
          }
          target={menu.slug.current.startsWith("http") ? "_blank" : "_self"}
          className="text-gray-700 hover:text-gray-500 dark:text-gray-300 hover:dark:text-gray-200 font-normal py-3"
        >
          {menu.title}
        </Link>
      ))}
    </>
  );
}
