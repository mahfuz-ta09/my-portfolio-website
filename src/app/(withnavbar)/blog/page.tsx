import "@/css/BLog/BLog.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  alternates: { canonical: "/blog" },
  robots: { index: false, follow: true },
}

const BlogPage = () => {
  return (
    <div className="blog-container">
        <h1 className="text-4xl text-red-600">Content has not been published yet.</h1>
    </div>
  )
}

export default BlogPage
