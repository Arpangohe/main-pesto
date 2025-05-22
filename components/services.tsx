import { Shield, Bug, Home, Building2, Leaf, Microscope } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      title: "Residential Pest Control",
      description: "Comprehensive pest management solutions for your home.",
      icon: <Home className="h-10 w-10 text-[#0B4619]" />,
    },
    {
      title: "Commercial Pest Control",
      description: "Tailored pest control services for businesses and commercial properties.",
      icon: <Building2 className="h-10 w-10 text-[#0B4619]" />,
    },
    {
      title: "Termite Control",
      description: "Specialized treatments to eliminate and prevent termite infestations.",
      icon: <Bug className="h-10 w-10 text-[#0B4619]" />,
    },
    {
      title: "Eco-Friendly Solutions",
      description: "Environmentally conscious pest control methods that are safe for your family and pets.",
      icon: <Leaf className="h-10 w-10 text-[#0B4619]" />,
    },
    {
      title: "Pest Inspection",
      description: "Thorough inspection services to identify pest problems early.",
      icon: <Microscope className="h-10 w-10 text-[#0B4619]" />,
    },
    {
      title: "Preventive Treatments",
      description: "Proactive measures to keep pests away from your property.",
      icon: <Shield className="h-10 w-10 text-[#0B4619]" />,
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B4619] mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of pest control services to keep your environment safe and healthy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 border-gray-100 hover:border-[#0B4619] transition-colors duration-300"
            >
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-[#0B4619]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
