import Link from "next/link";
import BrogConfig from "../../brog.config";
import MenuItem from "./Menu";
import { getAllMenus } from "@/sanity/lib/queries";

export default async function Header() {
  
  const menus = await getAllMenus();

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
          {menus.map((menu) => (
            <MenuItem key={menu._id} menu={menu} />
          ))}
        </div>
      </header>
    </>
  );
}

export const revalidate = 60;