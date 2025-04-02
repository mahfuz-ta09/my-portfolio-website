import "@/css/Home/Home.css"
import { FaLinkedin, FaStar } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import Link from "next/link"
import { SiCodechef } from "react-icons/si"




const Home = () => {
  return (
    <div className="hero">
        <div className="hero-item">
          <p>Hello, I am</p>
          <h1>Md Mahfuz Anam Tasnim</h1>
          <h3>Full Stack Web Developer</h3>
          <h5>
            I am a dedicated and practicing MERN stack developer with solid knowledge in different technologies and 
            self-motivated and hardworking,seeking an opportunity to work in a challenging environment to prove my 
            skills and utilize my knowledge in the growth of the organization.
          </h5>
          <Link target="_blank" href="https://drive.google.com/file/d/1Q0CxpMjC8C6N200I9PEJdc-0Rt0uMooY/view?usp=sharing" className="cv-btn" >check cv</Link>
        </div>
        <div className="social-details">
          <div className="contest">
            <div className="contest-logo">
              <SiCodechef className="contest-icon" />
              <div className="contest-icon-str-container">
                <FaStar className="contest-icon-str"  />
                {/* <FaStar className="contest-icon-str"  />
                <FaStar className="contest-icon-str"  />
                <FaStar className="contest-icon-str"  />
                <FaStar className="contest-icon-str"  /> */}
              </div>
            </div>
            <div className="contest-details">
              <h4>Summery in </h4>
              <h6>Codechef</h6>
              <h6>solved 70+ problems</h6>
              <h6>attended 16+ conest</h6>
              <Link target="_blank" className="codechef-link" href="https://www.codechef.com/users/m_anam_26">check</Link>
            </div>
          </div>
          <div className="icons">
            <Link target="_blank" href="https://github.com/mahfuz-ta09"><FaGithub   className="icon-1" /></Link>
            <Link target="_blank" href="https://www.linkedin.com/in/mahfuz09"><FaLinkedin className="icon-2" /></Link>
          </div>
        </div>
    </div>
      
  )
}

export default Home
