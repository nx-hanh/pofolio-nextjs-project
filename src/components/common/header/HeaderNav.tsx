import React, { FC } from 'react'
import Navbar from '@/components/common/header/Navbar'
import Image from 'next/image'
import LogoBg from '@/components/common/header/clip_path_bg/LogoBg'

interface HeaderNavProps {

}

const HeaderNav: FC<HeaderNavProps> = ({ }) => {
    return <div
        className='flex flex-row items-end justify-between w-full'
    >
        <div className="flex h-full gap-3">
            {/* logo */}
            <div className='relative w-40 h-24'>
                <Image src={'/logo-2.svg'} alt="logo" 
                    width={160} height={160}
                    className='invert dark:invert-0
                        absolute -bottom-2 right-4 
                    '
                />
                <LogoBg />
            </div>
            {/* navbar */}
            <Navbar />
        </div>
        {/* contact button */}
        <div
            className='hidden md:flex justify-center items-center p-[2px] bg-gradient-to-r from-blueOne via-blueThree to-blueTwo rounded-[20px] my-auto'
        >
            <button
                type='button'
                className='w-[120px] h-[50px] rounded-[20px] bg-background text-center
           hover:text-blueTwo transition-colors duration-300 ease-in-out
          '>
                Contact
            </button>
        </div>
    </div>
}

export default HeaderNav