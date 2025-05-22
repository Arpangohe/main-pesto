"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

export default function ContactForm() {
  const { language } = useLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
    consent: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement

    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      service: "",
      message: "",
      consent: false,
    })
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2 text-indigo-900">{t.Send}</h2>
            <p className="text-gray-600">{t.Sendp}</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  {t.namel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.namep}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  {t.Email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.Emailp}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                  {t.Phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.Phonep}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
                  {t.Subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t.Subjectp}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="service">
                {t.Service}
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="" disabled>
                  {t.Services}
                </option>
                <option value="pest-control">{t.pch}</option>
                <option value="sanitization">{t.snh}</option>
                <option value="traders">{t.trh}</option>
                <option value="water-proofing">{t.wph}</option>
                <option value="warehouse">{t.wwh}</option>
                <option value="other">{t.Other}</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                {t.yrmsg}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.yrmsgd}
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>

            <div className="mb-6 flex items-start">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 mr-3"
                required
              />
              <label htmlFor="consent" className="text-gray-600 text-sm">
                {t.consent}
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-semibold transition-colors"
              >
                {t.smsg}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
