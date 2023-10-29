import PostAuthor from "./PostAuthor";
import { type Post } from "@/sanity/schemas/post";
import { PortableText } from "@portabletext/react";

export default function PostPage({ post }: { post: Post }) {

  const {title, publishedAt, body } = post

  return (
    <main className="container mx-auto prose dark:prose-invert">
      <h1>{title}</h1>
      <PostAuthor publishedAt={publishedAt}/>
      {body ? <PortableText value={body} /> : null}
    </main>
  );
}