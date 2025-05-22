"use client"

import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function ServicesOverview() {
  const { language } = useLanguage()
  const t = translations[language]

  const services = [
    {
      icon: "bug",
      title: "pch",
      description: "pcp",
      link: "/services/general-pest",
    },
    {
      icon: "spray-can",
      title: "snh",
      description: "snp",
      link: "/services#sanitization",
    },
    {
      icon: "exchange-alt",
      title: "trh",
      description: "trp",
      link: "/services#traders",
    },
    {
      icon: "tint-slash",
      title: "wph",
      description: "wpp",
      link: "/services#water-proofing",
    },
    {
      icon: "warehouse",
      title: "wwh",
      description: "wwp",
      link: "/services#warehouse",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-indigo-900">{t.our_services}</h2>
          <p className="text-gray-600">{t.srv_sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center transition-transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-4xl text-green-600 mb-6">
                <i className={`fas fa-${service.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4">{t[service.title]}</h3>
              <p className="text-gray-600 mb-6">{t[service.description]}</p>
              <Link
                href={service.link}
                className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center"
              >
                {t.learn_more}
                <i className="fas fa-arrow-right ml-2 text-sm transition-transform group-hover:translate-x-1"></i>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-md font-semibold transition-colors"
          >
            {t.view_all_services}
          </Link>
        </div>
      </div>
    </section>
  )
}
