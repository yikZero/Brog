import BrogConfig from "../../brog.config";
import Profile from "../components/Profile";
import Title from "../components/Title";
import Posts from "../components/Posts";
import Projects from "../components/Projects";
import type { Metadata } from "next";
import { createPostsQuery, postNumberQuery, createProjectsQuery, projectNumberQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
  title: `首页｜${BrogConfig.WEB_TITLE}`,
};

export default async function Home() {
  
  const postsLimit = Number(BrogConfig.HOMEPAGE_POST_NUMBER);
  const projectsLimit = Number(BrogConfig.HOMEPAGE_PROJECT_NUMBER);

  const posts = await sanityFetch<SanityDocument[]>({ query: createPostsQuery(postsLimit) });
  const projects = await sanityFetch<SanityDocument[]>({ query: createProjectsQuery(projectsLimit) });

  const postsNumber = await sanityFetch<number>({ query: postNumberQuery });
  const projectsNumber = await sanityFetch<number>({ query: projectNumberQuery });

  return (
    <>
      <Profile />
      <section className="HomepagePosts">
        <Title
          title="文章"
          href="/posts"
          showMore={postsNumber > postsLimit}
        />
        <Posts posts={posts} />
      </section>
      <section className="HomepageProjects">
        <Title
          title="项目"
          href="/projects"
          showMore={projectsNumber > projectsLimit}
        />
        <Projects projects={projects} />
      </section>
    </>
  );
}

export const revalidate = 60;
