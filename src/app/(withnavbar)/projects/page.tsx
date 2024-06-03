'use client'
import "@/css/Projects/Projects.css"
import { faArrowRight, faFile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from 'next/navigation'
import Link from "next/link"


const ProjectPage = () => {
  const router = useRouter()
  

  const handleRoute = (k : string) =>{
    router.push(`/projects/${k}`)
  }

  return (
    <div className="projects-holder">
      <div className="project-head">
        <FontAwesomeIcon className="project-icon" icon={faFile} />
        <h1>Projects</h1>
      </div>

      <div className="projects">

          <div className="single-projects">
            <div className="details">
                <div className="detail">
                  <h1>MKN Global Consultant</h1>
                  <p>
                    The system, designed for a consultancy firm, aids students and workers in understanding the 
                    visa procedure. It allows users to send emails and access detailed procedural information, 
                    ensuring they are well-informed. Developed with modern web technologies, this system guarantees 
                    a seamless user experience, making the complex visa process more accessible and manageable.
                  </p>
                </div>
                <Link className="web-link" href="https://mknglobal.co.uk/">visit live site</Link>
                <button onClick={()=>handleRoute("kk")} className="det-button">details<FontAwesomeIcon className="single-projects-icon" icon={faArrowRight} /></button>
            </div>
            <div className="project-images">
              <img className="project-img" src='/assets/Capture.png' alt="" />
              <img className="project-img1" src="/assets/Capture3.png" alt="" />
            </div>
          </div>


      
      </div>

    </div>
  )
}

export default ProjectPage