import Link from 'next/link'
import '../css/NotFound/NotFound.css'


export default function NotFound() {
  return (
    <div className='notfound-container'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className='btn-home' href="/">Return Home</Link>
    </div>
  )
}