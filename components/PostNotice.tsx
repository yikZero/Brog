"use client";

import BrogConfig from "@/brog.config";

export default function PostNotice({ date }: { date: string }) {
  const postDate = new Date(date);
  const currentDate = new Date();

  const differenceInTime = currentDate.getTime() - postDate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

  if (differenceInDays <= Number(BrogConfig.ARTICLE_EXPIRY_DAYS)) {
    return null;
  }

  return (
    <>
      <blockquote className="not-prose p-3 text-sm border border-blue-300 dark:border-blue-800 rounded bg-blue-50 dark:bg-blue-950/90">
        <p className="text-blue-800 dark:text-blue-200">
          本文最后更新于{" "}<strong className="font-semibold">{differenceInDays}</strong>{" "}天前，文中所描述的信息可能已发生改变，请谨慎参考。
        </p>
      </blockquote>
    </>
  );
}
