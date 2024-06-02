import '@/css/Projects/PrejectDetails.css'
import im from '@/assets/Capture.png'
import im1 from '@/assets/Capture3.png'
import Image from 'next/image'
import Link from 'next/link'

// :{params.projectId}
const page = ({ params }: { params: { projectId: string } }) => {

  return (
    <div className="project-detail-holder">
      <h1>Project name: MKN Global Consultant</h1>
      {/* <iframe className='iframe-content' src='https://mknglobal.co.uk/'/> */}
      <div className='large-image'>
        <Image className='landing-image' src={im} alt="website's ss" />
        <div className="overlay"></div>
        <div className='landing-details'>
          <h1 className='landing-card-header'>Techknowlogy used:</h1>

          <div className='landing-card-container'>
            <div className='landing-card'>
              <h1>Frontend</h1>
              <ul>
                  <h1>-React js</h1>
                  <h1>-Css</h1>
                  <h1>-Tailwind</h1>
              </ul>
            </div>
            <div className='landing-card'>
              <h1>Backend</h1>
              <ul>
                  <h1></h1>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div className='details-links'>
        <h1>backend code :   <Link className='llink' href="">Check now</Link></h1>
        <h1>frontend code :  <Link className='llink' href="">Check now</Link></h1>
        <h1>live site link : <Link className='llink' href="">Check now</Link></h1>
      </div>

      <div className='small-device-details'>
        <div className='small-device-text'>
          <h1>-Customized Layouts for Every Device</h1>
          <h1>-Flexible Design for a Seamless Experience</h1>
          <h1>-Efficient Navigation for Quick Access</h1>
          <h1>-Reliable Performance Across All Devices</h1>
        </div>
        <Image src={im1} alt='Image in mobile device' />
      </div>
    </div>
  )
}

export default page