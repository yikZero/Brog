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
    code:(props) => (
      <code className="not-prose text-sm inline-block text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded py-0.5 px-1 m-0" {...props}></code>
    ),
    pre: (props) => (
      <pre className="dark:bg-gray-900 drop-shadow" {...props}></pre>
    ),
    // @ts-expect-error
    img: (props) => <Image alt={props.alt || ""} width={0} height={0} sizes="100vw" className="w-full h-auto m-0 drop-shadow-sm rounded dark:brightness-90 dark:transition-[filter] dark:hover:brightness-100" placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAAGQAQMAAAB28iHQAAAAA1BMVEXt7e0zK21NAAAAOElEQVR42u3BAQEAAACCoP6vbojAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEg7ixAAAXqv4zAAAAAASUVORK5CYII=" {...props} />,
}

export default mdxComponents;