import type { Metadata } from "next";
import BrogConfig from "../../../brog.config";
import BlogProjects from "@/app/components/BlogProjects";

export const metadata: Metadata = {
  title: `项目列表｜${BrogConfig.WEB_TITLE}`,
};

export default async function ProjectsPage() {
  return (
    <>
      <section className="ProjectsPage">
        <BlogProjects limit={20} />
      </section>
    </>
  );
}

export const revalidate = 3600;