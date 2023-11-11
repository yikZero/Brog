// @ts-nocheck
import type { MDXComponents } from "mdx/types";

import Link from "next/link";
import Image from "next/image";

function clsx(...args: any) {
  return args.filter(Boolean).join(" ");
}

const mdxComponents: MDXComponents = {
  a: ({ className, ...props }) => (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "hover:text-blue-600 dark:hover:text-blue-500 transition ease-in-out duration-300",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code className={clsx("not-prose", className)} {...props}></code>
  ),
  img: ({ className, ...props }) => (
    <Image
      alt={props.alt || ""}
      width={0}
      height={0}
      sizes="100vw"
      className={clsx(
        "w-full h-auto m-0 drop-shadow-sm rounded dark:brightness-90 dark:transition-[filter] dark:hover:brightness-100",
        className
      )}
      placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAAGQAQMAAAB28iHQAAAAA1BMVEXt7e0zK21NAAAAOElEQVR42u3BAQEAAACCoP6vbojAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEg7ixAAAXqv4zAAAAAASUVORK5CYII="
      {...props}
    />
  ),
};

export default mdxComponents;
