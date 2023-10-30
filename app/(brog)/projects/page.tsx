import ProjectItem from "@/app/components/ProjectItem";
import { getProjects } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import BrogConfig from "../../../brog.config";

export const metadata: Metadata = {
  title: `项目列表｜${BrogConfig.WEB_TITLE}`,
};

export default async function ProjectPage() {

  const projects = await getProjects();
  return (
    <>
      <section className="ProjectsPage">
        {projects.map((project) => (
            <ProjectItem key={project._id} project={project} />
          ))}
      </section>
    </>
  );
}

export const revalidate = 3600;
