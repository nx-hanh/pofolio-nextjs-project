import ListProject from "@/components/projectsPage/ListProject";
import Title from "@/components/projectsPage/Title";
import { getProjects } from "@/lib/actions/project.actions";
import React, { FC } from "react";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = async () => {
  const projects = await getProjects();
  return (
    <main>
      {/* title */}
      <Title
        title="-- Projects --"
        subtitle="Things I've built so far – check them out!"
      />
      {/* project cards */}
      <ListProject projects={projects} />
    </main>
  );
};

export default Projects;
