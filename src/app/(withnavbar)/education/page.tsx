import "@/css/Education/Education.css"
import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons"
import { faBookAtlas, faSchool } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const EducationPage = () => {
  return (
    <div className="education-container">
      <div className="education-head">
        <FontAwesomeIcon className="education-head-icon" icon={faBookAtlas}/>
        <h1>Education And Language</h1>
      </div>

      <div className="eduLan">
        <div className="edu">
          <h1>Education</h1>
          <div className="edu-details">
            <h1>Bsc Honours</h1>
            <div className="details-1">
              <FontAwesomeIcon className="details-1-icon" icon={faGoogleScholar}/>
              <h1>Mathematics</h1>
            </div>
            <div className="details-1">
              <FontAwesomeIcon className="details-1-icon" icon={faSchool}/>
              <h1>Murari Chand College.</h1>
            </div>
              <h1>Sylhet, Bangladesh</h1>
          </div>
        </div>
        <div className="lan">
          <h1>Language</h1>
          <div className="lan-det">
            <h1>Native: Bangla</h1>
            <h1>Fluent: English</h1>
          </div>
        </div>
      </div>

    </div>
  )
}

export default EducationPage