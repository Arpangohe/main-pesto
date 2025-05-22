import Hero from "@/components/home/hero"
import AboutOverview from "@/components/home/about-overview"
import ServicesOverview from "@/components/home/services-overview"
import Sectors from "@/components/home/sectors"
import Testimonials from "@/components/home/testimonials"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutOverview />
      <ServicesOverview />
      <Sectors />
      <Testimonials />
      <CallToAction />
    </>
  )
}
