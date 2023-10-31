import BrogConfig from "@/brog.config";
import ProjectItem from "./ProjectItem";
import { getProjects } from "@/sanity/lib/queries";
import { type Project } from "@/sanity/schemas/project";

export default async function BlogProjects({
  limit = BrogConfig.HOMEPAGE_PROJECT_NUMBER,
}) {
  const projects = await getProjects(limit);

  return (
    <>
      {projects.map((project: Project) => (
        <ProjectItem key={project._id} project={project} />
      ))}
    </>
  );
}
