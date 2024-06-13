import ProjectCard from '@/components/projects/ProjectCard'
import React, { FC } from 'react'
import { ProjectsValue as Data } from '@/lib/config'
import Project from '@/types/ProjectInfo'
interface ProjectListProps {

}

const ProjectList: FC<ProjectListProps> = ({ }) => {
  const data = Data.items as Project[]
  return <div
    className='w-full max-w-full h-[450px] flex flex-row justify-start items-center overflow-x-auto gap-8'
  >
    {
      data.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))
    }
  </div>
}

export default ProjectList