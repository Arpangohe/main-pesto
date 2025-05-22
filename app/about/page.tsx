import PageHero from "@/components/page-hero"
import OurStory from "@/components/about/our-story"
import WhyChooseUs from "@/components/about/why-choose-us"
import SectorsDetailed from "@/components/about/sectors-detailed"
import Testimonials from "@/components/home/testimonials"
import CallToAction from "@/components/call-to-action"

export default function AboutPage() {
  return (
    <>
      
      <PageHero 
        title="about_title" 
        description="asp" 
        backgroundImage="https://i.ibb.co/sJkB90BZ/about-1-11zon.jpg"
      />
      <OurStory />
      <WhyChooseUs />
      <SectorsDetailed />
      <Testimonials />
      <CallToAction title="cta_content" description="cta_contentp" buttonText="Touch" buttonLink="/contact" />
    </>
  )
}
