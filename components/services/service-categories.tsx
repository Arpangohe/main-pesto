"use client"

import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"
import Link from "next/link"
import Image from "next/image"

export default function ServiceCategories() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-indigo-900">{t.our_servicesp}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{t.our_servicespp}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* General Pest Control Category */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl">
            <div className="h-64 overflow-hidden">
              <Image
                src="https://i.ibb.co/FQ7HCL2/general-service-5-11zon.jpg"
                alt="General Pest Control"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-indigo-900">{t.General_Pest}</h3>
              <p className="text-gray-600 mb-5">{t.General_Pestp}</p>
              <ul className="space-y-2 mb-6">
                <li className="pl-6 relative">
                  <i className="fas fa-check-circle text-green-600 absolute left-0 top-1.5"></i>
                  <span>{t.Generalpservl1}</span>
                </li>
                <li className="pl-6 relative">
                  <i className="fas fa-check-circle text-green-600 absolute left-0 top-1.5"></i>
                  <span>{t.Generalpservl2}</span>
                </li>
                <li className="pl-6 relative">
                  <i className="fas fa-check-circle text-green-600 absolute left-0 top-1.5"></i>
                  <span>{t.Generalpservl3}</span>
                </li>
                <li className="pl-6 relative">
                  <i className="fas fa-check-circle text-green-600 absolute left-0 top-1.5"></i>
                  <span>{t.Generalpservl4}</span>
                </li>
                <li className="pl-6 relative">
                  <i className="fas fa-check-circle text-green-600 absolute left-0 top-1.5"></i>
                  <span>{t.Generalpservl5}</span>
                </li>
              </ul>
              <Link
                href="/services/general-pest"
                className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded font-semibold transition-colors"
              >
                {t.Learn}
              </Link>
            </div>
          </div>

          {/* Termite Control Category */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl">
            <div className="h-64 overflow-hidden">
              <Image
                src="https://i.ibb.co/nNQm1HtL/termite-service-15-11zon.jpg"
                alt="Termite Control"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-indigo-900">{t.Termite_Control}</h3>
              <p className="text-gray-600 mb-5">{t.Termite_Controlp}</p>
              <ul className="space-y-2 mb-6">
                <li className="pl-6 relative">
                  <i className="fas fa-check-circle text-green-600 absolute left-0 top-1.5"></i>
                  <span>{t.Termitel1}</span>
                </li>
                <li className="pl-6 relative">
                  <i className="fas fa-check-circle text-green-600 absolute left-0 top-1.5"></i>
                  <span>{t.Termitel2}</span>
                </li>
                <li className="pl-6 relative">
                  <i className="fas fa-check-circle text-green-600 absolute left-0 top-1.5"></i>
                  <span>{t.Termitel3}</span>
                </li>
                <li className="pl-6 relative">
                  <i className="fas fa-check-circle text-green-600 absolute left-0 top-1.5"></i>
                  <span>{t.Termitel4}</span>
                </li>
                <li className="pl-6 relative">
                  <i className="fas fa-check-circle text-green-600 absolute left-0 top-1.5"></i>
                  <span>{t.Termitel5}</span>
                </li>
              </ul>
              <Link
                href="/services/termite"
                className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded font-semibold transition-colors"
              >
                {t.Learn}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
