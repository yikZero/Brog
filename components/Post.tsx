import PostAuthor from "@/components/PostAuthor";
import { type Post } from "@/sanity/schemas/post";
import { PortableText } from "@portabletext/react";
import components from "@/components/PortableTextComponents";

export default function PostPage({ post }: { post: Post }) {
  const { title, publishedAt, body } = post;

  return (
    <main className="prose dark:prose-invert">
      <h1>{title}</h1>
      <PostAuthor publishedAt={publishedAt} />
      {body ? <PortableText value={body} components={components} /> : null}
    </main>
  );
}
