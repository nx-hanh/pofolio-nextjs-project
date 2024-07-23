"use client";
import ProjectCard from "@/components/projectsPage/ProjectCard";
import React, { FC } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface ListProjectProps {
  projects: Project[];
}

const ListProject: FC<ListProjectProps> = ({ projects }) => {
  return (
    <section>
      <ResponsiveMasonry columnsCountBreakPoints={{ 450: 1, 850: 2, 1250: 3 }}>
        <Masonry className="flex justify-center items-start">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
};

export default ListProject;
