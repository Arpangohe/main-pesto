"use client"

import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

interface PageHeroProps {
  title: string
  description: string
  backgroundImage: string
}

export default function PageHero({ title, description, backgroundImage }: PageHeroProps) {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section
      className="py-24 text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t[title]}</h1>
        <p className="text-lg max-w-3xl mx-auto">{t[description]}</p>
      </div>
    </section>
  )
}
