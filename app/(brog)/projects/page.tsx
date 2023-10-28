import Projects from "@/app/components/Projects";
import type { Metadata } from "next";
import BrogConfig from "../../../brog.config";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "next-sanity";
import { createProjectsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: `项目列表｜${BrogConfig.WEB_TITLE}`,
};

export default async function ProjectPage() {

  const projects = await sanityFetch<SanityDocument[]>({ query: createProjectsQuery() });

  return (
    <>
      <section className="ProjectsPage">
        <Projects projects={projects} />
      </section>
    </>
  );
}
