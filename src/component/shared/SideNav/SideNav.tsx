"use client"
import '@/css/SideNav/SideNav.css'
import Link from 'next/link'
import { FaBars, FaHome } from "react-icons/fa"
import { FaMobile } from "react-icons/fa"
import { FaCrop } from "react-icons/fa"
import { FaQuidditch } from "react-icons/fa"
import { FaRegFilePdf } from "react-icons/fa"
import { BsFillMortarboardFill } from "react-icons/bs"
import { BiLinkAlt } from "react-icons/bi"
import { useEffect, useRef, useState } from 'react'
import { RxCrossCircled } from 'react-icons/rx'
import { usePathname } from 'next/navigation'



const SideNav = () => {
    const [isOpen,setIsopen] = useState(true)
    const navRef = useRef<HTMLDivElement>(null)
    const pathName = usePathname()



    useEffect(()=>{
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        }
    },[])

    function handleClickOutside(event:any) {
        if (navRef.current && !navRef.current.contains(event.target)) {
          setIsopen(false)
        }
      }
    return (
        <div ref={navRef} className={isOpen? "nav-container open":"nav-container close"}>
            <div className="nav-header">
                <div className='pic'>
                    <h1>Full stack</h1>
                </div>
                <div className='name'>
                    <h1>Web Developer</h1>
                </div>
            </div>
            <div className="nav-body">
                <ul>
                    <Link href="/" className={pathName === '/' ? 'link-container active' : 'link-container'}><FaHome className='icon'/><div className='liink'>Home</div></Link>
                    <Link href="/projects" className={pathName === '/projects' ? 'link-container active' : 'link-container'}><FaCrop  className='icon'/><div className='liink'>Projects</div></Link>
                    <Link href="/skill&tech" className={pathName === '/skill&tech' ? 'link-container active' : 'link-container'}><FaQuidditch  className='icon'/><div className='liink'>Tech</div></Link>
                    {/* <Link href="/blog"  className={pathName === '/blog' ? 'link-container active' : 'link-container'}><FaRegFilePdf  className='icon'/><div className='liink'>Blogs</div></Link> */}
                    <Link href="/education" className={pathName === '/education' ? 'link-container active' : 'link-container'}><BsFillMortarboardFill className='icon'/><div className='liink'>Education</div></Link>
                    <Link href="/contact" className={pathName === '/contact' ? 'link-container active' : 'link-container'}><FaMobile className='icon'/><div className='liink'>Contact</div></Link>
                </ul>
            </div>
            <div className="nav-footer">
                <div className='cv-hlder'>
                    <BiLinkAlt className='cv-icon'/>
                    <Link className='cv-link' href="https://docs.google.com/document/d/1prqw-uLKuSftJkTJLp0ni8oO8HcpTgohtHbsA276nUY/edit?usp=sharing"> click here</Link>
                </div>
                <h1>Check Resume</h1>
            </div>
            <button onClick={()=>setIsopen(!isOpen)} className={isOpen ? 'btn-close' :'nav-controller'}>{isOpen ? "" : <FaBars />}</button>
        </div>
    )
}


export default SideNav