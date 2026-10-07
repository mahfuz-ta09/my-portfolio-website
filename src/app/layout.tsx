import type { Metadata, Viewport } from "next"
import "./globals.css"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Md Mahfuz Anam Tasnim",
    "Mahfuz Anam",
    "full stack web developer",
    "MERN stack developer",
    "Next.js developer",
    "React developer",
    "web developer in Sylhet",
    "web developer in Bangladesh",
    "programming instructor",
    "Scratch instructor",
    "Arduino instructor",
    "AI-assisted web development",
    "Claude developer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: `${site.name} Portfolio`,
    title: `${site.name} | ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
}

export const viewport: Viewport = {
  themeColor: "#0d2242",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
