import ProjectList from "@/components/projects/ProjectList";
import Title from "@/components/projects/Title";
import React, { FC } from "react";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div
      id="projects"
      className="w-full h-full flex flex-col justify-center items-center mt-8"
    >
      <Title />
      <ProjectList />
    </div>
  );
};

export default Projects;
