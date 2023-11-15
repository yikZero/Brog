"use client";
import tocbot from "tocbot";
import { useEffect } from "react";

export default function Toc() {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".post-content",
      headingSelector: "h2, h3",
      linkClass: "toc-link",
      activeLinkClass: "toc-active-link",
      listClass: "toc-list",
    });
    return () => tocbot.destroy();
  }, []);
  return (
    <>
      <aside className="sticky h-full top-8 hidden md:block not-prose transition duration-300">
        <div className="text-gray-600 font-medium mb-2 px-2 text-sm leading-6 dark:text-gray-300">
          目录
        </div>
        <div className="toc w-56">
        </div>
      </aside>
    </>
  );
}
