import "@/css/Projects/Projects.css"
import type { Metadata } from "next"
import { pageMetadata } from "@/lib/site"
import Image from "next/image"
import Link from "next/link"
import { TbBrandGithub, TbServer, TbWorld } from "react-icons/tb"
import projects from "../../../../public/DataSet/projects.json"

export const metadata: Metadata = pageMetadata(
  "Projects",
  "Full stack web projects by Md Mahfuz Anam Tasnim, including websites for NRC Education Group and MKN Global Consultancy, built with Next.js, React, Express, and MongoDB.",
  "/projects"
)

const iconMap: Record<string, React.ElementType> = {
  faGlobe: TbWorld,
  faServer: TbServer,
  faMobileScreen: TbBrandGithub,
}

const techLabels = {
  frontend: "Frontend",
  backend: "Backend",
  hosting: "Hosting",
  other: "Other",
} as const

const ProjectPage = () => {
  return (
    <div className="section-holder">
      <div className="section-wrap">
        <header>
          <p className="section-eyebrow">Projects</p>
          <h1 className="section-title">Things I&apos;ve built</h1>
        </header>

        <div className="project-grid">
          {projects.map((project) => {
            const [summary, ...features] = project.description
            return (
              <article key={project.id} className="project-card glass-card">
                <div className="project-image">
                  <Image
                    src={project.image}
                    alt={`${project.projectName} preview`}
                    fill
                    sizes="(max-width: 860px) 100vw, 500px"
                  />
                </div>

                <div className="project-body">
                  <h2 className="project-name">{project.projectName}</h2>
                  <p className="project-summary">{summary}</p>

                  <ul className="project-features">
                    {features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>

                  <dl className="project-tech">
                    {(Object.keys(techLabels) as (keyof typeof techLabels)[]).map((key) =>
                      project.technology[key] ? (
                        <div key={key}>
                          <dt>{techLabels[key]}</dt>
                          <dd>{project.technology[key]}</dd>
                        </div>
                      ) : null
                    )}
                  </dl>

                  <div className="project-links">
                    {project.links.filter((link) => link.url).map((link) => {
                      const Icon = iconMap[link.icon]
                      return (
                        <Link key={link.name} href={link.url} target="_blank" className="project-link">
                          {Icon && <Icon />}{link.name}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
