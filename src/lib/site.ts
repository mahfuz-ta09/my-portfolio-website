import type { Metadata } from "next"

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://my-portfolio-website-phi-seven.vercel.app",
  name: "Md Mahfuz Anam Tasnim",
  role: "Full Stack Web Developer & Programming Instructor",
  description:
    "Portfolio of Md Mahfuz Anam Tasnim, a MERN stack developer from Sylhet, Bangladesh, who builds full stack web applications with AI-assisted development and teaches Scratch, Arduino, and programming.",
  image: "https://i.ibb.co.com/NK3TRvY/myppic.jpg",
  email: "mahfuz.ta09@gmail.com",
  socials: [
    "https://github.com/mahfuz-ta09",
    "https://www.linkedin.com/in/mahfuz09",
    "https://www.codechef.com/users/m_anam_26",
    "https://codeforces.com/profile/manam",
  ],
}

export const pageMetadata = (title: string, description: string, path: string): Metadata => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${title} | ${site.name}`, description, url: path, images: "/opengraph-image" },
  twitter: { title: `${title} | ${site.name}`, description, images: "/opengraph-image" },
})
