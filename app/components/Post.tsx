"use client";

import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

export default function Post({ post }: { post: SanityDocument }) {
  return (
    <main className="container mx-auto prose prose-lg p-4">
      <h1>{post.title}</h1>
      {post?.body ? <PortableText value={post.body} /> : null}
    </main>
  );
}