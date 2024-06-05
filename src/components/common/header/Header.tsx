'use client'
import HeaderBanner from '@/components/common/header/HeaderBanner'
import HeaderCTA from '@/components/common/header/HeaderCTA'
import HeaderNav from '@/components/common/header/HeaderNav'
import React, { FC } from 'react'
interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {
    return <header
        className='relative pt-2'
    >
        {/* navbar */}
        <HeaderNav />
        {/* banner */}
        <HeaderBanner />
        {/* cta */}
        <HeaderCTA />
    </header>
}

export default Header