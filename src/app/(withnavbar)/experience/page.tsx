import "@/css/Experience/Experience.css"
import type { Metadata } from "next"
import Link from "next/link"
import { TbArrowUpRight, TbChalkboard, TbCode } from "react-icons/tb"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Experience",
  "Work experience of Md Mahfuz Anam Tasnim: building and maintaining full stack websites for clients, and teaching Scratch, Arduino, and programming at Tinkers Technologies Limited.",
  "/experience"
)

const experiences = [
  {
    icon: TbCode,
    role: "Full Stack Web Developer",
    company: "Client projects",
    summary:
      "I design, build, and maintain full stack websites for businesses, from the user interface to the server, database, and admin tools.",
    points: [
      "Built and still maintain websites for two UK-based student consultancy firms, with document uploads, course listings, and agent applications.",
      "Developed admin and super admin dashboards so clients can manage their own website content.",
      "Currently building shohojepai.com with AI-assisted development, using Claude to speed up planning and coding, and personally reviewing and revising every change before it ships.",
    ],
    sites: [
      { name: "NRC Education Group", url: "https://www.nrcedu-uk.com/", status: "Maintaining" },
      { name: "MKN Global Consultancy", url: "https://mknglobal.co.uk/", status: "Maintaining" },
      { name: "Shohojepai", url: "https://shohojepai.com/", status: "In development" },
    ],
    skills: ["Next.js", "React", "TypeScript", "Express", "MongoDB", "Redux Toolkit", "Claude"],
  },
  {
    icon: TbChalkboard,
    role: "Programming Instructor",
    company: "Tinkers Technologies Limited",
    summary:
      "I teach students to think like makers and programmers, turning ideas into working games, animations, and electronics projects.",
    points: [
      "Introduce young learners to coding logic through Scratch by building games, stories, and animations.",
      "Guide students in building hands-on electronics projects with Arduino, sensors, and circuits.",
      "Teach programming fundamentals such as variables, loops, conditions, and functions through project-based lessons.",
    ],
    sites: [],
    skills: ["Scratch", "Arduino", "Programming", "Teaching"],
  },
]

const ExperiencePage = () => {
  return (
    <div className="section-holder">
      <div className="section-wrap">
        <header>
          <p className="section-eyebrow">Experience</p>
          <h1 className="section-title">Where I&apos;ve worked</h1>
        </header>

        <ol className="timeline">
          {experiences.map(({ icon: Icon, role, company, summary, points, sites, skills }) => (
            <li key={role} className="timeline-item">
              <span className="timeline-dot"><Icon /></span>

              <article className="exp-card glass-card">
                <h2 className="exp-role">{role}</h2>
                <p className="exp-company">{company}</p>
                <p className="exp-summary">{summary}</p>

                <ul className="exp-points">
                  {points.map((point) => <li key={point}>{point}</li>)}
                </ul>

                {sites.length > 0 && (
                  <ul className="exp-sites">
                    {sites.map(({ name, url, status }) => (
                      <li key={url}>
                        <Link href={url} target="_blank" rel="noopener" className="exp-site">
                          <span className="exp-site-name">{name} <TbArrowUpRight /></span>
                          <span className={status === "In development" ? "exp-site-status is-building" : "exp-site-status"}>
                            {status}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="exp-skills">
                  {skills.map((skill) => <span key={skill} className="pill">{skill}</span>)}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default ExperiencePage
