import ProjectCard from "@/components/projectsPage/ProjectCard";
import React, { FC } from "react";

interface ListProjectProps {
  projects: Project[];
}

const ListProject: FC<ListProjectProps> = ({ projects }) => {
  return (
    <section>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
};

export default ListProject;
