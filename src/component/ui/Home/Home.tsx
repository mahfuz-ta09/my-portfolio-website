import "@/css/Home/Home.css"
import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiCodechef, SiCodeforces } from "react-icons/si"
import { TbArrowRight, TbFileText } from "react-icons/tb"

const socials = [
  { label: "GitHub", href: "https://github.com/mahfuz-ta09", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mahfuz09", icon: FaLinkedin },
  { label: "CodeChef", href: "https://www.codechef.com/users/m_anam_26", icon: SiCodechef },
  { label: "Codeforces", href: "https://codeforces.com/profile/manam", icon: SiCodeforces },
]

const stats = [
  { value: "200+", label: "Problems solved" },
  { value: "20+", label: "Contests attended" },
]

const Home = () => {
  return (
    <div className="section-holder">
      <div className="hero">

        <div className="hero-content">
          <p className="section-eyebrow">Hello, I&apos;m</p>
          <h1 className="hero-name">Md Mahfuz Anam Tasnim</h1>
          <h2 className="hero-role">
            Full Stack Web Developer <span>&amp; Programming Instructor</span>
          </h2>
          <p className="hero-bio">
            I&apos;m a MERN stack developer who builds reliable, SEO-friendly web applications from front end to back end.
            I use AI tools like Claude to speed up production and improve accuracy.
            I also teach Scratch, Arduino, and programming fundamentals. I&apos;m self-motivated and hardworking,
            and I&apos;m looking for a challenging role where I can keep growing and help my team succeed.
          </p>

          <div className="hero-actions">
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/10wnyXUIp3GxYxX5oJNLKzC37v6bGwHr0/view?usp=sharing"
              className="btn btn-primary"
            >
              <TbFileText /> View CV
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Contact me <TbArrowRight />
            </Link>
          </div>

          <ul className="hero-socials">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <Link target="_blank" href={href} aria-label={label} title={label}><Icon /></Link>
              </li>
            ))}
          </ul>
        </div>

        <aside className="hero-card glass-card">
          <div className="hero-photo">
            <Image
              src="https://i.ibb.co.com/NK3TRvY/myppic.jpg"
              alt="Md Mahfuz Anam Tasnim"
              fill
              sizes="220px"
              priority
            />
          </div>
          <dl className="hero-stats">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </aside>

      </div>
    </div>
  )
}

export default Home
