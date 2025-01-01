import "@/css/Home/Home.css"
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
    <div className="home-container">
      <div className="overlay"></div>
      <div className="hero">
            <div className="hero-tag">
              <p>Hello, I am</p>
              <h1>Md Mahfuz Anam Tasnim</h1>
            </div>
            <h3 className="her-des">Full Stack web developer</h3>
      </div>
      <div className="img-container">
        <img src="https://i.ibb.co.com/gSLHLg8/file.png"/>
      </div>

      <div className="details">
        <div className="about">
          <h1 className="title">About</h1>
          <hr />
          <p>
              I am a dedicated and practicing MERN stack developer with solid knowledge 
              in different technologies and self-motivated and hardworking for an opportunity to work in a 
              challenging environment to prove my skills and utilize my knowledge in the growth of the organization.
          </p>
        </div>
        <div className="about">
          <h1 className="title">Experience</h1>
          <hr />
          <p>
              I am a dedicated and practicing MERN stack developer with solid knowledge 
              in different technologies and self-motivated and hardworking for an opportunity to work in a 
              challenging environment to prove my skills and utilize my knowledge in the growth of the organization.
          </p>
        </div>
        <div className="social">
          <h1 className="title">Social</h1>
          <hr />
          <div className="icons">
            <Link className="socio-lnk" href="/">download cv?</Link>
            <Link className="socio-lnk" href="/"><TbMailFilled/>mahfuz.ta09@gmail.com</Link>
            <Link className="socio-lnk" href="/"><FaGithub/> Github</Link>
            <Link className="socio-lnk" href="/"><FaLinkedin/> Linkedin</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home

{/* <img src="https://i.ibb.co.com/NK3TRvY/myppic.jpg" alt="myppic" border="0">
<img src="https://i.ibb.co.com/gSLHLg8/file.png" alt="file" border="0">
<img src="https://i.ibb.co.com/yN0nYww/books.webp" alt="books" border="0">
<img src="https://i.ibb.co.com/nLYJ048/bootstrap1-svg.png" alt="bootstrap1-svg" border="0">
<img src="https://i.ibb.co.com/JBXNHjj/Capture.png" alt="Capture" border="0">
<img src="https://i.ibb.co.com/kHWhfwm/Capture1.png" alt="Capture1" border="0">
<img src="https://i.ibb.co.com/1TKrF6c/Capture3.png" alt="Capture3" border="0">
<img src="https://i.ibb.co.com/WBLQGkT/cpp-svg.png" alt="cpp-svg" border="0">
<img src="https://i.ibb.co.com/JmFs1FS/css-svg.png" alt="css-svg" border="0">
<img src="https://i.ibb.co.com/4tF0ppm/express.png" alt="express" border="0">
<img src="https://i.ibb.co.com/9sqQSNR/firebase.png" alt="firebase" border="0">
<img src="https://i.ibb.co.com/K7QvKWH/git.png" alt="git" border="0">
<img src="https://i.ibb.co.com/rZsQ4my/html.webp" alt="html" border="0">
<img src="https://i.ibb.co.com/BrDP8Xk/js.png" alt="js" border="0">
<img src="https://i.ibb.co.com/VgZ9gVQ/mngo.png" alt="mngo" border="0">
<img src="https://i.ibb.co.com/j4fm40w/mongo.jpg" alt="mongo" border="0">
<img src="https://i.ibb.co.com/z5RqxjD/nodejs.png" alt="nodejs" border="0">
<img src="https://i.ibb.co.com/TqsqWt9/react.png" alt="react" border="0">
<img src="https://i.ibb.co.com/HLyygZZ/tailwind.png" alt="tailwind" border="0"></img> */}

{/* <h1 className="hero-des">
              I am a dedicated and practicing MERN stack developer with solid knowledge 
              in different technologies and self-motivated and hardworking for an opportunity to work in a 
              challenging environment to prove my skills and utilize my knowledge in the growth of the organization.
            </h1> */}