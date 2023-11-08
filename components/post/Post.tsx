import { Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import DateFormatter from "@/utils/DateFormatter";
import PostNotice from "../PostNotice";
import EntryNavigation from "./EntryNavigation";

import mdxComponents from "./mdxComponents";

export default async function PostPage({ post, prevPost, nextPost }: { post: Post, prevPost: Post | null, nextPost: Post | null }) {
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
        <PostNotice date={post.publishedAt}/>
        <MDXContent components={mdxComponents} />
        <EntryNavigation prevPost={prevPost} nextPost={nextPost} />
      </section>
    </main>
  );
}
