import Link from "next/link";
import BrogConfig from "../../brog.config";
import MenuList from "./menuList";

export default function Header({ menus = [] }: any) {
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
          {menus
            .sort(
              (a: any, b: any) =>
                new Date(b.properties?.date?.date.start).getTime() -
                new Date(a.properties?.date?.date.start).getTime()
            )
            .map((menu:any) => (
              <MenuList
                key={menu.id}
                title={menu.properties?.title?.title[0].text.content}
                slug={menu.properties?.slug?.rich_text[0].text.content}
              />
            ))}
        </div>
      </header>
    </>
  );
}
