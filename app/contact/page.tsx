import PageHero from "@/components/page-hero"
import ContactInfo from "@/components/contact/contact-info"
import ContactForm from "@/components/contact/contact-form"
import MapSection from "@/components/contact/map-section"
import FaqSection from "@/components/contact/faq-section"
import CallToAction from "@/components/call-to-action"

export default function ContactPage() {
  return (
    <>
      <PageHero title="contacth" description="touch" backgroundImage="assets/termite-service_15_11zon.jpg" />
      <ContactInfo />
      <ContactForm />
      <MapSection />
      <FaqSection />
      <CallToAction title="need" description="nnedp" buttonText="call" buttonLink="tel:+918827222101" />
    </>
  )
}
