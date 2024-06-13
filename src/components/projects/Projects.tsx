import ProjectList from '@/components/projects/ProjectList'
import React, { FC } from 'react'

interface ProjectsProps {

}

const Projects: FC<ProjectsProps> = ({ }) => {
    return <div
        id='projects'
        className='w-full h-full flex flex-col justify-center items-center mt-8'
    >
        <div className="w-full flex justify-start items-center mt-4 mb-10">
            <div
                className='text-4xl md:text-7xl font-semibold 
      bg-gradient-to-r bg-clip-text  text-transparent 
      from-green-400 via-blueTwo to-blue-500
      animate-text'
            >
                <p>PROJECTS</p>
            </div>
        </div>
        <ProjectList />
    </div>
}

export default Projects