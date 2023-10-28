import PostAuthor from "./PostAuthor";
import { SanityDocument } from "next-sanity";
import { PortableText } from "@portabletext/react";

export default function Post({ post }: { post: SanityDocument }) {
  return (
    <main className="container mx-auto prose dark:prose-invert">
      <h1>{post.title}</h1>
      <PostAuthor publishedAt={post.publishedAt}/>
      {post?.body ? <PortableText value={post.body} /> : null}
    </main>
  );
}