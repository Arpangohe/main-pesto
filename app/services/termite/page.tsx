import ServiceHero from "@/components/services/service-hero"
import ServiceDetails from "@/components/services/service-details"
import DosDonts from "@/components/services/dos-donts"
import ServiceCTA from "@/components/services/service-cta"

export default function TermitePage() {
  return (
    <>
      <ServiceHero
        title="Termite_Controlh"
        description="Termite_Controlp"
        backgroundImage="https://i.ibb.co/5xLGcbD3/termite-banner-13-11zon.jpg"
      />
      <ServiceDetails
        title="Termite_Protectionh"
        description="Termite_Protectionp"
        services={[
          {
            title: "Anti_Termiteh",
            description: "Anti_Termitehp",
            image: "https://i.ibb.co/hxtjTYh4/Pre-Construction-10-11zon.jpg",
            price: "price_tag",
            features: ["servicel1", "servicel2", "servicel3", "servicel4", "servicel5"],
            whatsappLink:
              "https://wa.me/918827222101?text=I'm%20interested%20in%20pre-construction%20termite%20treatment",
          },
          {
            title: "Post_Consth",
            description: "Post_Consthp",
            image: "https://i.ibb.co/PvLGBMNW/Post-Construction-9-11zon.jpg",
            price: "price_tag1",
            features: ["post_servicel1", "post_servicel2", "post_servicel3", "post_servicel4", "post_servicel5"],
            whatsappLink:
              "https://wa.me/918827222101?text=I'm%20interested%20in%20post-construction%20termite%20treatment",
          },
          {
            title: "Termiteh",
            description: "Termitehp",
            image: "https://i.ibb.co/jvQLhZKb/Termite-Baiting-System-12-11zon.jpg",
            price: "price",
            features: [
              "Termite_servicel1",
              "Termite_servicel2",
              "Termite_servicel3",
              "Termite_servicel4",
              "Termite_servicel5",
            ],
            whatsappLink: "https://wa.me/918827222101?text=I'm%20interested%20in%20termite%20baiting%20system",
          },
          {
            title: "Chemicalh",
            description: "Chemicalp",
            image: "https://i.ibb.co/nsb48Sjt/Chemical-Barrier-Treatment-3-11zon.jpg",
            price: "price1",
            features: [
              "Chemical_servicel1",
              "Chemical_servicel2",
              "Chemical_servicel3",
              "Chemical_servicel4",
              "Chemical_servicel5",
            ],
            whatsappLink:
              "https://wa.me/918827222101?text=I'm%20interested%20in%20chemical%20barrier%20termite%20treatment",
          },
          {
            title: "Termite_Inspectionh",
            description: "Termite_Inspectionp",
            image: "https://i.ibb.co/6Rvgb6w9/Termite-Inspection-14-11zon.jpg",
            price: "price2",
            features: [
              "Termite_Inspectionl1",
              "Termite_Inspectionl2",
              "Termite_Inspectionl3",
              "Termite_Inspectionl4",
              "Termite_Inspectionl5",
            ],
            whatsappLink: "https://wa.me/918827222101?text=I'm%20interested%20in%20termite%20inspection%20services",
          },
        ]}
      />
      <DosDonts
        title="dos_donts_container"
        dos={{
          title: "Do's",
          items: ["Dosl1", "Dosl2", "Dosl3", "Dosl4", "Dosl5", "Dosl6", "Dosl7", "Dosl8", "Dosl9", "Dosl10"],
        }}
        donts={{
          title: "Don'ts",
          items: [
            "Dontsl1",
            "Dontsl2",
            "Dontsl3",
            "Dontsl4",
            "Dontsl5",
            "Dontsl6",
            "Dontsl7",
            "Dontsl8",
            "Dontsl9",
            "Dontsl10",
          ],
        }}
      />
      <ServiceCTA
        title="cta1h"
        description="cta1p"
        buttonText="WhatsApp2"
        buttonLink="https://wa.me/918827222101?text=I'm%20interested%20in%20termite%20control%20services"
        isWhatsApp={true}
      />
    </>
  )
}
