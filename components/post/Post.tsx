import { Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import DateFormatter from "@/utils/DateFormatter";

import mdxComponents from "./mdxComponents";

export default async function PostPage({ post }: { post: Post }) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <main className="prose dark:prose-invert">
      <section className="flex flex-col border-b border-gray-200 dark:border-gray-800">
        <h1 className="leading-tight mb-2">{post.title}</h1>
        <div className="flex flex-row gap-4 mb-4 prose-sm select-none">
          <div>
            <DateFormatter date={post.publishedAt} />
          </div>
          {post.categories && (
            <div className="flex flex-row gap-2">
              {post.categories.map((category) => (
                <div
                  key={category}
                >
                  #{category}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="pt-8">
        <MDXContent components={mdxComponents} />
      </section>
    </main>
  );
}
