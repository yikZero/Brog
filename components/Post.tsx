import { type Post } from "@/sanity/schemas/post";
import { PortableText } from "@portabletext/react";
import components from "@/components/PortableTextComponents";

export default function PostPage({ post }: { post: Post }) {
  const { title, publishedAt, categories, body } = post;

  return (
    <main className="prose dark:prose-invert">
      <section className="flex flex-col border-b border-gray-200 dark:border-gray-800">
        <h1 className="leading-tight mb-4">{title}</h1>
        <div className="flex flex-row gap-4">
          <div className="text-gray-600 dark:text-gray-400">
            {publishedAt.toLocaleString()}
          </div>
          <div className="flex flex-row gap-2 mb-4">
            {categories.map((category) => (
              <div
                key={category}
                className="text-gray-700 dark:text-gray-300 rounded"
              >
                #{category}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pt-8">
        {body ? <PortableText value={body} components={components} /> : null}
      </section>
    </main>
  );
}
