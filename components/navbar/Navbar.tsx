
"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import paths from '@/utils/paths'
import { usePathname } from 'next/navigation'
import { HeaderContent } from '@/utils/content-pokey'

export default function Navbar() {
    const content = HeaderContent()
    const pathname = usePathname()
    const getPathsFile = paths()
    const links = Array.from(getPathsFile)

    useEffect(() => {
        window.addEventListener('resize', () => {
            // console.log(window.innerHeight, window.innerWidth)
            if (window.innerWidth >= 930) {
                setToggle(false)
               
            }
        })
    }, [])

    const [toggle, setToggle] = useState(false)
    const [active, setActive] = useState('')

    return (

        <nav className="bg-img-1 border-gray-200 dark:border-gray-600 dark:bg-gray-900 relative">
            <div className="overlay-bg-header"></div>
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-1">
                <Link href="#" className="flex z-10 items-center" onClick={() => { setActive(''); window.scrollTo(0, 0) }}>
                    <Image src={content.header_logo} className="h-24 mr-6 w-64" alt="Black And White Pokemon Logo" priority />
                </Link>
                <button id="navButton"
                    onClick={() =>
                        useEffect! ?
                            setToggle(!toggle)
                            :
                            ''
                    }
                     data-collapse-toggle="mega-menu-full" type="button" className=" inline-flex z-10 items-center p-2 w-14 h-14 justify-center text-sm text-gray-500 rounded-lg navbar-md:hidden hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 pr-2" aria-controls="mega-menu-full" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg aria-hidden="true" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                {toggle ?
                    <div className=' absolute w-full text-center bg-slate-900 left-0 nav_top opacity_5 :'>
                        <ul className=" p-4 mt-4 border z-20 ">
                            {links.map((link) => (
                                <li key={link.name}>
                                    {
                                        link.path === pathname ?
                                            <Link href={link.path} className="font_navbar text-2xl block py-2 pl-3 pr-4 text-stone-400 hover:bg-gray-600 
                                " aria-current="page">{link.name}</Link>
                                            :
                                            <Link href={link.path} className="font_navbar text-2xl block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-600 " aria-current="page">{link.name}</Link>
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                    :
                    <div className="items-center justify-between z-10 font-medium hidden w-full navbar-md:flex md:w-auto md:order-1 pr-6">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            {links.map((link) => (
                                <li key={link.name}>
                                    {
                                        link.path === pathname ?
                                            <Link href={link.path} className="font_navbar text-2xl block py-2 pl-3 pr-4 text-stone-400 hover:bg-gray-100 md:hover:text-transparent bg-clip-text bg-gradient-to-l from-blue-300 to-orange-300 navbar-md:p-0
                                " aria-current="page">{link.name}</Link>
                                            :
                                            <Link href={link.path} className="font_navbar text-2xl block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:text-transparent bg-clip-text bg-gradient-to-l from-blue-300 to-orange-300 navbar-md:p-0" aria-current="page">{link.name}</Link>
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>}
            </div>
        </nav>

    )
}