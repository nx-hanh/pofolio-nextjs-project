import Link from 'next/link'
import React, { FC } from 'react'

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {
    const links = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experiences', href: '#experience' },
        { name: 'Projects', href: '#projects' },
    ]
    return <nav className='hidden lg:flex justify-start items-end gap-3 h-16 font-extralight text-xl'>
        {links.map((link) => (
            <Link key={link.name} href={link.href}
            >
                {link.name}
            </Link>
        ))}
    </nav>

}

export default Navbar