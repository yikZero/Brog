import type { Metadata } from "next";
import BrogConfig from "@/brog.config";
import BlogProjects from "@/components/project/BlogProjects";
import { Suspense } from "react";
import Loadings from "@/components/Loadings";

export const metadata: Metadata = {
  title: `项目列表｜${BrogConfig.WEB_TITLE}`,
};

export default async function ProjectsPage() {
  return (
    <>
      <section className="ProjectsPage">
        <Suspense fallback={<Loadings limit={4} />}>
          <BlogProjects limit={20} />
        </Suspense>
      </section>
    </>
  );
}
