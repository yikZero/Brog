import { Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";
import { format, parseISO } from "date-fns";
import Link from "next/link";

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

export default async function PostPage({ post }: { post: Post }) {
  
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <main className="prose dark:prose-invert">
      <section className="flex flex-col border-b border-gray-200 dark:border-gray-800">
        <h1 className="leading-tight mb-4">{post.title}</h1>
        <div className="flex flex-row gap-4">
          <div className="text-gray-600 dark:text-gray-400 mb-4">
            {format(parseISO(post.publishedAt), 'yyyy-MM-dd')}
          </div>
          {post.categories && (
            <div className="flex flex-row gap-2">
              {post.categories.map((category) => (
                <div
                  key={category}
                  className="text-gray-700 dark:text-gray-300 rounded"
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
