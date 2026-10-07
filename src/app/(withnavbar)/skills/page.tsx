import "@/css/Skills/Skills.css"
import type { Metadata } from "next"
import Image from "next/image"
import { TbChalkboard, TbDeviceDesktop, TbServer, TbSparkles, TbTools } from "react-icons/tb"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Skills & Technologies",
  "Technologies Md Mahfuz Anam Tasnim works with: React, Next.js, Node.js, Express, MongoDB, TypeScript, Redux, Tailwind CSS, Firebase, C++, Scratch, Arduino, and AI-assisted development with Claude.",
  "/skills"
)

const coreStack = [
  { icon: "https://i.ibb.co.com/TqsqWt9/react.png", title: "React.js" },
  { icon: "/assets/next-js.svg", title: "Next.js" },
  { icon: "https://i.ibb.co.com/z5RqxjD/nodejs.png", title: "Node.js" },
  { icon: "https://i.ibb.co.com/4tF0ppm/express.png", title: "Express.js" },
  { icon: "https://i.ibb.co.com/VgZ9gVQ/mngo.png", title: "MongoDB" },
  { icon: "https://i.ibb.co.com/WBLQGkT/cpp-svg.png", title: "C++" },
]

const groups = [
  {
    icon: TbDeviceDesktop,
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Redux Toolkit", "Tailwind CSS", "Bootstrap 5"],
  },
  {
    icon: TbServer,
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "Firebase", "JWT authentication", "REST APIs"],
  },
  {
    icon: TbTools,
    title: "Tools & platforms",
    items: ["Git", "GitHub", "Vercel", "Netlify", "Railway", "Cloudinary"],
  },
  {
    icon: TbSparkles,
    title: "AI-assisted development",
    items: ["Claude", "Prompt engineering", "AI pair programming", "Code review & revision"],
  },
  {
    icon: TbChalkboard,
    title: "Teaching",
    items: ["Scratch", "Arduino", "Programming fundamentals", "C++"],
  },
]

const SkillsPage = () => {
  return (
    <div className="section-holder">
      <div className="section-wrap">
        <header>
          <p className="section-eyebrow">Tech</p>
          <h1 className="section-title">Skills &amp; technologies</h1>
        </header>

        <h2 className="skills-subtitle">Core stack</h2>
        <ul className="core-grid">
          {coreStack.map(({ icon, title }) => (
            <li key={title} className="core-card glass-card">
              <Image src={icon} width={44} height={44} alt={`${title} logo`} />
              <span>{title}</span>
            </li>
          ))}
        </ul>

        <h2 className="skills-subtitle">Everything I work with</h2>
        <div className="group-grid">
          {groups.map(({ icon: Icon, title, items }) => (
            <section key={title} className="group-card glass-card">
              <h3 className="group-title">
                <span className="group-icon"><Icon /></span>
                {title}
              </h3>
              <ul className="group-items">
                {items.map((item) => <li key={item} className="pill">{item}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsPage
