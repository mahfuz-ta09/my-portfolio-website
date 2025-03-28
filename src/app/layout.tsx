import type { Metadata } from "next"
import "./globals.css"


export const metadata: Metadata = {
  title: "Portfolio of Md Mahfuz Anam",
};

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
