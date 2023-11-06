import type { MDXComponents } from "mdx/types";

import Link from "next/link";
import Image from "next/image";

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
  pre: (props) => (
    <pre
      className="border-gray-400 dark:bg-gray-900 border dark:border-gray-800"
      {...props}
    ></pre>
  ),
  img: (props) => (
    <Image src={props.src as string} alt={props.alt || ''} width={700} height={400} className="m-0 w-full h-auto drop-shadow-sm rounded dark:brightness-90 dark:transition-[filter] dark:hover:brightness-100" placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAAGQAQMAAAB28iHQAAAAA1BMVEXt7e0zK21NAAAAOElEQVR42u3BAQEAAACCoP6vbojAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEg7ixAAAXqv4zAAAAAASUVORK5CYII=" />
  ),

};

export default mdxComponents;
