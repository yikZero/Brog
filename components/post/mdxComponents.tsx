import type { MDXComponents } from "mdx/types";

import Link from "next/link";
import Image from "next/image";

const ResponsiveImage = (props: any) => (
  <>
    <Image
      alt={props.alt}
      width={0}
      height={0}
      sizes="100vw"
      placeholder="empty"
      {...props}
      className="m-0 w-full h-auto drop-shadow-sm rounded"
    />
    <figcaption>{props.alt}</figcaption>
  </>
);

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => (
    <Link
      href={href as string}
      rel="noopener noreferrer"
      className="hover:text-blue-600 dark:hover:text-blue-500 transition ease-in-out duration-300"
    >
      {children}
    </Link>
  ),
  img: ResponsiveImage,
  pre: (props) => (
    <pre
      className="border-gray-400 dark:bg-gray-900 border dark:border-gray-800"
      {...props}
    ></pre>
  ),
};

export default mdxComponents;
