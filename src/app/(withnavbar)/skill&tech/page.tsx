import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TbBooks } from "react-icons/tb"
import '@/css/skill&tech/skill&tech.css'
import { faBootstrap, faCss3, faCss3Alt, faFigma, faGit, faHtml5, faNode, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { faCode, faServer } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const SkillAndTech = () => {

  const skills = [
    { icon: "/assets/html.webp", title: 'HTML' },
    { icon: "/assets/css.svg.png", title: 'CSS' },
    { icon: "/assets/bootstrap1.svg.png", title: 'BOOTSTRAP5' },
    { icon: "/assets/tailwind.png", title: 'TAILWIND' },
    { icon: "/assets/js.png", title: 'JS' },
    { icon: "/assets/firebase.png", title: 'Firebase' },
    { icon: "/assets/react.png", title: 'REACT.js' },
    { icon: "/assets/next-js.svg", title: 'NEXT.js' },
    { icon: "/assets/nodejs.png", title: 'NODE.js' },
    { icon: "/assets/express.png", title: 'EXPRESS.js' },
    { icon: "/assets/mngo.png", title: 'MongoDB' },
    { icon: "/assets/git.png", title: 'Git' },
    { icon: "/assets/cpp.svg.png", title: 'C++' },
  ];

  return (
    <div className="skill-container">
        <div className="skill-title">
          <TbBooks className="header-icon"/>
          <h2>Familiar Tech</h2>
        </div>
        <div className="skills">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <Image src={skill.icon} height={100} width={100} alt="" />
              <h3 className="skill-card-title">{skill.title}</h3>
            </div>
          ))}
        </div>
    </div>
  )
}

export default SkillAndTech