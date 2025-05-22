import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "The Final Pestology team was professional, thorough, and effective. They eliminated our ant problem completely and provided great tips to prevent future infestations.",
      avatar: "SJ",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Restaurant Owner",
      content:
        "As a restaurant owner, pest control is critical. The Final Pestology has been our trusted partner for years. Their commercial pest control services are discreet and highly effective.",
      avatar: "MC",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Property Manager",
      content:
        "Managing multiple properties means dealing with various pest issues. The Final Pestology provides reliable service across all our locations with customized solutions for each property.",
      avatar: "ER",
      rating: 4,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B4619] mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-gray-100">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#F7B801] text-[#F7B801]" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gray-300" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?text=${testimonial.avatar}`} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-[#0B4619]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
