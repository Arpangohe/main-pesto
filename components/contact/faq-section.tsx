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
                <p className="text-gray-600">{t[faq.answer]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
