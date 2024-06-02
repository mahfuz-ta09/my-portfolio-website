import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TbBooks } from "react-icons/tb"
import '@/css/skill&tech/skill&tech.css'
import { faBootstrap, faCss3, faCss3Alt, faFigma, faGit, faHtml5, faNode, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { faCode, faServer } from '@fortawesome/free-solid-svg-icons'

const SkillAndTech = () => {

  const skills = [
    { icon: faHtml5, title: 'HTML' },
    { icon: faCss3Alt, title: 'CSS' },
    { icon: faBootstrap, title: 'BOOTSTRAP5' },
    { icon: faCss3, title: 'TAILWIND' },
    { icon: faSquareJs, title: 'JS' },
    { icon: faReact, title: 'REACT.js' },
    { icon: faReact, title: 'NEXT.js' },
    { icon: faNode, title: 'NODE.js' },
    { icon: faNode, title: 'EXPRESS.js' },
    { icon: faServer, title: 'MongoDB' },
    { icon: faFigma, title: 'Figma' },
    { icon: faGit, title: 'Git' },
    { icon: faCode, title: 'C++' },
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
              <FontAwesomeIcon className="skill-icon" icon={skill.icon} />
              <h3 className="skill-card-title">{skill.title}</h3>
            </div>
          ))}
    </div>
    </div>
  )
}

export default SkillAndTech