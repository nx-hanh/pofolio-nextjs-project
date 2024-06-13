import ExpCard from '@/components/experience/ExpCard'
import React, { FC } from 'react'
import CareerPath from '@/types/CareerPath'
import Image from 'next/image'

interface ExpSectionProps {
    index: number,
    item: CareerPath,
}

const ExpSection: FC<ExpSectionProps> = ({
    index,
    item,
}) => {
    const isFlip: boolean = index % 2 !== 0
    return <div
        className='grid grid-cols-6 md:grid-cols-11 gap-1 w-full'
    >
        <div
            className={`${isFlip? 'col-start-7 order-3': 'col-start-2 order-1'} col-span-4`}
        >
            <ExpCard data={item} isFlip={isFlip}/>
        </div>
        {/* logo */}
        <div
            className='order-2 col-start-1 col-span-2 md:col-start-6 md:col-span-1 h-full flex justify-center'
        >
            <div
                className='mt-24 w-24 h-24 rounded-full border-2 bg-background border-foreground flex justify-center items-center'
            >
                <Image
                    width={80}
                    height={80}
                    src={item.logo}
                    alt={item.company}
                />
            </div>
        </div>
        {/* time */}
        <div
            className={`${isFlip? 'col-start-2 order-1 justify-end': 'col-start-7 order-3 justify-start'} hidden md:flex col-span-4 h-full`}
        >
            <div
                className='mt-32 font-bold text-2xl'
            >
                {item.date}
            </div>
        </div>

    </div>
}

export default ExpSection