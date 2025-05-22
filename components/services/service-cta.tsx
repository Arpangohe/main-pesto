"use client"

import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

interface ServiceCTAProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  isWhatsApp?: boolean
}

export default function ServiceCTA({
  title,
  description,
  buttonText,
  buttonLink,
  isWhatsApp = false,
}: ServiceCTAProps) {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">{t[title]}</h3>
          <p className="text-gray-600 mb-8">{t[description]}</p>
          <Link
            href={buttonLink}
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded font-semibold transition-colors"
          >
            {isWhatsApp && <i className="fab fa-whatsapp mr-2"></i>}
            {t[buttonText]}
          </Link>
        </div>
      </div>
    </section>
  )
}
