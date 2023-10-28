import Profile from "../components/Profile";
import BrogConfig from "../../brog.config";
import Posts from "../components/Posts";
import type { Metadata } from "next";
import { postsQuery, projectsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import Title from "../components/Title";
import Projects from "../components/Projects";

export const metadata: Metadata = {
  title: `首页｜${BrogConfig.WEB_TITLE}`,
};

export default async function Home() {
  
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
  const projects = await sanityFetch<SanityDocument[]>({ query: projectsQuery });

  return (
    <>
      <Profile />
      <section className="HomepagePosts">
        <Title
          title="文章"
          href="/posts"
          showMore={posts.length > Number(BrogConfig.HOMEPAGE_POST_NUMBER)}
        />
        <Posts posts={posts} />
      </section>
      <section className="HomepagePosts">
        <Title
          title="项目"
          href="/projects"
          showMore={
            projects.length > Number(BrogConfig.HOMEPAGE_PROJECT_NUMBER)
          }
        />
        <Projects projects={projects} />
      </section>
    </>
  );
}
