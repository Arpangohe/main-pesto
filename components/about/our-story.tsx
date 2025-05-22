"use client"

import Image from "next/image"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

export default function OurStory() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-indigo-900">{t.our_story}</h2>
          <p className="text-gray-600">{t.our_story_sub}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="https://i.ibb.co/PGqDDVYJ/our-mission.jpg"
              alt="The Pestology team at work"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-600">{t.mission_title}</h3>
            <p className="text-gray-700 mb-4">{t.mission_p1}</p>
            <p className="text-gray-700 mb-4">{t.mission_p2}</p>
            <p className="text-gray-700">{t.mission_p3}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
