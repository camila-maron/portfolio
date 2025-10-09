import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Camila Maron - Full Stack Developer",
  description:
    "Software Developer with 8+ years of experience designing, developing, testing, and maintaining scalable enterprise applications across healthcare, gaming, and business domains. Adept at full stack development using modern technologies such as React, Node.js, AWS, and cloud microservices. Strong collaborator with cross-functional teams, focused on delivering high-quality digital products. Seeking a growth-oriented company where I can contribute with technical excellence and continue advancing my professional development.",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#a855f7" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
