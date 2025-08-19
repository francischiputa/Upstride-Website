import type React from "react"
import type { Metadata } from "next"
import { Inter, Source_Sans_3 } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
})

export const metadata: Metadata = {
  title: "Upstride Tradez Limited - Office Solutions, Technology & Sustainable Energy",
  description:
    "Your trusted partner in office solutions, cutting-edge electronics, and sustainable energy projects. Premium office furniture, computers, solar panels, and innovative AI solutions.",
  keywords:
    "office furniture, electronics, solar panels, AI solutions, office stationery, computers, air conditioners, home interior",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSans.variable} scroll-smooth`}>
      <head>
        <style>{`
html {
  font-family: ${sourceSans.style.fontFamily};
  --font-sans: var(--font-source-sans);
  --font-mono: var(--font-inter);
}
        `}</style>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
