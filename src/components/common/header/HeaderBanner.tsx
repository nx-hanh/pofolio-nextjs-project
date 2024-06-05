import BannerBg from '@/components/common/header/clip_path_bg/BannerBg'
import React, { FC, Suspense } from 'react'
import Spline from '@splinetool/react-spline'
import { SplineEvent } from '@splinetool/react-spline'

interface HeaderBannerProps {

}

const HeaderBanner: FC<HeaderBannerProps> = ({ }) => {
    const content = {
        title: 'Hello 👋 my name is',
        name: 'Nguyen Xuan Hanh',
    }


    return <div
        className='relative flex flex-row gap-3 h-fit'
    >
        <BannerBg />
        <div className='w-full md:w-fit flex flex-col items-start justify-start px-4  py-8 gap-3 '>
            <div className='relative'>
                <div
                    className='text-4xl md:text-7xl font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-green-400 via-blueTwo to-blue-500
            animate-text'
                >
                    <p>CREATIVE</p>
                    <p>DEVELOPER</p>
                </div>
                <div className='w-10 h-10 md:w-20 md:h-20 flex items-center justify-center text-2xl md:text-4xl absolute top-0 right-0 animate-spin-slow pt-[1px]'>🌟</div>
            </div>
            <div
                className='text-2xl md:text-4xl font-bold mt-2 gap-2 mb-6'
            >
                <span>{content.title}</span>
                <br />
                <span className='text-3xl md:text-5xl text-transparent 
            bg-gradient-to-tr from-blueOne via-blueTwo to-blueThree bg-clip-text
            '>{content.name}</span>
            </div>
        </div>
        <div className='hidden md:flex w-1/2 flex-1 h-full cursor-pointer'>
            <Spline
                scene="https://prod.spline.design/8EkkD7ey7Xfz-M-O/scene.splinecode"
            />
        </div>
    </div >
}

export default HeaderBanner