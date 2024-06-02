import "@/css/Home/Home.css"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { TbMailFilled } from "react-icons/tb"
import { AiFillFormatPainter } from "react-icons/ai"
import { AiFillDatabase } from "react-icons/ai"
import { IoTabletLandscape } from "react-icons/io5"
import { BiLinkAlt } from "react-icons/bi"
import Link from "next/link"
import me from "@/assets/myppic.jpg"
import Image from "next/image"


const Home = () => {
  return (
    <div className="home-content">
        <div className="link-icon">
          <div className="mail-item">
            <TbMailFilled className="mail-item-logo"/>
            <h1>mahfuz.ta09@gmail.com</h1>
          </div>
          <div className="socio-item">
            <FaFacebook className="socio-item-link" />
            <FaLinkedin className="socio-item-link"/>
            <FaGithub className="socio-item-link"/>
          </div>
        </div>

      <div className="home-element">
        <div className="hero">
          <Image className="profile-pic" src={me} alt="My Photo"/>
          <div className="hero-details">
            <div className="hero-tag">
              <p>Hello, I'm</p>
              <h1>Md Mahfuz Anam Tasnim</h1>
            </div>
            <h1 className="hero-des">I am a dedicated and practicing MERN stack developer with solid knowledge 
              in different technologies and self-motivated and hardworking for an opportunity to work in a 
              challenging environment to prove my skills and utilize my knowledge in the growth of the organization.</h1>
          </div>
        </div>

        <div className="small-details">
              <h1>What do I bring to the table?</h1>
              <div className="small-details-holder">
                  <div className="small-det">
                    <p  className="small-det-p">optimal</p>
                    <AiFillFormatPainter className="small-icon"/>
                    <p  className="small-det-p">DESIGN</p>
                  </div>
                  <div className="small-det">
                    <p  className="small-det-p">smooth web</p>
                    <IoTabletLandscape className="small-icon"/>
                    <p  className="small-det-p">EXPERIENCE</p>
                  </div>
                  <div className="small-det">
                    <p  className="small-det-p">maintainable</p>
                    <AiFillDatabase className="small-icon"/>
                    <p  className="small-det-p">CODE</p>
                  </div>
              </div>
        </div>
      </div>

      <div className="cv-checker">
            <div className='cv-hlder'>
                <BiLinkAlt className='cv-icon'/>
                <Link className='cv-link' href="https://docs.google.com/document/d/1prqw-uLKuSftJkTJLp0ni8oO8HcpTgohtHbsA276nUY/edit?usp=sharing"> click here</Link>
            </div>
            <h1>Check Resume</h1>
        </div>
    </div>
  )
}

export default Home