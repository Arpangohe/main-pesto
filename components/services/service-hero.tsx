"use client"

import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

interface ServiceHeroProps {
  title: string
  description: string
  backgroundImage: string
}

export default function ServiceHero({ title, description, backgroundImage }: ServiceHeroProps) {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section
      className="py-20 text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">{t[title]}</h1>
        <p className="text-lg max-w-3xl mx-auto">{t[description]}</p>
      </div>
    </section>
  )
}
