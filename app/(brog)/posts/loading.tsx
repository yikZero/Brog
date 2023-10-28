import { BrogLogo } from "@/app/components/Icons";

export default function PostSkeleton() {
  return (
    <section className="h-72 flex flex-col justify-center items-center gap-4">
      <BrogLogo className="w-12 h-12 fill-gray-100 dark:fill-gray-900 animate-pulse"/>
      <div className="text-base text-gray-700 dark:text-gray-300">文章内容加载中...</div>
    </section>
  );
}
