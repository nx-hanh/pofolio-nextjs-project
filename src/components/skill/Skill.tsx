import React, { FC, Suspense } from 'react'
const Spline = React.lazy(() => import('@splinetool/react-spline'))
import Loading from '@/components/common/Loading'

interface SkillProps {

}

const Skill: FC<SkillProps> = ({ }) => {
    return <div className="w-full min-h-[4[00px] flex flex-col justify-center items-center">
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
        <Suspense fallback={<Loading />}>
            <Spline
                scene="https://prod.spline.design/sb9tBNCHlFG42tXi/scene.splinecode"
            />
        </Suspense>
    </div>
}

export default Skill