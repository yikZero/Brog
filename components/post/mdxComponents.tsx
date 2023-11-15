// @ts-nocheck
import type { MDXComponents } from "mdx/types";

import Link from "next/link";

function clsx(...args: any) {
  return args.filter(Boolean).join(" ");
}

const mdxComponents: MDXComponents = {
  a: ({ className, ...props }) => (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "not-prose text-blue-600 dark:text-blue-500 hover:underline hover:text-blue-500 dark:hover:text-blue-400 transition ease-in-out duration-300",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code className={clsx("not-prose", className)} {...props}></code>
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={clsx(
        "w-full h-auto m-0 drop-shadow-sm rounded dark:brightness-90 dark:transition-[filter] dark:hover:brightness-100",
        className
      )}
      decoding="async"
      loading="lazy"
      alt={alt}
      {...props}
    />
  ),
};

export default mdxComponents;
