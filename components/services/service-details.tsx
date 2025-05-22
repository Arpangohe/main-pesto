"use client"

import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"
import Image from "next/image"

interface ServiceFeature {
  title: string
  description: string
  image: string
  features: string[]
  whatsappLink: string
  price?: string
}

interface ServiceDetailsProps {
  title: string
  description: string
  services: ServiceFeature[]
}

export default function ServiceDetails({ title, description, services }: ServiceDetailsProps) {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-indigo-900">{t[title]}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{t[description]}</p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              } bg-white rounded-lg overflow-hidden shadow-lg`}
            >
              <div className="lg:w-1/2">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={t[service.title]}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-4 text-indigo-900">{t[service.title]}</h3>
                <p className="text-gray-600 mb-5">{t[service.description]}</p>

                {service.price && (
                  <div className="bg-green-600 text-white px-4 py-2 rounded inline-block font-bold mb-5">
                    {t[service.price]}
                  </div>
                )}

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="pl-6 relative">
                      <i className="fas fa-check-circle text-green-600 absolute left-0 top-1.5"></i>
                      <span>{t[feature]}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={service.whatsappLink}
                  className="inline-flex items-center bg-[#25D366] hover:bg-[#128C7E] text-white py-2 px-4 rounded font-medium transition-colors"
                >
                  <i className="fab fa-whatsapp mr-2 text-lg"></i>
                  {t.WhatsApp}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
