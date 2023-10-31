import BrogConfig from "../../brog.config";
import Profile from "../components/Profile";
import Title from "../components/Title";
import PostItem from "../components/PostItem";
import ProjectItem from "../components/ProjectItem";
import type { Metadata } from "next";
import {
  getPosts,
  getProjects,
  getPostsCount,
  getProjectsCount,
} from "@/sanity/lib/queries";

import { type Post } from "@/sanity/schemas/post";
import { type Project } from "@/sanity/schemas/project";

export const metadata: Metadata = {
  title: `首页｜${BrogConfig.WEB_TITLE}`,
};

export default async function Home() {
  const postsLimit = Number(BrogConfig.HOMEPAGE_POST_NUMBER);
  const projectsLimit = Number(BrogConfig.HOMEPAGE_PROJECT_NUMBER);

  const posts = await getPosts(postsLimit);
  const projects = await getProjects(projectsLimit);

  const postsNumber = await getPostsCount();
  const projectsNumber = await getProjectsCount();

  return (
    <>
      <Profile />
      <section className="HomepagePosts">
        <Title title="文章" href="/posts" showMore={postsNumber > postsLimit} />
        {posts.map((post: Post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </section>
      <section className="HomepageProjects">
        <Title
          title="项目"
          href="/projects"
          showMore={projectsNumber > projectsLimit}
        />
        {projects.map((project: Project) => (
          <ProjectItem key={project._id} project={project} />
        ))}
      </section>
    </>
  );
}

export const revalidate = 3600;
