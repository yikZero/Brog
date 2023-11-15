import BrogConfig from "@/brog.config";
import ProjectItem from "@/components/project/ProjectItem";
import { compareDesc } from "date-fns";
import { allProjects, Project } from "contentlayer/generated";

export default async function BlogProjects({
  limit = BrogConfig.HOMEPAGE_PROJECT_NUMBER,
}) {

  const proejcts = allProjects.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

  return (
    <>
      {proejcts.slice(0, Number(limit)).map((project: Project) => (
        <ProjectItem key={project._id} project={project} />
      ))}
    </>
  );
}
