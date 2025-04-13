import "@/css/Home/Home.css"
import { FaLinkedin, FaStar } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import Link from "next/link"
import { SiCodechef, SiCodeforces } from "react-icons/si"




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
          <Link target="_blank" href="https://drive.google.com/file/d/10wnyXUIp3GxYxX5oJNLKzC37v6bGwHr0/view?usp=sharing" className="cv-btn" >check cv</Link>
        </div>

        <div className="social-details">

          <div className="contest">
            <div className="contest-logo">
              <div className="contest-icon-str-container">
                <Link target="_blank" href="https://github.com/mahfuz-ta09"><FaGithub  className="contest-icon-str"/></Link>
                <Link target="_blank" href="https://www.linkedin.com/in/mahfuz09"><FaLinkedin   className="contest-icon-str"/></Link>
                <Link target="_blank" href="https://www.codechef.com/users/m_anam_26"><SiCodechef   className="contest-icon-str"/></Link>
                <Link target="_blank" href="https://codeforces.com/profile/manam"><SiCodeforces   className="contest-icon-str"/></Link>
              </div>
            </div>

            <div className="contest-details">
              <h6>solved 200+ problems</h6>
              <h6>attended 20+ contests</h6>
            </div>

          </div>
        </div>
    </div>
      
  )
}

export default Home
