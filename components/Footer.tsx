import Link from "next/link";
import BrogConfig from "@/brog.config";
import { BrogLogo } from "@/components/Icons";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-row justify-between pt-4 pb-8 font-normal text-sm border-t border-gray-200 dark:border-gray-800">
        <div className="text-gray-500 dark:text-gray-600">Copyright {BrogConfig.SINCE || new Date().getFullYear()} {BrogConfig.AUTHOR}</div>
        <div className="flex flex-row justify-center gap-1 group">
          <div className="text-gray-500 dark:text-gray-600">Powered by</div>
          <div className="flex flex-row gap-[2px] items-center">
            <BrogLogo className="w-3 h-3 fill-gray-400 group-hover:fill-blue-500 dark:fill-gray-600 group-hover:dark:fill-blue-500"/>
            <Link href="https://github.com/yikZero/Brog-Sanity" target="_blank" className="text-gray-500 group-hover:text-blue-500 dark:text-gray-600 font-normal text-sm">Brog</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
