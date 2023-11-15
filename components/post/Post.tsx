import { Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import DateFormatter from "@/utils/DateFormatter";
import PostNotice from "@/components/PostNotice";
import EntryNavigation from "@/components/post/EntryNavigation";
import Toc from "@/components/post/Toc";

import mdxComponents from "./mdxComponents";

export default async function PostPage({
  post,
  prevPost,
  nextPost,
}: {
  post: Post;
  prevPost: Post | null;
  nextPost: Post | null;
}) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="prose dark:prose-invert max-w-none">
      <section className="flex flex-col border-b border-gray-200 dark:border-gray-800">
        <h1 id="post-title" className="leading-tight mb-3 text-[2rem]">{post.title}</h1>
        <div className="flex flex-row gap-4 mb-4 prose-sm select-none">
          <div>
            <DateFormatter date={post.publishedAt} />
          </div>
          {post.categories && (
            <div className="flex flex-row gap-2">
              {post.categories.map((category) => (
                <div key={category}>#{category}</div>
              ))}
            </div>
          )}
        </div>
      </section>
      <main className=" pt-8 sm:text-[0.9375rem] text-base relative">
        <PostNotice date={post.publishedAt} />
        <div className="block sm:flex sm:flex-row sm:gap-24">
          <div className="post-content max-w-2xl 2xl:max-w-3xl">
            <MDXContent components={mdxComponents} />
          </div>
          <Toc />
        </div>
        <EntryNavigation prevPost={prevPost} nextPost={nextPost} />
      </main>
    </article>
  );
}
