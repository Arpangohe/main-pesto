import ServiceHero from "@/components/services/service-hero"
import ServiceDetails from "@/components/services/service-details"
import DosDonts from "@/components/services/dos-donts"
import ServiceCTA from "@/components/services/service-cta"

export default function GeneralPestPage() {
  return (
    <>
      <ServiceHero
        title="General_Pesth"
        description="General_Pesthp"
        backgroundImage="https://i.ibb.co/FQ7HCL2/general-service-5-11zon.jpg"
      />
      <ServiceDetails
        title="service_detailsh"
        description="service_detailshp"
        services={[
          {
            title: "Cockroachh",
            description: "Cockroachp",
            image: "https://i.ibb.co/wZMr6XZB/cockroarch-4-11zon.jpg",
            features: ["Cockroachli1", "Cockroachli2", "Cockroachli3", "Cockroachli4", "Cockroachli5"],
            whatsappLink: "https://wa.link/8mqkjp",
          },
          {
            title: "Mosquitohh",
            description: "Mosquitohp",
            image: "https://i.ibb.co/GQP7N45M/mosquitose-8-11zon.jpg",
            features: ["Mosquitohl1", "Mosquitohl2", "Mosquitohl3", "Mosquitohl4", "Mosquitohl5"],
            whatsappLink: "https://wa.link/vwtfbk",
          },
          {
            title: "Houseflyh",
            description: "Houseflyp",
            image: "https://i.ibb.co/C54NQQSw/housefly-6-11zon.jpg",
            features: ["Houseflyl1", "Houseflyl2", "Houseflyl3", "Houseflyl4", "Houseflyl5"],
            whatsappLink: "https://wa.link/varc9k",
          },
          {
            title: "Bed_Bugh",
            description: "Bed_Bugp",
            image: "https://i.ibb.co/rKbYNNWf/bed-bugs-2-11zon.jpg",
            features: ["Bed_Bugl1", "Bed_Bugl2", "Bed_Bugl3", "Bed_Bugl4", "Bed_Bugl5"],
            whatsappLink: "https://wa.link/m7sd0m",
          },
          {
            title: "Rat_Rodenth",
            description: "Rat_Rodentp",
            image: "https://i.ibb.co/QF42GHNw/Rat-Rodent-Control-11-11zon.jpg",
            features: ["Rat_Rodentl1", "Rat_Rodentl2", "Rat_Rodentl3", "Rat_Rodentl4", "Rat_Rodentl5"],
            whatsappLink: "https://wa.link/vp20hp",
          },
        ]}
      />
      <DosDonts
        title="gen_dosh"
        dos={{
          title: "gen_dosh3",
          items: [
            "gen_dosl1",
            "gen_dosl2",
            "gen_dosl3",
            "gen_dosl4",
            "gen_dosl5",
            "gen_dosl6",
            "gen_dosl7",
            "gen_dosl8",
            "gen_dosl9",
            "gen_dosl10",
          ],
        }}
        donts={{
          title: "gen_dontsh3",
          items: [
            "gen_dontl1",
            "gen_dontl2",
            "gen_dontl3",
            "gen_dontl4",
            "gen_dontl5",
            "gen_dontl6",
            "gen_dontl7",
            "gen_dontl8",
            "gen_dontl9",
            "gen_dontl10",
          ],
        }}
      />
      <ServiceCTA title="ctah" description="ctap" buttonText="Quote" buttonLink="/contact" />
    </>
  )
}
