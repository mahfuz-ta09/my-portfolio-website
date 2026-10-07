"use client"
import '@/css/Contact/Contact.css'
import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'
import { TbMailFilled, TbPhone, TbSend } from 'react-icons/tb'

type Inputs = {
  first_name: string
  email: string
  message: string
}

const SERVICE_ID = "service_aru8zsr"
const TEMPLATE_ID = "template_vyxda74"
const PUBLIC_KEY = "vDTcEUa05m7FPqRLn"

const contacts = [
  { icon: TbMailFilled, label: "Email", value: "mahfuz.ta09@gmail.com", href: "mailto:mahfuz.ta09@gmail.com" },
  { icon: TbPhone, label: "Phone", value: "+880 1871-314063", href: "tel:+8801871314063" },
  { icon: TbPhone, label: "Alternate phone", value: "+880 1700-502013", href: "tel:+8801700502013" },
]

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const templateParams = {
      name: data.first_name,
      to_name: 'Md Mahfuz Anam Tasnim',
      from_name: data.email,
      message: data.message,
    }
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      })
      toast.success("Thank you! Your message has been sent.")
      reset()
    } catch (error) {
      toast.error((error as { text?: string })?.text ?? "Something went wrong. Please try again.")
    }
  }

  return (
    <div className="section-holder">
      <div className="contact-card glass-card">

        <div className="contact-info">
          <p className="section-eyebrow">Contact</p>
          <h1 className="section-title">Let&apos;s work together</h1>
          <p className="contact-text">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities.
            Feel free to send me a message, and I&apos;ll get back to you as soon as possible.
          </p>

          <ul className="contact-list">
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <li key={href}>
                <a href={href} className="contact-item">
                  <span className="contact-item-icon"><Icon /></span>
                  <span>
                    <span className="contact-item-label">{label}</span>
                    <span className="contact-item-value">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              aria-invalid={!!errors.first_name}
              {...register("first_name", { required: "Please enter your name." })}
            />
            {errors.first_name && <span className="field-error">{errors.first_name.message}</span>}
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              {...register("email", {
                required: "Please enter your email address.",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email address." },
              })}
            />
            {errors.email && <span className="field-error">{errors.email.message}</span>}
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={5}
              placeholder="How can I help you?"
              aria-invalid={!!errors.message}
              {...register("message", { required: "Please write a message." })}
            />
            {errors.message && <span className="field-error">{errors.message.message}</span>}
          </div>

          <button className="submit-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : <>Send message <TbSend /></>}
          </button>
        </form>

      </div>
    </div>
  )
}

export default ContactPage
