import { type PortableTextComponents } from "@portabletext/react";
import Link from "next/link";

const components: PortableTextComponents = {
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          className="text-blue-500 hover:underline hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          href={value.href}
          rel={rel}
          target="_blank"
        >
          {children}
        </Link>
      );
    },
  },
};

export default components;
