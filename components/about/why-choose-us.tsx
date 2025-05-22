"use client"

import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

export default function WhyChooseUs() {
  const { language } = useLanguage()
  const t = translations[language]

  const features = [
    {
      icon: "certificate",
      title: "ISO",
      description: "isop",
    },
    {
      icon: "users",
      title: "team",
      description: "teamp",
    },
    {
      icon: "leaf",
      title: "ecoh",
      description: "ecop",
    },
    {
      icon: "handshake",
      title: "cushh",
      description: "cushp",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-indigo-900">{t.wph}</h2>
          <p className="text-gray-600">{t.wpp}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center transition-transform hover:-translate-y-2"
            >
              <div className="text-4xl text-green-600 mb-6">
                <i className={`fas fa-${feature.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4">{t[feature.title]}</h3>
              <p className="text-gray-600">{t[feature.description]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
