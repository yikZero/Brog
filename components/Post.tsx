import { type Post } from "@/sanity/schemas/post";
import { PortableText } from "@portabletext/react";
import components from "@/components/PortableTextComponents";

export default function PostPage({ post }: { post: Post }) {
  const { title, publishedAt, body } = post;

  return (
    <main className="prose dark:prose-invert">
      <section className="flex flex-col border-b border-gray-200 dark:border-gray-800">
        <div className="text-gray-600 dark:text-gray-400">
          {publishedAt.toLocaleString()}
        </div>
        <h1 className="leading-tight mb-4">{title}</h1>
      </section>
      <section className="pt-8">
        {body ? <PortableText value={body} components={components} /> : null}
      </section>
    </main>
  );
}
