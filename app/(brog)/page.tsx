import BrogConfig from "../../brog.config";
import Profile from "../components/Profile";
import Title from "../components/Title";
import type { Metadata } from "next";

import BlogPosts from "../components/BlogPosts";
import BlogProjects from "../components/BlogProjects";

export const metadata: Metadata = {
  title: `首页｜${BrogConfig.WEB_TITLE}`,
};

export default function Home() {
  return (
    <>
      <Profile />
      <section className="HomepagePosts">
        <Title title="文章" href="/posts" />
        <BlogPosts />
      </section>
      <section className="HomepageProjects">
        <Title title="项目" href="/projects" />
        <BlogProjects />
      </section>
    </>
  );
}

export const revalidate = 3600;
