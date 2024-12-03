import { TbBooks } from "react-icons/tb"
import '@/css/skill&tech/skill&tech.css'
import Image from 'next/image'

const SkillAndTech = () => {
  const skills = [
    { icon: "https://i.ibb.co.com/TqsqWt9/react.png", title: 'REACT.js' },
    { icon: "/assets/next-js.svg", title: 'NEXT.js' },
    { icon: "https://i.ibb.co.com/z5RqxjD/nodejs.png", title: 'NODE.js' },
    { icon: "https://i.ibb.co.com/4tF0ppm/express.png", title: 'EXPRESS.js' },
    { icon: "https://i.ibb.co.com/VgZ9gVQ/mngo.png", title: 'MongoDB' },
    { icon: "https://i.ibb.co.com/WBLQGkT/cpp-svg.png", title: 'C++' },
  ]
  const otherSkills = ['HTML', 'CSS', 'BOOTSTRAP5', 'TAILWIND', 'JS', 'Firebase', 'Git','Redux']


  return (
    <div className="skill-container">
        <div className="skill-title">
          <TbBooks className="header-icon"/>
          <h2>Familiar Tech</h2>
        </div>
        <div className="skills">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <Image src={skill.icon} height={70} width={70} alt={skill.title} />
              <h3 className="skill-card-title">{skill.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="expertise-container">
            <h1 className="expertise-title">Other Fields of Expertise:</h1>
            <p className="expertise-list">
                {otherSkills.join(', ')}
            </p>
        </div>

    </div>
  )
}

export default SkillAndTech