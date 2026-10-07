import type { Metadata } from "next"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata(
  "Contact",
  "Get in touch with Md Mahfuz Anam Tasnim about web development projects, collaborations, or programming classes. Send a message, email, or call.",
  "/contact"
)

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
