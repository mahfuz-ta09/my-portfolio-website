import '@/css/SideNav/SideNav.css'
import Link from 'next/link'
import { FaHome } from "react-icons/fa"
import { FaMobile } from "react-icons/fa"
import { FaCrop } from "react-icons/fa"
import { FaQuidditch } from "react-icons/fa"
import { FaRegFilePdf } from "react-icons/fa"
import { BsFillMortarboardFill } from "react-icons/bs"
import { BiLinkAlt } from "react-icons/bi"


const SideNav = () => {
  return (
    <div className="nav-container">
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
                <Link href="/" className='link-container'><FaHome className='icon'/><div className='liink'>Home</div></Link>
                <Link href="/projects" className='link-container'><FaCrop  className='icon'/><div className='liink'>Projects</div></Link>
                <Link href="/skill&tech" className='link-container'><FaQuidditch  className='icon'/><div className='liink'>Tech</div></Link>
                {/* <Link href="/blog" className='link-container'><FaRegFilePdf  className='icon'/><div className='liink'>Blogs</div></Link> */}
                <Link href="/education" className='link-container'><BsFillMortarboardFill className='icon'/><div className='liink'>Education</div></Link>
                <Link href="/contact" className='link-container'><FaMobile className='icon'/><div className='liink'>Contact</div></Link>
            </ul>
        </div>
        <div className="nav-footer">
            <div className='cv-hlder'>
                <BiLinkAlt className='cv-icon'/>
                <Link className='cv-link' href="https://docs.google.com/document/d/1prqw-uLKuSftJkTJLp0ni8oO8HcpTgohtHbsA276nUY/edit?usp=sharing"> click here</Link>
            </div>
            <h1>Check Resume</h1>
        </div>
    </div>
  )
}


export default SideNav