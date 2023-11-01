import BrogConfig from "@/brog.config";
import Profile from "@/components/Profile";
import Title from "@/components/Title";
import type { Metadata } from "next";
import { Suspense } from "react";

import BlogPosts from "@/components/BlogPosts";
import BlogProjects from "@/components/BlogProjects";
import Loadings from "@/components/Loadings";

export const metadata: Metadata = {
  title: `首页｜${BrogConfig.WEB_TITLE}`,
};

export default function Home() {
  return (
    <>
      <Profile />
      <section className="HomepagePosts">
        <Title title="文章" href="/posts" />
        <Suspense
          fallback={<Loadings limit={BrogConfig.HOMEPAGE_POST_NUMBER} />}
        >
          <BlogPosts />
        </Suspense>
      </section>
      <section className="HomepageProjects">
        <Title title="项目" href="/projects" />
        <Suspense
          fallback={<Loadings limit={BrogConfig.HOMEPAGE_PROJECT_NUMBER} />}
        >
          <BlogProjects />
        </Suspense>
      </section>
    </>
  );
}

export const revalidate = 3600;
