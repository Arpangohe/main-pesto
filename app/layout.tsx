import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingIcons from "@/components/floating-icons"
import ServicePopup from "@/components/service-popup"
import { LanguageProvider } from "@/context/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "The Pestology - Professional Pest Control Services",
  description:
    "Professional facility solutions for residential and commercial properties. Eco-friendly and effective solutions.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <ServicePopup />
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingIcons />
        </LanguageProvider>
      </body>
    </html>
  )
}
