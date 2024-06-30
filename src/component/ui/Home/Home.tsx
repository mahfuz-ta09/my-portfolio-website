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


const Home = () => {
  return (
    <div className="home-content">
        <div className="link-icon">
          <div className="mail-item">
            <TbMailFilled className="mail-item-logo"/>
            <h1>mahfuz.ta09@gmail.com</h1>
          </div>
          <div className="socio-item">
            {/* <Link href="https://www.facebook.com/profile.php?id=100008448583849"><FaFacebook className="socio-item-link" /></Link> */}
            <Link href="https://www.linkedin.com/in/ma-tasnim/"><FaLinkedin className="socio-item-link" /></Link>
            <Link href="https://github.com/mahfuz-ta09"><FaGithub className="socio-item-link"   /></Link>
          </div>
        </div>

      <div className="home-element">
        <div className="hero">
          <img className="profile-pic" src='/assets/myppic.jpg' alt="My Photo"/>
          <div className="hero-details">
            <div className="hero-tag">
              <p>Hello, I am</p>
              <h1 data-text="Md Mahfuz Anam Tasnim">Md Mahfuz Anam Tasnim</h1>
            </div>
            <h1 className="hero-des">I am a dedicated and practicing MERN stack developer with solid knowledge 
              in different technologies and self-motivated and hardworking for an opportunity to work in a 
              challenging environment to prove my skills and utilize my knowledge in the growth of the organization.</h1>
          </div>
        </div>

        <div className="small-details">
              <h1>What expertise do I bring?</h1>
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
    </div>
  )
}

export default Home