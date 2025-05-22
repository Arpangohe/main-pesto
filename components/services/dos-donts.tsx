"use client"

import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

interface DosDontsSection {
  title: string
  items: string[]
}

interface DosDontsProps {
  title: string
  dos: DosDontsSection
  donts: DosDontsSection
}

export default function DosDonts({ title, dos, donts }: DosDontsProps) {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-900">{t[title]}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 md:p-8">
            <h3 className="flex items-center text-xl font-bold mb-6">
              <i className="fas fa-check-circle text-green-600 mr-3"></i>
              {t[dos.title]}
            </h3>
            <ul className="space-y-3">
              {dos.items.map((item, index) => (
                <li key={index} className="pl-6 relative">
                  <i className="fas fa-check text-green-600 absolute left-0 top-1.5"></i>
                  <span>{t[item]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 md:p-8">
            <h3 className="flex items-center text-xl font-bold mb-6">
              <i className="fas fa-times-circle text-red-600 mr-3"></i>
              {t[donts.title]}
            </h3>
            <ul className="space-y-3">
              {donts.items.map((item, index) => (
                <li key={index} className="pl-6 relative">
                  <i className="fas fa-times text-red-600 absolute left-0 top-1.5"></i>
                  <span>{t[item]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
