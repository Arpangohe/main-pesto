"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="logo">
            <Link href="/" onClick={closeMenu}>
              <Image src="https://i.ibb.co/4nxTTtbb/pestologo.png" alt="The Pestology" width={300} height={150} />
            </Link>
          </div>

          <nav
            className={`nav ${isMenuOpen ? "block absolute top-full left-0 w-full bg-white shadow-md p-5" : "hidden md:block"}`}
          >
            <ul className={`flex ${isMenuOpen ? "flex-col space-y-4" : "flex-row space-x-8"}`}>
              <li>
                <Link
                  href="/"
                  className={`text-gray-800 hover:text-green-600 font-medium ${isMenuOpen ? "block py-2" : ""}`}
                  onClick={closeMenu}
                >
                  {t.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`text-gray-800 hover:text-green-600 font-medium ${isMenuOpen ? "block py-2" : ""}`}
                  onClick={closeMenu}
                >
                  {t.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`text-gray-800 hover:text-green-600 font-medium ${isMenuOpen ? "block py-2" : ""}`}
                  onClick={closeMenu}
                >
                  {t.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`text-gray-800 hover:text-green-600 font-medium ${isMenuOpen ? "block py-2" : ""}`}
                  onClick={closeMenu}
                >
                  {t.contacth}
                </Link>
              </li>
              <div className="lang-buttons ml-8 flex space-x-2">
                <button
                  className={`px-3 py-1 text-sm border rounded ${language === "en" ? "bg-blue-500 text-white" : "border-gray-300"}`}
                  onClick={() => setLanguage("en")}
                >
                  English
                </button>
                <button
                  className={`px-3 py-1 text-sm border rounded ${language === "hi" ? "bg-blue-500 text-white" : "border-gray-300"}`}
                  onClick={() => setLanguage("hi")}
                >
                  हिंदी
                </button>
              </div>
            </ul>
          </nav>

          <div className="mobile-toggle md:hidden" onClick={toggleMenu}>
            <div className="flex flex-col space-y-1.5 cursor-pointer">
              <span className="w-6 h-0.5 bg-gray-800"></span>
              <span className="w-6 h-0.5 bg-gray-800"></span>
              <span className="w-6 h-0.5 bg-gray-800"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
