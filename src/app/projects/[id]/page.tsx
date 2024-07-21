import React from "react";
import { getProject, getProjects } from "@/lib/actions/project.actions";
import Title from "@/components/projectsPage/Title";
import ProjectDetail from "@/components/projectsPage/ProjectDetail";

export default async function Page({ params }: { params: { id: string } }) {
  const project = await getProject(params.id);
  return (
    <main>
      <Title title={project.name} subtitle={project.description} />
      <ProjectDetail project={project} />
    </main>
  );
}

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    id: project._id.toString(),
  }));
}
