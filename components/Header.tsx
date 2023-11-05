import Link from "next/link";
import BrogConfig from "@/brog.config";
import MenuItem from "@/components/Menu";
// import { getAllMenus } from "@/sanity/lib/queries";

export default function Header() {
  
  const menus = [
    { title: "文章", slug: "posts" },
    { title: "项目", slug: "projects" },
  ];

  return (
    <>
      <header className="flex flex-row justify-between w-full pt-8 sm:pt-16 items-center">
        <Link
          className="text-gray-900 hover:text-gray-800 dark:text-gray-100 hover:dark:text-gray-200 font-bold text-xl py-2"
          href="/"
        >
          {BrogConfig.BLOG_TITLE}
        </Link>
        <div className="flex flex-row gap-5 text-sm">
          {menus.map((menu, index) => (
            <MenuItem key={index} menu={menu} />
          ))}
        </div>
      </header>
    </>
  );
}