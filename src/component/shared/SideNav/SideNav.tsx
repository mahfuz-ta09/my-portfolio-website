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
import { useEffect, useRef, useState } from 'react'



const SideNav = () => {
    const pathName = usePathname()
    const [isOpen,setIsOpen] = useState(false)
    const linkRef = useRef<HTMLUListElement>(null)


    const handleClickOutside = (event: MouseEvent) => {
        if (linkRef.current && !linkRef.current.contains(event.target as Node)) {
          setIsOpen(false)
        }
    }
    
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    },[])

    return (
        <div className="nav-container">
            <div className="nav-body">
                {/* <FaGlobe className='FaGlobe'/> */}
                <img className='nav-profile' src="https://i.ibb.co.com/NK3TRvY/myppic.jpg" alt="" />
                {isOpen ? <MdCancel onClick={()=>setIsOpen(!isOpen)} className='nav-cntrl'/>
                : <FaBars onClick={()=>setIsOpen(!isOpen)} className='nav-cntrl'/>}
                <ul ref={linkRef} className={isOpen?'nav-list show':'nav-list hide'}>
                    <Link onClick={()=>setIsOpen(false)} href="/" className={pathName === '/' ? 'active' : 'link-container'}><FaHome  className={pathName === '/' ? 'active-icon' : 'icon'}/><div className='liink'>Home</div></Link>
                    <Link onClick={()=>setIsOpen(false)} href="/projects" className={pathName === '/projects' ? 'active' : 'link-container'}><FaCrop   className={pathName === '/projects' ? 'active-icon' : 'icon'}/><div className='liink'>Projects</div></Link>
                    <Link onClick={()=>setIsOpen(false)} href="/skill&tech" className={pathName === '/skill&tech' ? 'active' : 'link-container'}><FaQuidditch   className={pathName === '/skill&tech' ? 'active-icon' : 'icon'}/><div className='liink'>Tech</div></Link>
                    {/* <Link onClick={()=>setIsOpen(false)} href="/blog"  className={pathName === '/blog' ? 'active' : 'link-container'}><FaRegFilePdf   className={pathName === '/contact' ? 'active-icon' : 'link-container'}/><div className='liink'>Blogs</div></Link> */}
                    <Link onClick={()=>setIsOpen(false)} href="/education" className={pathName === '/education' ? 'active' : 'link-container'}><BsFillMortarboardFill  className={pathName === '/education' ? 'active-icon' : 'icon'}/><div className='liink'>Education</div></Link>
                    <Link onClick={()=>setIsOpen(false)} href="/contact" className={pathName === '/contact' ? 'active' : 'link-container'}><FaMobile  className={pathName === '/contact' ? 'active-icon' : 'icon'}/><div className='liink'>Contact</div></Link>
                </ul>
            </div>
        </div>
    )
}


export default SideNav