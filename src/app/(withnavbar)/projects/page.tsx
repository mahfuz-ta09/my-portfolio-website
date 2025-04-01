'use client'
import "@/css/Projects/Projects.css"
import { faArrowLeft, faArrowRight , faGlobe, faMobileScreen , faServer } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from 'next/navigation'
import Link from "next/link"
import { useEffect, useState } from "react"

const iconMap: Record<string, any> = {
  faGlobe: faGlobe,
  faServer: faServer,
  faMobileScreen: faMobileScreen,
}

const ProjectPage = () => {
  const [project,setProject] = useState<any>(null)
  const [projectId,setProjectId] = useState(1)
  const [totalProject,setTotalProject] = useState(0)

  useEffect(() => {
    fetch("/DataSet/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setTotalProject(data?.length)
        const matchedProject = data.find((proj:any) => proj.id === projectId)
        setProject(matchedProject || null)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [projectId])

  const handleProjectId = (id: number) => {
    if(projectId + id > 0 && projectId + id <= 2) {
      setProjectId(projectId + id)
    }
  }
  

  return (
    <div className="projects-holder">
      <div className="project-details">
        <h6>[{project?.id}/{totalProject}]</h6>
        <h1>{project?.projectName}</h1>
        <div className="link-container-1">
          {
            project?.links?.map((link:any) => (
              <Link key={link?.name} href={link?.url} target="_blank" className="project-link">
                <FontAwesomeIcon icon={iconMap[link?.icon]} className="link-icon" />
                <span>{link?.name}</span>
              </Link>
            ))
          }
        </div>
        <div className="project-description">
          <div className="description">
            {project?.description?.map((desc:any) => (
              <p key={desc}><span>-</span>{desc}</p>
            ))}
          </div>

          <div className="project-tech">
            {project?.technology?.frontend && <h5>Frontend: <span>{project?.technology?.frontend}</span></h5>}
            {project?.technology?.backend && <h5>Backend: <span>{project?.technology?.backend}</span></h5>}
            {project?.technology?.hosting && <h5>Hosted: <span>{project?.technology?.hosting}</span></h5>}
            {project?.technology?.other && <h5>Other: <span>{project?.technology?.other}</span></h5>}
          </div>
        </div>
      </div>
      <div className="project-navigation">
        <button onClick={()=>handleProjectId(-1)}><FontAwesomeIcon icon={faArrowLeft}/></button>
        <button onClick={()=>handleProjectId(1)}><FontAwesomeIcon icon={faArrowRight}/></button>
      </div>
      <div className="project-image">
        <img src={project?.image} alt={project?.projectName} /> 
      </div>
    </div>
  )
}

export default ProjectPage