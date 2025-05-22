import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function About() {
  const benefits = [
    "Licensed and certified pest control experts",
    "Eco-friendly and safe treatment methods",
    "Customized pest management programs",
    "24/7 emergency pest control services",
    "Satisfaction guaranteed",
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://i.ibb.co/sJkB90BZ/about-1-11zon.jpg"
              alt="Pest control professional"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B4619] mb-6">About The Final Pestology</h2>
            <p className="text-gray-600 mb-6">
              With over 15 years of experience in the pest control industry, we have built a reputation for providing
              reliable, effective, and affordable pest management solutions. Our team of certified professionals is
              dedicated to protecting your home and business from unwanted pests.
            </p>
            <p className="text-gray-600 mb-8">
              We use the latest techniques and environmentally friendly products to ensure the safety of your family,
              pets, and the environment while effectively eliminating pest problems.
            </p>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#F7B801]" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
