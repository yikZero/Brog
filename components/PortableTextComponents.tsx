import { type PortableTextComponents } from "@portabletext/react";
import { PortableTextImage } from "./portable-text/PortableTextImage";
import Link from "next/link";

const PortableTextComponents: PortableTextComponents = {
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
          href={value.href}
          rel={rel}
          target="_blank"
        >
          {children}
        </Link>
      );
    },
  },
  types: {
    image: PortableTextImage,
  },
};

export default PortableTextComponents;
