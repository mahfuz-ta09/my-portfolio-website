import Link from 'next/link'
import type { Metadata } from 'next'
import '../css/NotFound/NotFound.css'

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div className='notfound-container'>
      <h1>Page not found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link className='btn-home' href="/">Return home</Link>
    </div>
  )
}
