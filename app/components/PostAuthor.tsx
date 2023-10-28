import BrogConfig from "@/brog.config";
import { md5 } from "js-md5";
import Link from "next/link";
import Image from "next/image";

export default function PostAuthor({ publishedAt }: { publishedAt: Date }) {

  const emailHash = md5(BrogConfig.CONTACT_EMAIL);

  return (
    <>
      <div className="not-prose flex flex-row gap-3 text-gray-500 dark:text-gray-500 text-base items-center">
        <Link
          className="flex flex-row gap-1 hover:opacity-90"
          href={`mailto:${BrogConfig.CONTACT_EMAIL}`}
        >
          <Image
            alt={BrogConfig.AUTHOR}
            width={24}
            height={24}
            className="rounded-full"
            src={`https://gravatar.com/avatar/${emailHash}`}
          />
          <div>{BrogConfig.AUTHOR}</div>
        </Link>
        <hr className="w-0 h-4 border-[0.5px] border-gray-200 dark:border-gray-800" />
        <div>{publishedAt.toLocaleString()}</div>
      </div>
    </>
  );
}
