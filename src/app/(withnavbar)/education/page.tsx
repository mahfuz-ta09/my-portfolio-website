import "@/css/Education/Education.css"
import type { Metadata } from "next"
import { pageMetadata } from "@/lib/site"
import { TbSchool, TbMapPin, TbLanguage, TbBuildingBank } from "react-icons/tb"

export const metadata: Metadata = pageMetadata(
  "Education",
  "Education of Md Mahfuz Anam Tasnim: B.Sc. (Honours) in Mathematics at Murari Chand College, Sylhet, Bangladesh. Fluent in English and Bangla.",
  "/education"
)

const languages = [
  { name: "Bangla", level: "Native" },
  { name: "English", level: "Fluent" },
]

const EducationPage = () => {
  return (
    <div className="section-holder">
      <div className="section-wrap">

        <header>
          <p className="section-eyebrow">Education</p>
          <h1 className="section-title">Academic background</h1>
        </header>

        <div className="education-grid">

          <section className="edu-card glass-card">
            <span className="edu-card-icon"><TbSchool /></span>
            <p className="edu-card-label">Degree</p>
            <h2 className="edu-card-title">B.Sc. (Honours) in Mathematics</h2>

            <ul className="edu-meta">
              <li><TbBuildingBank className="edu-meta-icon" />Murari Chand College</li>
              <li><TbMapPin className="edu-meta-icon" />Sylhet, Bangladesh</li>
            </ul>
          </section>

          <section className="edu-card glass-card">
            <span className="edu-card-icon"><TbLanguage /></span>
            <p className="edu-card-label">Languages</p>
            <h2 className="edu-card-title">Spoken languages</h2>

            <ul className="lang-list">
              {languages.map(({ name, level }) => (
                <li key={name}>
                  <span>{name}</span>
                  <span className="pill">{level}</span>
                </li>
              ))}
            </ul>
          </section>

        </div>
      </div>
    </div>
  )
}

export default EducationPage
