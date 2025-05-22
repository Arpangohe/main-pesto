import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative bg-[#0B4619] text-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Professional Pest Control Solutions</h1>
          <p className="text-lg md:text-xl mb-8">
            Protecting your home and business from unwanted pests with eco-friendly and effective solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-[#F7B801] hover:bg-[#F7B801]/90 text-black">
              <Link href="#services">Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
