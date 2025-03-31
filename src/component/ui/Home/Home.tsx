import "@/css/Home/Home.css"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { TbMailFilled } from "react-icons/tb"
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
          <Link target="_blank" href="https://docs.google.com/document/d/1kqscHHtjV1YCIUpYxHvULoNPrs-9HvEN9e1j_KZvN8c/edit?usp=sharing" className="cv-btn" >check cv</Link>
        </div>
        <div className="social-icons">
          <img src="https://i.ibb.co.com/NK3TRvY/myppic.jpg" alt="" />
          <div className="icons">
            <Link target="_blank" href="https://github.com/mahfuz-ta09"><FaGithub   className="icon-1" /></Link>
            <Link target="_blank" href="https://www.linkedin.com/in/ma-tasnim"><FaLinkedin className="icon-2" /></Link>
            <Link target="_blank" href="https://www.codechef.com/users/m_anam_26"><SiCodechef className="icon-3" /></Link>
          </div>
        </div>
    </div>
      
  )
}

export default Home
