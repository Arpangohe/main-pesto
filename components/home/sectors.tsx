"use client"

import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

export default function Sectors() {
  const { language } = useLanguage()
  const t = translations[language]

  const sectors = [
    {
      icon: "school",
      title: "such",
    },
    {
      icon: "hard-hat",
      title: "csh",
    },
    {
      icon: "home",
      title: "rhh",
    },
    {
      icon: "building",
      title: "coh",
    },
    {
      icon: "utensils",
      title: "rh",
    },
    {
      icon: "industry",
      title: "fh",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-indigo-900">{t.sws}</h2>
          <p className="text-gray-600">{t.sectors_sub}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center transition-transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="text-4xl text-green-600 mb-4">
                <i className={`fas fa-${sector.icon}`}></i>
              </div>
              <h3 className="text-lg font-semibold">{t[sector.title]}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
