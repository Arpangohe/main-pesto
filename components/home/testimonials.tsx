"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

export default function Testimonials() {
  const { language } = useLanguage()
  const t = translations[language]

  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      content: "cp",
      author: "Rajesh Kumar",
      position: "Office Manager, Bhopal",
    },
    {
      content: "cp1",
      author: "Priya Sharma",
      position: "Restaurant Owner",
    },
    {
      content: "cp2",
      author: "Amit Patel",
      position: "Homeowner",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-indigo-900">{t.wocsh}</h2>
          <p className="text-gray-600">{t.wocsp}</p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="mb-6 text-gray-700 italic">
              <p>"{t[testimonials[currentIndex].content]}"</p>
            </div>
            <div>
              <h4 className="font-bold">{testimonials[currentIndex].author}</h4>
              <p className="text-gray-600">{testimonials[currentIndex].position}</p>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
