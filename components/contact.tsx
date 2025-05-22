"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", phone: "", message: "" })

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000)
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B4619] mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a pest problem? Get in touch with our team for a free consultation and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#0B4619] mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your pest problem..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-[#0B4619] hover:bg-[#0B4619]/90" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>

              {submitSuccess && (
                <div className="p-3 bg-green-100 text-green-700 rounded-md text-center">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#0B4619] mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#0B4619]/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-[#0B4619]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#0B4619]/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-[#0B4619]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@finalpestology.com</p>
                    <p className="text-gray-600">support@finalpestology.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#0B4619]/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-[#0B4619]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Office Address</h4>
                    <p className="text-gray-600">123 Pest Control Avenue</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#0B4619] text-white rounded-lg">
              <h4 className="text-xl font-bold mb-4">Business Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
                <div className="pt-2 mt-2 border-t border-white/20">
                  <p className="font-semibold">24/7 Emergency Services Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
