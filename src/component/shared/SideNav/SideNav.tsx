"use client"
import '@/css/SideNav/SideNav.css'
import Link from 'next/link'
import { FaBars, FaGlobe, FaHome } from "react-icons/fa"
import { FaMobile } from "react-icons/fa"
import { FaCrop } from "react-icons/fa"
import { FaQuidditch } from "react-icons/fa"
import { BsFillMortarboardFill } from "react-icons/bs"
import { usePathname } from 'next/navigation'
import { MdCancel } from 'react-icons/md'
import { useState } from 'react'


const SideNav = () => {
    const pathName = usePathname()
    const [isOpen,setIsOpen] = useState(false)


    return (
        <div className="nav-container">
            <div className="nav-body">
                <FaGlobe className='FaGlobe'/>
                {isOpen ? <MdCancel onClick={()=>setIsOpen(!isOpen)} className='nav-cntrl'/>
                : <FaBars onClick={()=>setIsOpen(!isOpen)} className='nav-cntrl'/>}
                <ul className={isOpen?'nav-list show':'nav-list hide'}>
                    <Link href="/" className={pathName === '/' ? 'link-container active' : 'link-container'}><FaHome className='icon'/><div className='liink'>Home</div></Link>
                    <Link href="/projects" className={pathName === '/projects' ? 'link-container active' : 'link-container'}><FaCrop  className='icon'/><div className='liink'>Projects</div></Link>
                    <Link href="/skill&tech" className={pathName === '/skill&tech' ? 'link-container active' : 'link-container'}><FaQuidditch  className='icon'/><div className='liink'>Tech</div></Link>
                    {/* <Link href="/blog"  className={pathName === '/blog' ? 'link-container active' : 'link-container'}><FaRegFilePdf  className='icon'/><div className='liink'>Blogs</div></Link> */}
                    <Link href="/education" className={pathName === '/education' ? 'link-container active' : 'link-container'}><BsFillMortarboardFill className='icon'/><div className='liink'>Education</div></Link>
                    <Link href="/contact" className={pathName === '/contact' ? 'link-container active' : 'link-container'}><FaMobile className='icon'/><div className='liink'>Contact</div></Link>
                </ul>
            </div>
        </div>
    )
}


export default SideNav