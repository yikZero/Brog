import { type PortableTextComponentProps } from "@portabletext/react";
import Image from "next/image";

export function PortableTextImage({
  value,
}: PortableTextComponentProps<{
  _key: string;
  url: string;
  dimensions: {
    width: number;
    height: number;
  };
  lqip?: string;
  label?: string;
  alt?: string;
}>) {
  return (
    <Image
      src={value.url}
      width={value.dimensions.width}
      height={value.dimensions.height}
      placeholder={value.lqip ? "blur" : "empty"}
      blurDataURL={value.lqip}
      className="relative dark:brightness-75 dark:transition-[filter] dark:hover:brightness-100 rounded-sm"
      alt={value.alt || ""}
      fetchPriority="high"
    />
  );
}
