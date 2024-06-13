import React, { FC } from 'react'

interface LoadingProps {

}

const Loading: FC<LoadingProps> = ({ }) => {
    return <div className='w-full h-full flex justify-center items-center'>
        <div
            className='relative w-16 h-16 rounded-[50%]            '
            style={{
                perspective: '800px',
            }}
        >
            <div
                className='animate-loading-rotate-one border-b-[3px] border-solid border-[#EFEFFA] absolute top-0 left-0  box-border w-full h-full rounded-[50%] '
            ></div>
            <div
                className='animate-loading-rotate-two border-r-[3px] border-solid border-[#EFEFFA] absolute top-0 right-0 box-border w-full h-full rounded-[50%] '
            ></div>
            <div
                className='animate-loading-rotate-three border-t-[3px] border-solid border-[#EFEFFA] absolute bottom-0 right-0 box-border w-full h-full rounded-[50%] '
            ></div>
        </div>

    </div>
}

export default Loading