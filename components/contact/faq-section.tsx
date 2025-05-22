"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

export default function FaqSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const handleCallNow = () => {
    // Replace with your phone number
    window.location.href = "tel:+1234567890"
  }

  const faqs = [
    {
      question: "fq1",
      answer: "fqs1",
    },
    {
      question: "fq2",
      answer: "fqs2",
    },
    {
      question: "fq3",
      answer: "fqs3",
    },
    {
      question: "fq4",
      answer: "fqs4",
    },
    {
      question: "fq5",
      answer: "fqs5",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">{t.fq}</h2>
          <p className="text-gray-600">{t.fqs}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md mb-4 overflow-hidden ${activeIndex === index ? "shadow-lg" : ""}`}
            >
              <div className="p-5 flex justify-between items-center cursor-pointer" onClick={() => toggleFaq(index)}>
                <h3 className="text-lg font-medium">{t[faq.question]}</h3>
                <span className="text-green-600">
                  <i className={`fas ${activeIndex === index ? "fa-minus" : "fa-plus"}`}></i>
                </span>
              </div>

              <div className={`px-5 pb-5 transition-all duration-300 ${activeIndex === index ? "block" : "hidden"}`}>
                <p className="text-gray-600 mb-4">{t[faq.answer]}</p>
                <button
                  onClick={handleCallNow}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
                >
                  <i className="fas fa-phone"></i>
                  Call Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Alternative: Global Call Now button at the bottom */}
        <div className="text-center mt-8">
          <button
            onClick={handleCallNow}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
          >
            <i className="fas fa-phone"></i>
            Call Now for More Help
          </button>
        </div>
      </div>
    </section>
  )
}
