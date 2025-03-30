"use client"
import '@/css/Contact/Contact.css'
import { faMobile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'
import { TbMailFilled, TbPhone } from 'react-icons/tb'

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

      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='form-container-header'>Get in Touch</h1>
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
          <button className='submit-btn' type="submit">Submit</button>
        </form>

        <div className='contact-list'>
          <h1><TbPhone className="mail-item-logo"/>+88 01871314063</h1>
          <h1><TbPhone className="mail-item-logo"/>+88 01700502013</h1>
          <h1><TbMailFilled className="mail-item-logo"/>mahfuz.ta09@gmail.com</h1>
          <p>I'm always open to discuss new projects or answer any questions you might have.</p>
        </div>  


      </div>
    </div>
  )
}


export default ContactPage