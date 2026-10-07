"use client"
import '@/css/SideNav/SideNav.css'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { TbBriefcase, TbCode, TbHome, TbMail, TbMenu2, TbSchool, TbStack2, TbX } from 'react-icons/tb'

const links = [
  { href: '/', label: 'Home', icon: TbHome },
  { href: '/experience', label: 'Experience', icon: TbBriefcase },
  { href: '/projects', label: 'Projects', icon: TbCode },
  { href: '/skills', label: 'Tech', icon: TbStack2 },
  { href: '/education', label: 'Education', icon: TbSchool },
  { href: '/contact', label: 'Contact', icon: TbMail },
]

const SideNav = () => {
  const pathName = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="nav-container">
      <div className="nav-body" ref={navRef}>
        <Link href="/" className="nav-brand" onClick={() => setIsOpen(false)}>
          <Image
            className="nav-profile"
            src="https://i.ibb.co.com/NK3TRvY/myppic.jpg"
            alt="Md Mahfuz Anam Tasnim"
            width={40}
            height={40}
          />
          <span className="nav-name">Mahfuz<span>.</span></span>
        </Link>

        <button
          className="nav-toggle"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <TbX /> : <TbMenu2 />}
        </button>

        <nav className={isOpen ? 'nav-list open' : 'nav-list'}>
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={pathName === href ? 'nav-link is-active' : 'nav-link'}
              aria-current={pathName === href ? 'page' : undefined}
            >
              <Icon className="nav-link-icon" />
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default SideNav
