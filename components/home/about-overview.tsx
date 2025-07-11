"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

export default function AboutOverview() {
  const { language } = useLanguage()
  const t = translations[language]

  const carouselImages = [
    "https://i.ibb.co/YTfN7QxG/Whats-App-Image-2025-06-17-at-10-44-15-2d923e78.jpg",
    "https://i.ibb.co/ptYtvSY/Whats-App-Image-2025-06-17-at-10-44-14-9b22e667.jpg"
  ]

  return (
    <section className="py-16">
       <h2 className="text-center text-3xl font-bold mb-3 text-indigo-900">News Flash</h2>
       <p className="text-center">Team The Pestology in panchmadi </p>
      <div className="container mx-auto px-4">

        {/* Carousel Section */}
        <div className="mb-16">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            loop
            navigation
            className="rounded-lg shadow-lg"
          >
            {carouselImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-[300px] relative rounded-lg overflow-hidden">
                  <Image
                    src={src}
                    alt={`Carousel Image ${index + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* About Us Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-indigo-900">{t.welcome_heading}</h2>
          <p className="text-gray-600">{t.welcome_sub}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="https://i.ibb.co/C3wrcY3y/Who-we-are-16-11zon.jpg"
              alt="The Pestology team at work"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-600">{t.who_we_are}</h3>
            <p className="text-gray-700 mb-4">{t.sub_text_p}</p>
            <p className="text-gray-700 mb-6">{t.sub_text_p1}</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-3">
                <i className="fas fa-certificate text-green-600 text-xl"></i>
                <span className="font-medium">{t.ISO}</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-shield-alt text-green-600 text-xl"></i>
                <span className="font-medium">{t.PI}</span>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md font-semibold transition-colors"
            >
              {t.learn_more}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
