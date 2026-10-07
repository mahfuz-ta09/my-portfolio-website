import Home from "@/component/ui/Home/Home"
import { site } from "@/lib/site"

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: site.image,
  email: `mailto:${site.email}`,
  jobTitle: site.role,
  description: site.description,
  address: { "@type": "PostalAddress", addressLocality: "Sylhet", addressCountry: "BD" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Murari Chand College" },
  worksFor: { "@type": "Organization", name: "Tinkers Technologies Limited" },
  knowsAbout: ["Web development", "AI-assisted development", "MERN stack", "Next.js", "React", "Node.js", "MongoDB", "Scratch", "Arduino"],
  sameAs: site.socials,
}

const HomePage = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Home />
    </div>
  )
}

export default HomePage
