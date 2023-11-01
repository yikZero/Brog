import { BrogLogo } from "@/components/Icons";

export default function PostSkeleton() {
  return (
    <section className="h-72 flex flex-col justify-center items-center gap-4">
      <BrogLogo className="w-12 h-12 fill-gray-300 dark:fill-gray-700 animate-pulse"/>
      <div className="text-base text-gray-600 dark:text-gray-400">加载中...</div>
    </section>
  );
}
