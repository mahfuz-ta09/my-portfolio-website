"use client"
import '@/css/Contact/Contact.css'
import { faMobile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'

type Inputs = {
  first_name: string
  email: string
  message: string
}

const SERVICE_ID = "service_gltvwr8"
const TEMPLATE_ID = "template_vyxda74"
const PUBLIC_KEY = "vDTcEUa05m7FPqRLn"

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {

    const templateParams = {
      name: data.first_name,
      to_name:'Md Mahfuz Anam Tasnim',
      from_name:data.email,
      message: data.message,
    }
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
      publicKey: PUBLIC_KEY,
    })
    .then(
      () => {
        toast.success("Email sent successfully!")
      },
      (error) => {
        toast.error(error.text)
      },
    )

  }

  
  return (
    <div className="contact-holder">
      <div className="contact-head">
        <FontAwesomeIcon  className="contact-icon" icon={faMobile}/>
        <h1>Contact</h1>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='name-secton'>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                required
                className='name-input'
                {...register("first_name")}
              />
            </div>
          </div>

          <div className="email-section">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className='name-input'
                required
                {...register("email")}
              />
            </div>
          </div>
          <div className="form-text">
              <label htmlFor="password">Enter your message</label>
              <textarea
                id="password"
                required
                className='text-input'
                {...register("message")}
              />
            </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage