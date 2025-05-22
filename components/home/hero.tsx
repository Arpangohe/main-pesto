"use client"

import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section
      className="py-32 text-white text-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://i.ibb.co/5g5zcdJQ/Main-header-7-11zon.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.hero_title}</h1>
          <p className="text-xl mb-8">{t.hero_desc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/services"
              className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-md font-semibold transition-colors"
            >
              {t.our_services}
            </Link>
            <Link
              href="/contact"
              className="bg-indigo-900 hover:bg-indigo-800 text-white py-3 px-8 rounded-md font-semibold transition-colors"
            >
              {t.get_quote}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
