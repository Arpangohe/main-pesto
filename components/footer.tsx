"use client"

import type React from "react"

import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"
import { useState } from "react"
import Image from "next/image"

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="footer-info">
           <div className="logo">
            <Link href="/">
              <Image src="https://i.ibb.co/cKxfW6vt/pestologo-2-removebg-preview.png" alt="The Pestology" width={300} height={150} />
            </Link>
          </div>
            <p className="mb-6">Professional facility solutions for residential and commercial properties.</p>
            <div className="contact-info space-y-3">
              <p className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span>S104, First Floor, JK Rd, Minal Residency, Bhopal, Madhya Pradesh 462023</span>
              </p>
              <p className="flex items-center">
                <span className="text-green-500 mr-3">
                  <i className="fas fa-phone"></i>
                </span>
                <span>(+91) 88272 22101</span>
              </p>
              <p className="flex items-center">
                <span className="text-green-500 mr-3">
                  <i className="fas fa-envelope"></i>
                </span>
                <span>thepestology@gmail.com</span>
              </p>
              <p className="flex items-center">
                <span className="text-green-500 mr-3">
                  <i className="fas fa-id-card"></i>
                </span>
                <span>GSTIN: 23AAVFT1042Q1ZN</span>
              </p>
              <p className="flex items-center">
                <span className="text-green-500 mr-3">
                  <i className="fas fa-certificate"></i>
                </span>
                <span>ISO Certification: ISO 9001:2015</span>
              </p>
            </div>
            <div className="social-links flex space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-green-500 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-form">
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-green-500 inline-block">Contact Us</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white h-24"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} The Pestology. All Rights Reserved. Developed by Arpan Gohe(TechRooot Technology)</p>
        </div>
      </div>
    </footer>
  )
}
