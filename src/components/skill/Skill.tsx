import React, { FC } from 'react'
import Spline from '@splinetool/react-spline'

interface SkillProps {

}

const Skill: FC<SkillProps> = ({ }) => {
    return <div className="w-full min-h-[400px] flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center mt-4 mb-6"            >
            <div
                className='text-4xl md:text-7xl font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-green-400 via-blueTwo to-blue-500
            animate-text'
            >
                <p>MY SKILLS</p>
            </div>
        </div>
        <Spline
            scene="https://prod.spline.design/sb9tBNCHlFG42tXi/scene.splinecode"
        />
    </div>
}

export default Skill