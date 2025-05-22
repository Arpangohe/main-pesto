import PageHero from "@/components/page-hero"
import ServiceCategories from "@/components/services/service-categories"
import CallToAction from "@/components/call-to-action"

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="our_services"
        description="our_servicespro"
        backgroundImage="https://i.ibb.co/5g5zcdJQ/Main-header-7-11zon.jpg"
      />
      <ServiceCategories />
      <CallToAction title="cta_sectionh" description="cta_sectionp" buttonText="Quote" buttonLink="/contact" />
    </>
  )
}
