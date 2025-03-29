'use client'
import "@/css/Projects/Projects.css"
import { faArrowRight, faFile, faGlobe } from "@fortawesome/free-solid-svg-icons"
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

      <div className="projects">

          <div className="single-projects">
            <div className="details">
                <div className="detail">
                  <h1 className="detail-tag" data-text="MKN Global Consultant">MKN Global Consultant</h1>
                  <p>
                    The system, designed for a consultancy firm, aids students and workers in understanding the 
                    visa procedure. It allows users to send emails and access detailed procedural information, 
                    ensuring they are well-informed. Developed with modern web technologies, this system guarantees 
                    a seamless user experience, making the complex visa process more accessible and manageable.
                  </p>
                </div>
                <div className="link-holder">
                  <Link  href="https://mknglobal.co.uk/" className="site-link"><FontAwesomeIcon className="single-projects-icon" icon={faGlobe} />site</Link>
                  <button onClick={()=>handleRoute("kk")} className="detls-link"><FontAwesomeIcon className="single-projects-icon" icon={faArrowRight} />details</button>
                </div>
            </div>
            <img className="project-img1" src="https://i.ibb.co.com/1TKrF6c/Capture3.png" alt="Capture3"/>
          </div>


      </div>
      <div className="project-head">
        {/* <div className="project-head-title">
          <FontAwesomeIcon className="project-icon" icon={faFile} />
          <h1>Projects</h1>
        </div> */}
        <div className="project-navigation">
          <button className="project-navigation-btn">next</button>
          <button className="project-navigation-btn">prev</button>
        </div>
      </div>

    </div>
  )
}

export default ProjectPage