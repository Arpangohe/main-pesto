"use client"

import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

export default function SectorsDetailed() {
  const { language } = useLanguage()
  const t = translations[language]

  const sectors = [
    {
      icon: "fas fa-school",
      title: "schcpunh",
      description: "schcpunp",
    },
    {
      icon: "fas fa-hard-hat",
      title: "constrh",
      description: "constrhp",
    },
    {
      icon: "fas fa-home",
      title: "rhh",
      description: "rhhp",
    },
    {
      icon: "fas fa-building",
      title: "coh",
      description: "cohp",
    },
    {
      icon: "fas fa-utensils",
      title: "rh",
      description: "rhhp",
    },
    {
      icon: "fas fa-industry",
      title: "fh",
      description: "fhp",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-indigo-900">{t.sectorsh}</h2>
          <p className="text-gray-600">{t.sectorshp}</p>
        </div>

        <div className="space-y-6">
          {sectors.map((sector, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start gap-6 bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl text-green-600 p-4 bg-green-50 rounded-full">
                <i className={sector.icon}></i>
              </div>

              <div>
                <h3 className="text-xl font-bold text-green-700 mb-3">{t[sector.title]}</h3>
                <p className="text-gray-700">{t[sector.description]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
